import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useQuery } from '@tanstack/react-query';

import { getPokemonNames } from '../api';

export const PokemonNameDropdown = ({value, onChange}:any) => {
  const {data: pokemonNames, isLoading} = useQuery(['pokemonNames'], async () => {
    const {names} = await getPokemonNames(10000, 0);
    return names.map((n,i) => ({
      label: n,
      value: n
    }))
  });

  return (
      isLoading 
      ? <Text>Loading</Text> 
      : <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={pokemonNames}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Choose pokemon"
        searchPlaceholder="Search..."
        value={value}
        onChange={onChange}
      />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});