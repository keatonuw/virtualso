import React, { Component } from 'react';

class Nav extends Component<{}, {}> {
    render() {
        return (
            <nav>
                <h1 className="logo" id="idlogo">
                    Virtualso
                </h1>
                <p className="slogan">
                    Enjoy music from anywhere in the world
                </p>
                <div className="topnav" >
                <a href="#idevent">Events</a>
                <a href="#idaboutus">About Us</a>
                </div>
            </nav>
        )
    }
}

export default Nav;