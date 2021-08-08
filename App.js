/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const PUBLISHABLE_KEY = "mVuC-oj44fP8YKRZsxohZXvI619UkvUTtaMtZ7IoauWFCpU23Q0Ga8q8e6qf-o6ZZphT4SDY9whKKX5GAPMuvw";
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [deviceId, setDeviceId] = useState("")
  const [trackingState, setTrackingState] = useState("Stopped")
  const [isTracking, setIsTracking]  = useState(false)

  const _initializeHyperTrack = async () => {
    // (Optional) This turns on logging for underlying native SDKs. Placed on top so SDKs start logging immediately
    HyperTrack.enableDebugLogging(true);

    // Initialize HyperTrack with a publishable key
    let hyperTrack = await HyperTrack.createInstance(PUBLISHABLE_KEY, true);

    // Obtain the unique HyperTrack's DeviceID identifier to use it with HyperTrack's APIs
    const deviceId = await hyperTrack.getDeviceID();
    setDeviceId(deviceId);

    // (Optional) Set the device name to display in dashboard (for ex. user name)
    hyperTrack.setDeviceName("RN Quickstart");

    // (Optional) Attach any JSON metadata to this device to see in HyperTrack's API responses
    hyperTrack.setMetadata({driver_id: "83B3X5", state: "IN_PROGRESS"});

    // (Optional) Register tracking listeners to update your UI when SDK starts/stops or react to errors
//     hyperTrack.registerTrackingListeners(
//         // Display or log errors
//         (error) => {
//             if (error.code === CriticalErrors.INVALID_PUBLISHABLE_KEY
//                 || error.code === CriticalErrors.AUTHORIZATION_FAILED) {
//                 console.log("Initialization failed")
//             } else {
//                 console.log("Tracking failed")
//             }
//             setTrackingState("Stopped with error: " + error.code + " - " + error.message),
//             setIsTracking(false),

//         },
//         // Update UI when tracking starts
//         setTrackingState("Started"),
//         // Update UI when tracking stops
//         setIsTracking(true);
};

// Call the initialization in useEffect
useEffect(()=> {
  _initializeHyperTrack()
}, [])


// (Optional) Unregister tracking listeners if they were registered in previous step
// UNSAFE_componentWillUnmount() {
//     this.hyperTrack.unregisterTrackingListeners(this);
// }
  return (
    <SafeAreaView style={backgroundStyle}>
      <Text> 
        asdf;lkjaf;lkjasdfasf
        </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
