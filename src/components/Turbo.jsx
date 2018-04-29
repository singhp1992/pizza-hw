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
                    // checked={this.state.turbo}
                    onChange={this.handleInputChange} />
            </label>
            </form>
        )
    }
}
