import React, { Component } from "react";
import '../App.css';
import { Link } from 'react-router-dom';


export default class LandingPage extends Component {
    render = () => {
        return (
            <div class="headingStyle">
                <Link to="/2048">
                    <h1>
                        <span>W</span>
                        <span>e</span>
                        <span>l</span>
                        <span>c</span>
                        <span>o</span>
                        <span>m</span>
                        <span>e</span>
                        <br></br>
                        <span>t</span>
                        <span>o</span>
                        <br></br>
                        <span>2</span>
                        <span>0</span>
                        <span>4</span>
                        <span>8</span>
                        <span>!</span>
                    </h1>
                </Link>
            </div>

        );
    }
}