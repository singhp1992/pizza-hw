import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addToppings, updateToppings } from '../actions/index'

class ToppingsForm extends PureComponent {
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
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Topping #1:
          <select toppings={this.state.toppings} onChange={this.handleChange}>
                        <option toppings="Pineapple">Pineapple € 0,50</option>
                        <option toppings="Corn">Corn € 0,50</option>
                        <option toppings="Green Olives">Green Olives € 0,50</option>
                        <option toppings="Red Onion">Red Onion € 0,50</option>
                        <option toppings="Spinach">Spinach € 0,50</option>
                        <option toppings="Cherry Tomatoes">Cherry Tomatoes € 0,50</option>
                        <option toppings="Chicken">Chicken € 0,50</option>
                    </select>
                </label>
                <input type="submit" toppings="Submit" />
            </form>
            <br />
            <form onSubmit={this.handleSubmit}>
                <label>
                    Topping #2:
          <select toppings={this.state.toppings} onChange={this.handleChange}>
                        <option toppings="Pineapple">Pineapple € 0,50</option>
                        <option toppings="Corn">Corn € 0,50</option>
                        <option toppings="Green Olives">Green Olives € 0,50</option>
                        <option toppings="Red Onion">Red Onion € 0,50</option>
                        <option toppings="Spinach">Spinach € 0,50</option>
                        <option toppings="Cherry Tomatoes">Cherry Tomatoes € 0,50</option>
                        <option toppings="Chicken">Chicken € 0,50</option>
                    </select>
                </label>
                <input type="submit" toppings="Submit" />
            </form>
            <br />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Topping #3: 
          <select toppings={this.state.toppings} onChange={this.handleChange}>
                            <option toppings="Pineapple">Pineapple € 0,50</option>
                            <option toppings="Corn">Corn € 0,50</option>
                            <option toppings="Green Olives">Green Olives € 0,50</option>
                            <option toppings="Red Onion">Red Onion € 0,50</option>
                            <option toppings="Spinach">Spinach € 0,50</option>
                            <option toppings="Cherry Tomatoes">Cherry Tomatoes € 0,50</option>
                            <option toppings="Chicken">Chicken € 0,50</option>
                        </select>
                    </label>
                    <input type="submit" toppings="Submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = function (state, props) {
    return {
        toppings: state.toppings
    }
}

export default connect(mapStateToProps, { addToppings, updateToppings })(ToppingsForm)
