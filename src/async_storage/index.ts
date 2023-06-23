import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key:string, value:string) => {
  console.log(`Zapisuje do pamieci ${value}`);
  await AsyncStorage.setItem(key, value);
};

export const getData = async (key:string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
