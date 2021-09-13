import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Welcome to Home</Text>
      <Button
        title="go To page2"
        onPress={() => navigation.navigate('Page 02')}
      />
    </View>
  );
};

const Page2 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Welcome to Page2</Text>

      <Button
        title="Go to whatever 1st page"
        onPress={() => navigation.popToTop()}
      />

      <Button title="Previous Page" onPress={() => navigation.goBack()} />

      <Button title="Refresh" onPress={() => navigation.push('Page 02')} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

class main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Page 02" component={Page2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyText: {
    fontSize: 30,
  },
});

export default main;
