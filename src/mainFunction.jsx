import React from "react";
import {Route, Link, BrowserRouter as Router, Routes} from "react-router-dom";
import AboutFunc from "./aboutFunction";
import ContactFunc from "./contactFunction";
import HomeFunc from "./homeFunction";

export default function MainFunc(){
    return(

            <div>
                <ul>
                    <li>
                        <Link to = '/'>HomeFunction</Link>
                    </li>
                    <li>
                        <Link to = '/aboutFunc'>About Function</Link>
                    </li>
                    <li>
                        <Link to = '/contactFunc'>Contact Function</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path = '/' element = {<HomeFunc/>}></Route>
                    <Route path = '/aboutFunc' element = {<AboutFunc/>}></Route>
                    <Route path = '/contactFunc' element = {<ContactFunc/>}></Route>
                </Routes>
            </div>

    )
}