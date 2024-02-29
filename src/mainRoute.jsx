import React, { Component } from "react";
import {Route, Link, BrowserRouter as Router, Routes} from "react-router-dom";
import About from "./about";
import Contacts from "./contacts";
import Home from "./home";
class MainRoute extends Component{

    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link>
                    </li>
                    <li>
                        <Link to = "/contacts">Contacts</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path = '/' element = {<Home/>}></Route>
                    <Route path = '/about' element = {<About/>}></Route>
                    <Route path = '/contacts' element = {<Contacts/>}></Route>
                </Routes>
            </div>
        )
    }
}
export default MainRoute;