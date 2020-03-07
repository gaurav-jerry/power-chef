import React from 'react'
import Dashboard from '../Dashboard/'
import Menu from '../Menu/'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Container() {
    return (
        <Router>

            <Switch>
                <Route path="/aboutUs" render={() => <div>about us</div>} />
                <Route path="/menu" component={Menu} />
                <Route path="/" component={Dashboard} />
            </Switch>
        </Router>
    )
}
