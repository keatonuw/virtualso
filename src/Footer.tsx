import React, { Component } from 'react';

class Footer extends Component<{}, {}> {
    render() {
        return (
            <div className="footer">
                <img className="socialpics"src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="telephone" />
                <p className="Contacts">Telephone: 206-436-7890</p>
                <img  className="socialpics"src="https://cdn.iconscout.com/icon/premium/png-256-thumb/email-2030737-1713377.png" alt="email" />
                <p className="Contacts">Email: virtualso@uw.edu</p>
                <img className="socialpics" src="https://i.ibb.co/RhnxGqr/FB.png" alt="Facebook" />
                <img className="socialpics" src="https://i.ibb.co/pW7TmTN/5772032-1.png" alt="Instagram" />
                <img className="socialpics" src="https://i.ibb.co/K5Wfkqy/logos-linkedin-icon.png" alt="Instagram" />
                <img className="socialpics" src="https://i.ibb.co/RYzPVhr/logos-twitter.png" alt="Twitter" />
            </div>
        )
    }
}

export default Footer;