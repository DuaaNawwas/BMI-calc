import React, { useState } from "react";
import Box from "./Box";

export default function Form() {
	const [data, setData] = useState({
		weight: 0,
		height: 0,
		BMI: null,
		unit: "metric",
	});

	function handleSubmit(event) {
		event.preventDefault();
		let result = 0;
		if (data.unit == "metric") {
			result = data.weight / data.height ** 2;
		} else {
			result = (data.weight / data.height ** 2) * 702;
		}
		setData({ ...data, BMI: result });
	}

	return (
		<>
			<div className="flex gap-10 items-center justify-center">
				<div className="p-4 my-24 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div className="flex justify-between">
							<div className="flex items-center w-32 pl-4 rounded border border-gray-200 dark:border-gray-700">
								<input
									onChange={(e) => setData({ ...data, unit: e.target.value })}
									id="bordered-radio-1"
									type="radio"
									value="metric"
									name="unit"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									htmlFor="bordered-radio-1"
									className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Metric
								</label>
							</div>
							<div className="flex items-center w-32 pl-4 rounded border border-gray-200 dark:border-gray-700">
								<input
									onChange={(e) => setData({ ...data, unit: e.target.value })}
									id="bordered-radio-2"
									type="radio"
									value="imperial"
									name="unit"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									htmlFor="bordered-radio-2"
									className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Imperial
								</label>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="weight"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your weight in {data.unit == "metric" ? "Kilograms" : "Pounds"}
							</label>
							<input
								type="text"
								name="weight"
								id="weight"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								// value={data.weight}
								onChange={(e) => setData({ ...data, weight: e.target.value })}
								required
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="height"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your height in {data.unit == "metric" ? "Meters" : "Inches"}
							</label>
							<input
								type="text"
								name="height"
								id="height"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								// value={data.height}
								onChange={(e) => setData({ ...data, height: e.target.value })}
								required
							/>
						</div>

						<button
							type="submit"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Calculate
						</button>
					</form>
				</div>
				{data.BMI ? <Box BMI={data.BMI} /> : null}
			</div>
		</>
	);
}
