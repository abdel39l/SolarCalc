'use client';
import { useState, ChangeEvent,JSX } from 'react';

export default function CalculatorPage() {
    const [system, setSystem] = useState<'onGrid' | 'offGrid' | 'hybrid'>('onGrid');
    const [period, setPeriod] = useState<'yearly' | 'monthly' | 'daily'>('monthly');
    const [consumption, setConsumption] = useState<number | ''>('');
    const [solarHours, setSolarHours] = useState<number>(5);
    const [roofSpace, setRoofSpace] = useState<'yes' | 'no'>('yes');
    const [batteryType, setBatteryType] = useState<'gel' | 'lithium'>('gel');
    const [result, setResult] = useState<JSX.Element | null>(null);

    const handleCalculate = () => {
        if (roofSpace === 'no') {
            setResult(<p className="text-red-600 p-4 bg-red-50 rounded-lg">Sorry, you don't have enough space for solar panels.</p>);
            return;
        }

        if (consumption === '' || Number(consumption) <= 0 || isNaN(Number(consumption))) {
            setResult(<p className="text-red-600 p-4 bg-red-50 rounded-lg">Please enter a valid positive consumption number.</p>);
            return;
        }

        const systemLoss = 0.3;
        const panelWattage = 0.59;
        const storage = 1.5;
        const solarFraction = 0.7;

        let dailyConsumption = 0;

        if (period === 'yearly') dailyConsumption = Number(consumption) / 365;
        else if (period === 'monthly') dailyConsumption = Number(consumption) / 30;
        else dailyConsumption = Number(consumption);

        let panelsNeeded = 0;

        if (system === 'onGrid') {
            panelsNeeded = dailyConsumption / panelWattage+(panelWattage * solarHours);
        } else if (system === 'offGrid') {
            panelsNeeded = (dailyConsumption * storage * (1 + systemLoss)) / panelWattage+(panelWattage * solarHours);
        } else if (system === 'hybrid') {
            panelsNeeded = (dailyConsumption * solarFraction * (1 + systemLoss)) / panelWattage+(panelWattage * solarHours);
        }

        let batterySize = 0;

        if (system === 'offGrid') {
            batterySize = dailyConsumption * 0.5 * (1 - systemLoss);
        } else if (system === 'hybrid') {
            batterySize = dailyConsumption * 0.7 * (1 - systemLoss);
        }

        let batteryText = '';

        if (batteryType === 'gel') {
            if (batterySize <= 5) {
                batteryText = `Suggested: 1 x 100Ah gel battery`;
            } else if (batterySize <= 15) {
                batteryText = `Suggested: 1 x 200Ah gel battery`;
            } else {
                const num200Ah = Math.floor(batterySize / 2.4);
                const remaining = batterySize % 2.4;
                const num100Ah = Math.ceil(remaining / 1.2);
                batteryText = `Suggested: ${num200Ah} x 200Ah + ${num100Ah} x 100Ah gel batteries`;
            }
        } else if (batteryType === 'lithium') {
            if (batterySize <= 5) {
                batteryText = `Suggested: 1 x 5kWh lithium battery`;
            } else if (batterySize <= 15) {
                batteryText = `Suggested: 1 x 15kWh lithium battery`;
            } else {
                const num15kWh = Math.floor(batterySize / 15);
                const remaining = batterySize % 15;
                const num5kWh = Math.ceil(remaining / 5);
                batteryText = `Suggested: ${num15kWh} x 15kWh + ${num5kWh} x 5kWh lithium batteries`;
            }
        }

        setResult(
            <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Calculation Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-sm font-medium text-gray-500">Panels Needed</p>
                        <p className="text-2xl font-bold text-blue-600">{Math.ceil(panelsNeeded)}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-sm font-medium text-gray-500">System Type</p>
                        <p className="text-xl font-semibold text-blue-600 capitalize">{system}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-sm font-medium text-gray-500">Battery Size</p>
                        <p className="text-xl font-semibold text-blue-600">{batterySize.toFixed(1)} kWh</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-sm font-medium text-gray-500">Battery Recommendation</p>
                        <p className="text-md font-medium text-blue-600">{batteryText}</p>
                    </div>
                </div>
            </div>
        );
    };

    const handleReset = () => {
        setSystem('onGrid');
        setPeriod('monthly');
        setConsumption('');
        setSolarHours(5);
        setRoofSpace('yes');
        setBatteryType('gel');
        setResult(null);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-green-400 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white/80 border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Solar Quantity Need Calculator</h1>
                        <h2 className="text-xl font-semibold text-gray-600 mt-2">Quantity Need Calculator</h2>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* System Type Selection */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Select preferred system type</label>
                            <div className="flex flex-wrap gap-4">
                                {['onGrid', 'offGrid', 'hybrid'].map((type) => (
                                    <label key={type} className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                            name="system"
                                            value={type}
                                            checked={system === type}
                                            onChange={() => setSystem(type as 'onGrid' | 'offGrid' | 'hybrid')}
                                        />
                                        <span className="ml-2 text-sm text-gray-700 capitalize">
                                            {type === 'onGrid' ? 'On Grid' :
                                                type === 'offGrid' ? 'Off Grid' :
                                                    'Hybrid'}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Consumption Period */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Select your consumption period</label>
                            <div className="flex flex-wrap gap-4">
                                {['yearly', 'monthly', 'daily'].map((per) => (
                                    <label key={per} className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                            name="period"
                                            value={per}
                                            checked={period === per}
                                            onChange={() => setPeriod(per as 'yearly' | 'monthly' | 'daily')}
                                        />
                                        <span className="ml-2 text-sm text-gray-700 capitalize">{per}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Consumption Value */}
                        <div>
                            <label htmlFor="consumption" className="block text-sm font-medium text-gray-700 mb-1">
                                Enter your consumption value in kWh
                            </label>
                            <input
                                type="number"
                                min="1"
                                id="consumption"
                                name="consumption"
                                placeholder="10"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                value={consumption}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setConsumption(e.target.value === '' ? '' : Number(e.target.value))
                                }
                                onKeyDown={(e) => {
                                    if (e.key === '-' || e.key === 'e' || e.key === '0') e.preventDefault();
                                }}
                            />
                        </div>

                        {/* Solar Hours */}
                        <div>
                            <label htmlFor="solarHours" className="block text-sm font-medium text-gray-700 mb-1">
                                Select your active sun hours
                            </label>
                            <select
                                id="solarHours"
                                name="solarHours"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                value={solarHours}
                                onChange={(e) => setSolarHours(Number(e.target.value))}
                            >
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i + 5} value={i + 5}>
                                        {i + 5} hours
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Roof Space */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Do you have over 25m² of roof space?</label>
                            <div className="flex flex-wrap gap-4">
                                {['yes', 'no'].map((space) => (
                                    <label key={space} className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                            name="roofSpace"
                                            value={space}
                                            checked={roofSpace === space}
                                            onChange={() => setRoofSpace(space as 'yes' | 'no')}
                                        />
                                        <span className="ml-2 text-sm text-gray-700 capitalize">{space}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Battery Type */}
                        <div>
                            <label htmlFor="batteryType" className="block text-sm font-medium text-gray-700 mb-1">
                                Choose battery type
                            </label>
                            <select
                                id="batteryType"
                                name="batteryType"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                value={batteryType}
                                onChange={(e) => setBatteryType(e.target.value as 'gel' | 'lithium')}
                            >
                                <option value="gel">Gel Accumulator</option>
                                <option value="lithium">Lithium Battery</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center space-x-4 pt-4">
                            <button
                                type="button"
                                onClick={handleCalculate}
                                className="group relative px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors overflow-hidden"
                            >
                                <span className="relative z-10">Calculate</span>
                                <span className="absolute inset-0 border-4 border-purple-600 rounded-full animate-spin group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="px-6 py-2 bg-red-600 border border-red-500-300 text-gray-700 font-medium rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </form>

                    {/* Result Display */}
                    <div className="mt-8">
                        {result}
                    </div>
                </div>
            </div>
        </main>
    );
}