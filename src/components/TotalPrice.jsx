import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bases, sauces, toppings } from '../allOptions'

class TotalPrice extends PureComponent {
    // price() {
    //     const basePrice = (this.props.base ? bases[this.props.base] : 0)
    //     const saucePrice = (this.props.sauce ? sauces[this.props.sauce] : 0)
    //     const toppingPrice = (this.props.topping ? toppings[this.props.topping] : 0)

    //     return basePrice + saucePrice + toppingPrice
    // }
    
render() {
    const basePrice = this.props.basePrice
    const saucePrice = this.props.saucePrice
    const toppings = this.props.toppings

    return (
        <div>
            < h2 style={{ color: "gold" }}> Total Price: {basePrice} </h2 >
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
        basePrice: state.basePrice,
        saucePrice: state.saucePrice,
        toppings: state.toppings
    }
}

export default connect(mapStateToProps)(TotalPrice)

