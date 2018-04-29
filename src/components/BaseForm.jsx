import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addBase } from '../actions/index'
import store from '../store'

class BaseForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        store.dispatch(addBase({ value: e.target.value }))
    }

    handleSubmit = (e) => {
       e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pizza base:
                    <select value={this.state.value} price={this.state.price} onChange={this.handleChange}>
                        <option value="25cm NY Style € 8,99">25cm NY Style € 8,99</option>
                        <option value="30cm NY Style € 11,49" >30cm NY Style € 11,49</option>
                        <option value='35cm NY Style € 13,49'>35cm NY Style € 13,49</option>
                        <option value='20cm NY Style € 6,45'>20cm NY Style € 6,45</option>
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

export default connect(mapStateToProps, { addBase })(BaseForm)