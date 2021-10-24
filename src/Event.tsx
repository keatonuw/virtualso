import React, { Component, CSSProperties } from 'react';
import EventData from './EventData';
import EventProps from './EventProps';

interface EventItemProp extends EventProps {
    focus(data: EventData): void;
}

// class used to render an event tile
class Event extends Component<EventItemProp, {}> {

    handleClick = (event: any) => {
        this.props.focus(this.props.data);
    }
    
    render() {
        return (
            <div className="event" style={{backgroundImage: `url("${this.props.data.image}")`}}>
                <div className="overText" onClick={this.handleClick}>
                    <p>{this.props.data.name}</p>
                    <p>{this.props.data.date}</p>
                </div>
            </div>
        )
    }
}

export default Event;