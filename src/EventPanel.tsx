import React, { Component } from 'react';
import EventData from './EventData';
import Airtable from 'airtable';
import Event from './Event';

const base = new Airtable({ apiKey: 'keynmrOvRll58ERY7'}).base('appRTSRlXjQ67gLwM'); // im so sorry

interface SearchFilters {
    eventType: string
}

interface EventPanelState {
    filter: SearchFilters,
    events: EventData[]
}

class EventPanel extends Component<{}, EventPanelState> {

    constructor(props: any) {
        super(props);
        this.state = {
            filter: { eventType:""},
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
        view: "Grid view",
        filterByFormula: "({Event Name} = " + this.state.filter?.eventType + ")"
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

    updateEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let filt = this.state.filter;
        if (filt) filt.eventType = event.target.value;
        this.setState({
            filter: filt
        });
        this.getEvents();
    };

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
                <label htmlFor="locationSelect">Location</label>
                <select name="location" id="locationSelect">
                    <option value="Seattle">Seattle</option>
                </select>

                <label htmlFor="eventSelect">Event</label>
                <select name="event" id="eventSelect" onChange={this.updateEvent}>
                    <option value="">All</option>
                    <option value="History">History</option>
                    <option value="Venues">Venues</option>
                    <option value="Lessons">Lessons</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Concerts">Concerts</option>
                </select>

                <label htmlFor="specialSelect">Event</label>
                <select name="special" id="specialSelect">
                    <option value="">All</option>
                    <option value="Women in Music">Women in Music</option>
                    <option value="Pride">Pride</option>
                    <option value="BIPOC in Music">BIPOC in Music</option>
                </select>
                <input type="search"/>
                <button>Search</button>
            </div>
            <div>
                {events}
            </div>
        </div>
        )
    }
}

export default EventPanel;