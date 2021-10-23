import React, { Component } from 'react';
import Airtable from 'airtable';
import { StringLiteralLike } from 'typescript';
const base = new Airtable({ apiKey: 'keynmrOvRll58ERY7'}).base('appRTSRlXjQ67gLwM');

interface AppState {
  text: string;
}

class App extends Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      text: "HI"
    };
  }

  componentDidMount() {
    base('Events').select({
      maxRecords: 3,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // this function is called for each page of records
      records.forEach(function(record) {
        console.log('Retrieved', record.get('Event Name'));
      });

      fetchNextPage(); // fetch the next one!
    }, function done(err) {
      if (err) { 
        console.log(err);
        return;
      }
    });
  }

  render() {
    let events: any[] = [];
    return (
      <div>
        {events}
      </div>
    )
  }
}

export default App;
