import React, { Component } from 'react';
import EventData from './EventData';

interface EventPanelState {
    filter: any,
    events: EventData[]
}

class EventPanel extends Component<{}, EventPanelState> {
    render() {
        return (
            <div>
                <h1>Events</h1>
            </div>
        )
    }
}

export default EventPanel;