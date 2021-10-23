import React, { Component } from 'react';
import EventData from './EventData';

interface EventProps {
    data: EventData;
}

class Event extends Component<EventProps, {}> {
    render() {
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <p>{this.props.data.desc} <span>{this.props.data.date}</span></p>
            </div>
        )
    }
}

export default Event;