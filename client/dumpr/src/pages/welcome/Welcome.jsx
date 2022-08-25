import React from 'react'
import "./welcome.css"
import Button from 'react-bootstrap/Button';
import { Routes, Route, Link} from 'react-router-dom';

import Home from "../home/Home";

export default function Welcome() {
  return (
    <body className="d-flex">
        <div classname="b-button" style={{ width: "100%", marginTop: "2%", marginLeft: "3%" }}>
          <Link to="/home" variant="outline-dark">Start Shopping</Link>
        </div>

        <div className="c-button" style={{ width: "100%", marginTop: "2%", marginLeft: "70%" }}>
          <Button variant="outline-dark">Sign In</Button>
          <Button variant="outline-dark">Sign Up</Button>
        </div>


    
    </body>
  )
}
