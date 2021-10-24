import React, { Component } from 'react';
import EventProps from './EventProps';

class EventPopout extends Component<EventProps, {}> {
    render() {
        return (
            <div className="event popout">
                <h1 className="Title">{this.props.data.name}</h1>
                <p>{this.props.data.date}</p>
                <p>{this.props.data.type} {this.props.data.diversity}</p>
                <img src={this.props.data.image}/>
                <p className="desc">{this.props.data.desc}</p>               
            </div>
        )
    }
}

export default EventPopout;