import React, { Component } from 'react';
import Nav from '../nav';
import '../../styles/main.css';
import MainContent from './mainContent';
import Pokemon from '../pokemon/pokemon';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <main className="main">
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={MainContent} />
                        <Route path="/pokemon" exact component={Pokemon}/>
                    </Switch>
                </main>
            </Router>
        )
    }
}
