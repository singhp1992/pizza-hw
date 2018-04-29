import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bases } from '../allOptions'
import { addBase } from '../actions/index'
import store from '../store'

class BaseForm extends PureComponent {
    state = {
        value: ' ',
    };
    
    //the end of the last part changes what is put into the state - need to figure out how to put the name in there
    handleSubmit = (e) => {
        this.setState({ value: e.target.value });
        store.dispatch(addBase({ value: e.target.value }))
    }

    render() {
        //const initialValues = this.props.initialValues || {}
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pizza base:
                    <select onSubmit={this.handleSubmit}>
                        {bases.map(bases => { return <option price={bases.price} value={bases.name}>{bases.name}</option> })}}
                    </select>
                </label>
                <input type="submit" base="Submit" />
            </form>
        );
    }
}


const mapStateToProps = function (state, props) {
    return {
        bases: state.bases
    }
}

export default connect(mapStateToProps)(BaseForm)