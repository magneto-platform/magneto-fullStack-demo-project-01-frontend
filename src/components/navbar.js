import React, { Component } from 'react';

// import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import Drawer from '@material-ui/core/Drawer'
// import MenuItem from '@material-ui/core/MenuItem'



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'

//import RaisedButton from '@material-ui/core/RaisedButton'

import { BrowserRouter,  Switch, Route, Link } from "react-router-dom";
import Home from '../containers/home/home.component';
import Products from '../containers/products/products.component';
import Login from "./login-form";
import SignUp from "./signup-form";
export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
          open: false
        }
      }
    
      toggleDrawer = () => this.setState({ open: !this.state.open })
    render() {
        return (
            <div className="container">
{/* 
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
                </BrowserRouter> */}


{/* <BrowserRouter>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Features</Nav.Link>
      <Nav.Link href="/product-list">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/sign-in">Sign-in</Nav.Link>
      <Nav.Link href="/sing-up">Sing-up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/product-list" component={Products} />

<Route path="/sign-in" component={Login} />
<Route path="/sign-up" component={SignUp} />

</Switch>
</BrowserRouter> */}

<BrowserRouter>
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Home
               </TypoGraphy>
                </ListItemText>


                <ListItem button component={Link} to="/product-list">
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Products
                </TypoGraphy>
                    </ListItemText>
                </ListItem>




                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Contact
               </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
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
