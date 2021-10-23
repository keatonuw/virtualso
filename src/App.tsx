import React, { Component } from 'react';
import Airtable from 'airtable';
import EventData from './EventData';
import Event from './Event';
import { isThisTypeNode } from 'typescript';
const base = new Airtable({ apiKey: 'keynmrOvRll58ERY7'}).base('appRTSRlXjQ67gLwM');

interface AppState {
  events: EventData[];
}

class App extends Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    let events: EventData[] = [];
    base('Events').select({
      maxRecords: 3,
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

  render() {
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
        <h1>VIRTUALSO</h1>
        {events}
      </div>
    )
  }
}

export default App;
