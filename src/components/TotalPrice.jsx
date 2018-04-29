import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// export const toppings = {
//     "Pineapple": 0.50,
//     "Corn": 0.50,
//     "Olives (green)": 0.50,
//     "Red onion": 0.50,
//     "Spinach": 0.50,
//     "Cherry tomatoes": 0.50,
//     "Chicken": 0.50,
// }

class TotalPrice extends PureComponent {
    render() {
     
        const basePrice = this.props.basePrice
        const saucePrice = this.props.saucePrice
        return (
            <div>
                <h2 style={{ color: "gold" }}> Total Price: </h2>
                <p> {basePrice + saucePrice} </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        basePrice: state.basePrice,
        saucePrice: state.saucePrice,
        //toppingPrice: state.toppingPrice
    }
}

export default connect(mapStateToProps)(TotalPrice)

