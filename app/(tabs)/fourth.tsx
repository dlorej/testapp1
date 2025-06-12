import { ScrollView, Text, StyleSheet, View} from 'react-native';
import {Link, Stack} from 'expo-router'

export default function HomeScreen() {
  return (
    <View style={styles.main_style}>
        <Text>Fourth</Text>
        <Link href="../(tabs_hidden)/third" style={{fontSize: 40}}>third link</Link>
    </View>);
}

const styles = StyleSheet.create({
  main_style:{
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 20,
  }
})