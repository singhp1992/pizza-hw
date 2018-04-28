import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

export default class Turbo extends PureComponent {
    render() {
        return (
            <form>
            <label>
                Turbo Drone Delivery (additional 10%): 
                <input
                    name="turbo"
                    type="checkbox"
                    //don't need this because it's not connected to the state
                    // checked={this.state.turbo}
                    onChange={this.handleInputChange} />
            </label>
            </form>
        )
    }
}
