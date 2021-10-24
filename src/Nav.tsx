import React, { Component } from 'react';

class Nav extends Component<{}, {}> {
    render() {
        return (
            <nav>
                <h1 className="logo" id="idlogo">
                    Virtualso
                </h1>
                <p className="slogan">
                    Explore music and become a professional
                </p>
                <div className="topnav" >
                <a className="active" href="#idlogo">Home </a>
                <a href="#idevent">Events</a>
                <a href="#idaboutus">About Us</a>
                </div>
            </nav>
        )
    }
}

export default Nav;