import { Text, View, Image } from 'react-native';

import styles from './ListStyles';

export const ListElement = ({pokemonData}:any) => {
  return(
    <View style={styles.listElem}>
      <Name name={pokemonData.name} style={{flex:1}}/>
      <View style={{flex:1}}>
        <Weight weight={pokemonData.weight} style={{marginLeft: 5}}/>
        <Types style={{marginLeft: 5}}/>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <PokemonSprite uri={pokemonData.uri}/>
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

export const PokemonSprite = ({style, uri}:any) => {
  return <Image source={{uri, width: 64, height:64}}/>
}