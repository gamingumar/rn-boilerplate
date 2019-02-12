import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { fetchEvents } from '../Services/EventService';

export default class Events extends Component {
    state = {
        events: []
    }
    
    async componentDidMount() {
        const events = await fetchEvents();

        console.log('got data: ', events);

        this.setState({events: events.data});

    }

    render() {
        return (
            <View style={{flex: 1, margin: 20}}>
                <Text style={{marginVertical: 30}}>Events from iPartyy API</Text>
                <ScrollView>
                    {
                        this.state.events.map(event => 
                            <View key={event.id} style={{padding: 5}}>
                                <Text>{event.title}</Text>

                            </View>
                        )
                    }
                </ScrollView>
            </View>
        )
    }
}
