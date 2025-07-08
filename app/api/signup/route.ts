import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import database from '@/app/lib/db';

export async function POST(request: NextRequest) {
    try {
        const { name, surname, email, password } = await request.json();

        if (!name || !surname || !email || !password) {
            return NextResponse.json(
                { message: 'Missing fields' },
                { status: 400 }
            );
        }

        console.log('Received registration data:', { name, surname, email });

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Password hashed:', hashedPassword);

        // ✅ Find next available ID
        const idResult = await database.query(`
            SELECT COALESCE(
                (
                    SELECT MIN(t1.id + 1)
                    FROM users t1
                    LEFT JOIN users t2 ON t1.id + 1 = t2.id
                    WHERE t2.id IS NULL AND t1.id + 1 > 0
                ),
                1
            ) AS next_id;
        `);
        const nextId = idResult.rows[0].next_id;
        console.log('Next available ID:', nextId);

        // ✅ Insert with manual ID
        const insertQuery = `
            INSERT INTO users (id, name, surname, email, password)
            VALUES ($1, $2, $3, $4, $5)
        `;
        const values = [nextId, name, surname, email, hashedPassword];

        await database.query(insertQuery, values);

        console.log('User inserted successfully');
        return NextResponse.json({ message: 'User registered' }, { status: 200 });
    } catch (error: unknown) {
        console.error('Registration error:', error);

        if (
            error &&
            typeof error === 'object' &&
            'code' in error &&
            (error as any).code === '23505'
        ) {
            return NextResponse.json(
                { message: 'Email already registered' },
                { status: 409 }
            );
        } else {
            const errorMessage =
                error instanceof Error ? error.message : 'Registration failed';
            return NextResponse.json(
                { message: errorMessage },
                { status: 500 }
            );
        }
    }
}