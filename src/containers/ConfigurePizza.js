import React, { PureComponent } from 'react'
import BaseForm from '../components/BaseForm'
import SauceForm from '../components/SauceForm'
import ToppingsForm from '../components/ToppingsForm'
import Turbo from '../components/Turbo'
import PizzaDetails from '../components/PizzaDetails'
import TotalPrice from '../components/TotalPrice'

export default class ConfigurePizza extends PureComponent {
    render() {
        return (
        <div>
            <br />
            <BaseForm />
            <br />
            <SauceForm />
            <br />
            <ToppingsForm />
            <br />
            <Turbo />
            <br /> 
            <PizzaDetails />
            <br /> 
            <TotalPrice />
        </div>
        )
    }
}