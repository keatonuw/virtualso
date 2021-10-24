import React, { Component } from 'react';
import EventData from './EventData';
import Airtable from 'airtable';
import Event from './Event';

const base = new Airtable({ apiKey: 'keynmrOvRll58ERY7'}).base('appRTSRlXjQ67gLwM'); // im so sorry

interface EventPanelState {
    filter: any,
    events: EventData[]
}

class EventPanel extends Component<{}, EventPanelState> {

    constructor(props: any) {
        super(props);
        this.state = {
            filter: "str",
            events: []
        };
    }

    // update state to hold desired events
    componentDidMount() {
        this.getEvents();
    }

    // function to get events and set state
    getEvents = async () => {
        let events: EventData[] = [];
        base('Events').select({
        maxRecords: 6,
        view: "Grid view"
        }).eachPage((records, fetchNextPage) => {
        // this function is called for each page of records
        this.setState({events: this.recordsToEventData(records)});
        fetchNextPage(); // fetch the next one!
        }, function done(err) {
        if (err) { 
            console.log(err);
            return;
        }
        });
        console.log(events);
        this.setState({events: events});
    }

    // converts the API's resonse (messy JSON) to my nice objects
    recordsToEventData(records: any): EventData[] {
        let events: EventData[] = [];
        records.forEach(function(record: any) {
        console.log('Retrieved', record.get('Event Name'));
        events.push({
            name: record.get('Event Name'),
            type: record.get('Event Type'),
            desc: record.get('Description'),
            image: record.get('Image'),
            date: record.get('Date'),
            diversity: record.get('Diversity'),
        });
        });
        return events;
    }

    // render HTML
    render() {
        // create all of the Event entries
        let events: JSX.Element[] = [];
        console.log('made list');
        console.log(this.state.events.length)
        for (let i = 0; i < this.state.events.length; i++) {
        events.push(
            <Event data={this.state.events[i]} key={i}/>
        );
        }

        return (
        <div>
            <h1>Events</h1>
            <div>
                {events}
            </div>
        </div>
        )
    }
}

export default EventPanel;