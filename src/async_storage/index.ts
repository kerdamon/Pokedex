import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key:string, data:any) => {
  console.log('Storig data to async storage:');
  console.log(data);
  const value = JSON.stringify(data);
  await AsyncStorage.setItem(key, value);
};

export const loadData = async (key:string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  console.log('loading data from async storage:');
  console.log(jsonValue);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
