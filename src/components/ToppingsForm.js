import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//import { addBase, updateBase } from '../actions/pizza'

export default class BaseForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { toppings: 'Pineapple' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ toppings: event.target.toppings });
    }

    // addBase = (base) => {
    //     this.props.createBase(base)
    // }

    // updateBase = (base) => {
    //     this.props.updateBase(this.props.match.params.id, base)
    //     this.toggleEdit()
    // }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Choose your toppings (max 3):
          <select toppings={this.state.toppings} onChange={this.handleChange}>
                        <option toppings="Pineapple">Pineapple</option>
                        <option toppings="Corn">Corn</option>
                        <option toppings="Green Olives">Green Olives</option>
                        <option toppings="Red Onion">Red Onion</option>
                        <option toppings="Spinach">Spinach</option>
                        <option toppings="Cherry Tomatoes">Cherry Tomatoes</option>
                        <option toppings="Chicken">Chicken</option>
                    </select>
                </label>
                <input type="submit" toppings="Submit" />
            </form>
        );
    }
}
