import React, { Component } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

export default class App extends Component {
	render() {
		return (
			<div className="bg-gray-50 ">
				<Header />

				<Form />
				<Footer />
			</div>
		);
	}
}
