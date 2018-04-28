import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { fetchAllProducts, createProduct, deleteProduct } from '../actions/products'
import { Link } from 'react-router-dom'
//import ProductForm from './ProductForm'

export default class TotalPrice extends PureComponent {
    render() {
        return (
            <div>
                <h2 style={{ color: "gold" }}> Total Price: </h2>
            </div>
        )
    }
}