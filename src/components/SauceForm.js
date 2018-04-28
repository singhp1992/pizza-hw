import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//import { addBase, updateBase } from '../actions/pizza'

export default class SauceForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { sauce: '20cm NY Style € 6,45' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ sauce: event.target.sauce });
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
                    Choose your sauce:
          <select sauce={this.state.sauce} onChange={this.handleChange}>
                        <option sauce="White Sauce">White Sauce</option>
                        <option sauce="Red Sauce">Red Sauce</option>
                        <option sauce="Double Red Sauce">Double Red Sauce € 1,00</option>
                        <option sauce="Mix It Up">Mix it up € 1,50</option>
                    </select>
                </label>
                <input type="submit" sauce="Submit" />
            </form>
        );
    }
}
