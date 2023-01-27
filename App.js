/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [count, setCount] = useState(0);
  const Tab = createMaterialTopTabNavigator();

  function updateCount() {
    setCount(count + 1);
  }

  const Tab1Content = () => {
    return <Text>
      1111111 {"\n"}
      Tab 1 content, button count {count}
    </Text>
  }
  const Tab2Content = () => {
    return <Text>
      2222222222222 {"\n"}
      2222222222222 {"\n"}
      Tab 2 content, button count {count}
    </Text>
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        <View style={{
          flex: 1,
        }}>
          <Button
            title='Trigger Update'
            onPress={updateCount}
          />
          <Tab.Navigator >
            <Tab.Screen
              navigationKey={count.toString()}
              name="tab1"
              component={Tab1Content} />
            <Tab.Screen
              navigationKey={count.toString()}
              name="tab2"
              component={Tab2Content} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
