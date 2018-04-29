import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addToppings, deleteTopping } from '../actions/index'
import { toppings } from '../allOptions'
import store from '../store'

//use on change event to limit the number of tickboxes you can use

class ToppingsForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        if (e.target.checked) {
            store.dispatch(addToppings(e.target.value))
        } else {
            store.dispatch(deleteTopping(e.target.value));
        }
    }


render() {
    return (
        <form >
            <legend>Toppings (Max 3 € 0,50 each)</legend>
            <br />


            <input type="checkbox" value="Pineapple " onChange={this.handleChange} />
            <label for="Pineapple">Pineapple</label>

            <input type="checkbox" value="Corn " onChange={this.handleChange} />
            <label for="Corn">Corn</label>

            <br />

            <input type="checkbox" value="Green Olives " onChange={this.handleChange} />
            <label for="Green Olives">Green Olives</label>

            <input type="checkbox" value="Red Onion " onChange={this.handleChange} />
            <label for="Red Onion">Red Onion</label>

            <br />

            <input type="checkbox" value="Spinach " onChange={this.handleChange} />
            <label for="Spinach">Spinach</label>

            <input type="checkbox" value="Cherry Tomatoes " onChange={this.handleChange} />
            <label for="Cherry Tomatoes">Cherry Tomatoes</label>

            <input type="checkbox" value="Chicken " onChange={this.handleChange} />
            <label for="Chicken">Chicken</label>
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
