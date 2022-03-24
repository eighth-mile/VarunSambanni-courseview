import { StyleSheet, Text, View, Button, Icon } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeView from './pages/HomeView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProgramSelector from './pages/ProgramSelector'
import SubjectSyllabus from './pages/SubjectSyllabus';
import SubjectList from './pages/SubjectList';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{ ...stackOptions, title: "Courseview" }}
          />
          <Stack.Screen
            name="ProgramSelector"
            component={ProgramSelector}
            options={{ ...stackOptions, title: "Available programs" }}
          />
          <Stack.Screen
            name="SubjectList"
            component={SubjectList}
            options={{ ...stackOptions, title: "Subject List" }}
          />
          <Stack.Screen
            name="SubjectSyllabus"
            component={SubjectSyllabus}
            options={{ ...stackOptions, title: "Subject Syllabus" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const stackOptions = {
  headerStyle: {
    backgroundColor: '#3C6BA3'
  },
  headerTintColor: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
