import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addSauce } from '../actions/index'
import { sauces } from '../allOptions'
import store from '../store'

class SauceForm extends PureComponent {
    state = {
        value: '',
    };

    //NEED TO CHANGE THE LAST PART OF THE PAYLOAD
    handleSubmit = (e) => {
        this.setState({ value: e.target.value });
        store.dispatch(addSauce({ value: e.target.value }))
    }

    render() {
        //const initialValues = this.props.intialValues || {}
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Sauce:
                    <select name="sauce" onSubmit={this.handleSubmit}>
                        {sauces.map(sauces => { return <option price={sauces.price} value={sauces.name}>{sauces.name}</option> })}}
                    </select>
                </label>
                <input type="submit" sauce="Submit" />
            </form>
        );
    }
}

const mapStateToProps = function (state, props) {
    return {
        sauce: state.sauce
    }
}

export default connect(mapStateToProps)(SauceForm)