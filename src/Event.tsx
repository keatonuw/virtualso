import React, { Component } from 'react';
import EventData from './EventData';
import EventProps from './EventProps';

// class used to render an event tile
class Event extends Component<EventProps, {}> {
    render() {
        return (
            <div className="event">
                <h1>{this.props.data.name}</h1>
                <img src={this.props.data.image}/>
                <p>{this.props.data.desc}</p>
            </div>
        )
    }
}

export default Event;