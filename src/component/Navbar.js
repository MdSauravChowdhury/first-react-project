import React, { Component } from 'react'
import '../App.css';

class NavbarComponent extends Component{
    render(){
        return(

            <div className="navbar-section">
                <div className="container-nav">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Brand</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Entertenment</a></li>
                            <li><a href="#">Song Review</a></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>

        );
    }
}

export default NavbarComponent;