import React from "react";

export default function Header() {
	return (
		<nav className="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<a href="#" className="flex items-center">
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						BMI Calculator
					</span>
				</a>
			</div>
		</nav>
	);
}
