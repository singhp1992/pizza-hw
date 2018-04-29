import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaDetails extends PureComponent {
    render() {
        const base = this.props.base
        const sauce = this.props.sauce
        const toppings = this.props.toppings

        return (
            <div>
                <h1 style={{ color: "silver" }}> Your Pizza Details: </h1>
                <p> {base} </p>
                <p> {sauce} </p>
                <p> {toppings} </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{ 
        base: state.bases,
        sauce: state.sauces,
        toppings: state.toppings
    }
}

export default connect(mapStateToProps)(PizzaDetails)