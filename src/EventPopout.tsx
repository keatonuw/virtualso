import React, { Component } from 'react';
import EventProps from './EventProps';

class EventPopout extends Component<EventProps, {}> {
    render() {
        return (
            <div className="popout">
                <h1>{this.props.data.name}</h1>
                <img src={this.props.data.image}/>
                <p>{this.props.data.desc}</p>
                <p>{this.props.data.date}</p>
                <p>{this.props.data.type}</p>
            </div>
        )
    }
}

export default EventPopout;