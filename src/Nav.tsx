import React, { Component } from 'react';

class Nav extends Component<{}, {}> {
    render() {
        return (
            <nav>
                <h1 className="logo">
                    Virtualso
                </h1>
                <p className="slogan">
                    Explore music and become a professional
                </p>
            </nav>
        )
    }
}

export default Nav;