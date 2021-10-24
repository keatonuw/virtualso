import React, { Component, CSSProperties } from 'react';
import EventData from './EventData';
import EventProps from './EventProps';

// class used to render an event tile
class Event extends Component<EventProps, {}> {
    
    render() {
        return (
            <div className="event" style={{backgroundImage: `url("${this.props.data.image}")`}}>
                <div className="overText">
                    <p>{this.props.data.name}</p>
                    <p>{this.props.data.desc}</p>
                </div>
            </div>
        )
    }
}

export default Event;