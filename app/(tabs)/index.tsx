import { ScrollView, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.main_style}>
      <Text>Testing Top</Text>
      <Text>Testing Bottom</Text>
    </ScrollView>);
}

const styles = StyleSheet.create({
  main_style:{
    backgroundColor: 'white',
    // flex: 1,
    // justifyContent: 'space-between', 
    // alignItems: 'center',
  }
})