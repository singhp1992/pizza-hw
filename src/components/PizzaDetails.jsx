import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaDetails extends PureComponent {
    render() {
        const base = this.props.base
        const sauce = this.props.sauce
        const toppings = this.props.toppings
        const turbo = this.props.turbo

        return (
            <div>
                <h1 style={{ color: "silver" }}> Your Order Details: </h1>
                <p> {base} </p>
                <p> {sauce} </p>
                <p> {toppings} </p>
                <p> {turbo} </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{ 
        base: state.bases,
        sauce: state.sauces,
        toppings: state.toppings,
        turbo: state.turbo
    }
}

export default connect(mapStateToProps)(PizzaDetails)