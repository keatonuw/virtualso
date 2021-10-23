interface EventData {
    name: any; // "Event Name" - name of event/venue/store/etc
    type: any; // "Event Type" - like Venues, Concerts, History, etc.
    desc: any; // "Description" - brief description of the event
    image: any; // "Image" - URL to image for displaying
    date: any; // "Date" - Date of event, if applicable
    diversity: any; // "Diversity" - Tag for event diversity, like Women in Music
}

export default EventData;