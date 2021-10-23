import React, { Component } from 'react';
import Airtable from 'airtable';
import { StringLiteralLike } from 'typescript';
import EventData from './EventData';
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
    let eventList: EventData[] = [];
    base('Events').select({
      maxRecords: 3,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // this function is called for each page of records
      records.forEach(function(record) {
        console.log('Retrieved', record.get('Event Name'));
        eventList.push({
          name: record.get('Event Name'),
          type: record.get('Event Name'),
          desc: record.get('Event Name'),
          image: record.get('Event Name'),
          date: record.get('Event Name'),
          diversity: record.get('Event Name'),
        });
      });

      fetchNextPage(); // fetch the next one!
    }, function done(err) {
      if (err) { 
        console.log(err);
        return;
      }
    });
    this.setState({
      events: eventList
    });
  }

  render() {
    return (
      <div>
        {this.state.events}
      </div>
    )
  }
}

export default App;
