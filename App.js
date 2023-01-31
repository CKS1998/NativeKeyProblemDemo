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
import Tab1Content from './component/Tab1Content';
import Tab2Content from './component/Tab2Content';

const App = () => {

  const [count, setCount] = useState(0);
  const Tab = createMaterialTopTabNavigator();

  function updateCount() {
    setCount(count + 1);
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
              initialParams={{
                count: count,
              }}
              component={Tab1Content} />
            <Tab.Screen
              navigationKey={count.toString()}
              name="tab2"
              initialParams={{
                count: count,
              }}
              component={Tab2Content} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
