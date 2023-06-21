import { Text, View, Image } from 'react-native';

import styles from './ListStyles';

export const ListElement = ({pokemonData}:any) => {
  return(
    <View style={styles.listElem}>
      <Name name={pokemonData.name}/>
      <View>
        <Weight weight={pokemonData.weight} style={{marginLeft: 5}}/>
        <Types style={{marginLeft: 5}}/>
      </View>
      <View style={{borderWidth:1 , flex:1, alignItems: 'flex-end'}}>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png', width: 64, height:64}}/>
      </View>
    </View>
  )
}

export const Name = ({style, name}:any) => {
  return <Text style={[style, styles.text, styles.bigText]}>{name}</Text>;
}

export const Weight = ({style, weight}:any) => {
  return <Text style={[style, styles.text]}>Weight: {weight}</Text>;
}

export const Types = ({style, type}:any) => {
  return <Text style={[style, styles.text]}>Types: {}</Text>;
}