import { View, Text } from 'react-native'
import { StatusBar } from 'react-native';
import {useIsFocused} from '@react-navigation/native';

// Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.
const FocusedStatusBar = (props) => {
     // This hook returns `true` if the screen is focused, `false` otherwise
     const isFocused = useIsFocused();
  return (
    isFocused ? <StatusBar animated={true} {...props} /> : null
  )
}

export default FocusedStatusBar