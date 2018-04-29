import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import {bases, sauces, toppings} from '../allOptions.js'
//import { fetchAllProducts, createProduct, deleteProduct } from '../actions/products'
//import { Link } from 'react-router-dom'
//import ProductForm from './ProductForm'

export default class TotalPrice extends PureComponent {
    totalPrice() {
        //return bases
    }
    render() {
        return (
            <div>
                <h2 style={{ color: "gold" }}> Total Price: </h2>
                {this.totalPrice}
            </div>
        )
    }
}

//the individual prices will show up in the pizza details 
//this page will only show the total price! 