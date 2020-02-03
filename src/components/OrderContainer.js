import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Order extends Component {
	render() {
		return (
			<div className="orderContainer">
				Order
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		title: state.appTitle
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export const OrderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Order)