import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export class Home extends Component {
    static navigationOptions = {
        // title: 'Home',
        header: null,
      };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text> textInComponent </Text>
                <Button
                    onPress={() => navigate('Detail', { name: 'Jane' })}
                >
                    <Text>
                        Go to Detail
                    </Text>
                </Button>
            </View>
        )
    }
}

export default Home
