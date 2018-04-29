import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addToppings, deleteTopping } from '../actions/index'
import { toppings } from '../allOptions'
import store from '../store'


class ToppingsForm extends PureComponent {

    handleChange = (e) => {
        if (e.target.checked) {
            store.dispatch(addToppings(e.target.value))
        } else {
            store.dispatch(deleteTopping(e.target.value));
        }
    }

    render() {
        return (
            <form>
                <p>Toppings (€ 0,50 each) </p>
                <label>
                    Pineapple
                <input name="topping"
                        type="checkbox"
                        // checked={this.state.turbo}
                        onChange={this.handleChange} />
                </label>
                <label>
                    Corn
                <input
                        name="topping"
                        type="checkbox"
                        onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Green Olives
                <input
                        name="topping"
                        type="checkbox"
                        onChange={this.handleChange} />
                </label>
                <label>
                    Red Onion
                <input
                        name="topping"
                        type="checkbox"
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Spinach
                <input
                        name="topping"
                        type="checkbox"
                        onChange={this.handleChange} />
                </label>
                <label>
                    Cherry Tomatoes
                <input
                        name="topping"
                        type="checkbox"
                        onChange={this.handleChange} />
                </label>
                <label>
                    Chicken
                <input
                        name="topping"
                        type="checkbox"
                        onChange={this.handleChange} />
                </label>
            </form>
        )
    }
}




const mapStateToProps = function (state, props) {
    return {
        toppings: state.toppings
    }
}

export default connect(mapStateToProps, { addToppings, deleteTopping })(ToppingsForm)
