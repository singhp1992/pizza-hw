import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addSauce } from '../actions/index'
import store from '../store'
import { sauces } from '../allOptions'

class SauceForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        store.dispatch(addSauce({ value: e.target.value }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Sauce:
                    <select value={this.state.value} price={this.state.value} onChange={this.handleChange}>
                        <option value="White Sauce">White Sauce</option>
                        <option value="Red Sauce" >Red Sauce</option>
                        <option value="Double Red Sauce">Double red sauce (+1.0)</option>
                        <option value="Mix it up!">Mix it up! (+1.50)</option>
                    </select>
                </label>
                <input type="submit" sauce="Submit" />
            </form>
        );
    }
}

const mapStateToProps = function (state, props) {
    return {
        sauces: state.sauces
    }
}

export default connect(mapStateToProps, { addSauce })(SauceForm)