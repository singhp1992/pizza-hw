import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addTurbo, deleteTurbo } from '../actions/index'
import store from '../store'

class Turbo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        if (e.target.checked) {
            store.dispatch(addTurbo(e.target.value))
        } else {
            store.dispatch(deleteTurbo(e.target.value));
        }
    }
    
    render() {
        return (
            <form>
            <label>
                Turbo Drone Delivery (additional 10%): 
                <input type="checkbox" value="Turbo Drone Delivery!"
                    //checked={this.state.turbo}
                    onChange={this.handleChange} />
            </label>
            </form>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        turbo: state.turbo
    }
}

export default connect(mapStateToProps, { addTurbo })(Turbo)

