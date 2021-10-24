import React, { Component } from 'react';

class About extends Component<{}, {}> {
    render() {
        return (
            <div>
                <h1 className="Titles">About Us</h1>
                <div className="aboutus">
                <p>
                    Virtualso is a platform to help individuals find and partake in music at any location 
                    or region they choose.  In addition to helping people find where they can listen to 
                    music, we also help people locate facilities that encourages the learning of instruments 
                    no matter how new you are to music. We want to emphasize and promote the stories hidden 
                    behind the music we listen to today. Featuring events from diverse backgrounds, we can 
                    help people understand the rich history that people have gone through in order for us 
                    to have music today.
                </p>

                <p>
                    We, the creators of Virtualso, are a group of students competing in the DubHacks 2021 
                    Hackathon. The inspiration for this platform came from the increase in usage of technology 
                    and how people consume entertainment and media throughout the pandemic. We hope by building 
                    Virtualso, people can be brought together by their shared passion for music and learn to 
                    appreciate how music came to be.
                </p>
                </div>
            </div>
        )
    }
}

export default About;