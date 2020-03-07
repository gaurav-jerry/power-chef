import React from 'react'
import Dashboard from '../Dashboard/'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

export default function Container() {
    return (
        <Router>

        <Switch>
    <Route path="/aboutUs" render={()=><div>manish</div>}/>
          <Route path="/" component={Dashboard}/>
        </Switch>
        </Router>
    )
}
