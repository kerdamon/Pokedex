import { Text, View } from 'react-native';

import styles from './ListStyles';

export const ListElement = ({itemKey}:any) => {
  return(
    <View style={styles.listElem}>
      <Name itemKey={itemKey}/>
    </View>
  )
}

export const Name = ({itemKey}:any) => {
return <Text style={styles.pokemonName}>{itemKey}</Text>;
}