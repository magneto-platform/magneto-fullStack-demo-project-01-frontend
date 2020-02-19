import React, { Component } from 'react';
import { BrowserRouter,  Switch, Route, Link } from "react-router-dom";
import Home from '../containers/home/home.component';
import Products from '../containers/products/products.component';
import Login from "./login-form";
import SignUp from "./signup-form";
export class Header extends Component {
    render() {
        return (
            <div class="container">

                <BrowserRouter>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/product-list">Products</Link>
                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </nav>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product-list" component={Products} />

                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />

                    </Switch>
                </BrowserRouter>


            </div>
        )
    }
}

export default Header;
