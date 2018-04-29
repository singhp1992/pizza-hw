import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bases, sauces, toppings } from '../allOptions'

class TotalPrice extends PureComponent {
    totalPrice() {
        const basePrice = (this.props.base ? bases[this.props.base] : 0)
        const saucePrice = (this.props.sauce ? sauces[this.props.sauce] : 0)

        const toppingPrice = (this.props.toppings).length * .5

        console.log(toppingPrice.length)


        return basePrice + saucePrice + toppingPrice
    }
    
render() {
    return (
        <div>
            <h2 style={{ color: "gold" }}> Total Price </h2>
            {this.totalPrice()}
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
        base: state.bases,
        sauce: state.sauces,
        toppings: state.toppings
    }
}

export default connect(mapStateToProps)(TotalPrice)

