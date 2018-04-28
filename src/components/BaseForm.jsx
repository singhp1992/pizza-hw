import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addBase, updateBase} from '../actions/index'

class BaseForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { base: '20cm NY Style € 6,45' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ base: event.target.base });
    }

    addBase = (base) => {
        this.props.createBase(base)
    }

    updateBase = (base) => {
        this.props.updateBase(this.props.match.params.id, base)
        this.toggleEdit()
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pizza base:
          <select base={this.state.base} onChange={this.handleChange}>
                        <option base="20cm">20cm NY Style € 6,45</option>
                        <option base="25cm">25cm NY Style € 8,99</option>
                        <option base="30cm">30cm NY Style € 11,49</option>
                        <option base="35cm">35cm NY Style € 13,49</option>
                    </select>
                </label>
                <input type="submit" base="Submit" />
            </form>
        );
    }
}

const mapStateToProps = function (state, props) {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps, { addBase, updateBase })(BaseForm)