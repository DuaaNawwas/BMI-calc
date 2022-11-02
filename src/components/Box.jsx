import React from "react";

export default function Box(props) {
	const BMI = props.BMI;
	return (
		<>
			<div class="overflow-hidden bg-white rounded-lg shadow w-60">
				<div class="px-4 py-5 lg:p-6">
					<dl>
						<dt class="text-sm font-medium leading-5 text-gray-500 truncate">
							Your BMI is: {props.BMI}
						</dt>
						<dd class="mt-1 text-3xl font-semibold leading-9 text-gray-900">
							You are:{" "}
							{BMI < 18.5
								? "Underweight"
								: BMI < 24.9
								? "Normal Weight"
								: BMI < 29.9
								? "Overweight"
								: "Obese"}
						</dd>
					</dl>
				</div>
			</div>
		</>
	);
}
