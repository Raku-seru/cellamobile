/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import PropTypes from 'prop-types';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// route file
import LogIn from './screens/Auth/LogIn';
import ForgotPassword from './screens/Auth/ForgotPassword';
import Main from './screens/Main';
import DashboardDetail from './screens/Main/DashboardDetail';

// ess
// -- vaccine
import VaccineList from './screens/ESS/Vaccine';
import VaccineForm from './screens/ESS/Vaccine/VaccineForm';
// -- payslip
import PayslipList from './screens/ESS/Payslip';
// -- shift
import ShiftList from './screens/ESS/Shift';
import ShiftForm from './screens/ESS/Shift/ShiftForm';
// -- att manual
import AttManualList from './screens/ESS/AttManual';
import AttManualForm from './screens/ESS/AttManual/AttManualForm';
// -- news
import NewsList from './screens/ESS/News';

// enableScreens();
const Stack = createStackNavigator();

const ScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  // headerStyle: {
  //   // backgroundColor:
  //   elevation: 2,
  // },
  // headerTintColor: '#000',
};

class RootNavigator extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  render() {
    const {isAuthenticated} = this.props;

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated ? (
            <>
              <Stack.Screen
                name="Main"
                component={Main}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="DashboardDetail"
                component={DashboardDetail}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              {/* ESS - VACCINE */}
              <Stack.Screen
                name="VaccineList"
                component={VaccineList}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="VaccineForm"
                component={VaccineForm}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              {/* ESS - PAYSLIP */}
              <Stack.Screen
                name="PayslipList"
                component={PayslipList}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              {/* ESS - SHIFT */}
              <Stack.Screen
                name="ShiftList"
                component={ShiftList}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="ShiftForm"
                component={ShiftForm}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              {/* ESS - ATT MANUAL */}
              <Stack.Screen
                name="AttManualList"
                component={AttManualList}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="AttManualForm"
                component={AttManualForm}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              {/* ESS - News */}
              <Stack.Screen
                name="NewsList"
                component={NewsList}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={() => ({
                  ...ScreenOptions,
                  headerShown: false,
                })}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootNavigator;
