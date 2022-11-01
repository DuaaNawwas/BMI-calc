import React, { Component } from "react";
import Box from "./Box";

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weight: 0,
			height: 0,
			BMI: null,
			unit: "metric",
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let result = 0;
		if (this.state.unit == "metric") {
			result = this.state.weight / this.state.height ** 2;
		} else {
			result = (this.state.weight / this.state.height ** 2) * 702;
		}
		this.setState({ BMI: result });
	}

	render() {
		return (
			<>
				<div className="flex gap-10 items-center justify-center">
					<div className="p-4 my-24 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
						<form className="space-y-6" onSubmit={this.handleSubmit}>
							<div className="flex justify-between">
								<div className="flex items-center w-32 pl-4 rounded border border-gray-200 dark:border-gray-700">
									<input
										onChange={this.handleInputChange}
										id="bordered-radio-1"
										type="radio"
										value="metric"
										name="unit"
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										for="bordered-radio-1"
										class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Metric
									</label>
								</div>
								<div className="flex items-center w-32 pl-4 rounded border border-gray-200 dark:border-gray-700">
									<input
										onChange={this.handleInputChange}
										id="bordered-radio-2"
										type="radio"
										value="imperial"
										name="unit"
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										for="bordered-radio-2"
										class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
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
									Your weight in{" "}
									{this.state.unit == "metric" ? "Kilograms" : "Pounds"}
								</label>
								<input
									type="text"
									name="weight"
									id="weight"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									// value={this.state.weight}
									onChange={this.handleInputChange}
									required
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="height"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Your height in{" "}
									{this.state.unit == "metric" ? "Meters" : "Inches"}
								</label>
								<input
									type="text"
									name="height"
									id="height"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									// value={this.state.height}
									onChange={this.handleInputChange}
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
					{this.state.BMI ? <Box BMI={this.state.BMI} /> : null}
				</div>
			</>
		);
	}
}
