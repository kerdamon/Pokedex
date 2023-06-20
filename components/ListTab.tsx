import { Button, StyleSheet, Text, View } from 'react-native';


export default function ListTab({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>This is list tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
