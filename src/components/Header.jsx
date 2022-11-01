import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<nav class="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
				<div class="container flex flex-wrap justify-between items-center mx-auto">
					<a href="#" class="flex items-center">
						<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							BMI Calculator
						</span>
					</a>
				</div>
			</nav>
		);
	}
}
