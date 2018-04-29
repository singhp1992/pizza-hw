import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bases, sauces, toppings } from '../allOptions'

class TotalPrice extends PureComponent {
    pizzaPrice() {
        const basePrice = (this.props.base ? bases[this.props.base] : 0)
        const saucePrice = (this.props.sauce ? sauces[this.props.sauce] : 0)
        const toppingPrice = (this.props.toppings).length * .5
        //const turboPricing = (this.props.turbo * 1.1)
        return basePrice + saucePrice + toppingPrice 
    }
render() {
    return (
        <div>
            <h2 style={{ color: "gold" }}> Prices </h2>
            <p> {this.pizzaPrice()} </p>
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
        base: state.bases,
        sauce: state.sauces,
        toppings: state.toppings,
        // turbo: state.turbo
    }
}

export default connect(mapStateToProps)(TotalPrice)

