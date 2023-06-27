import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key:string, value:string) => {
  await AsyncStorage.setItem(key, value);
};

export const loadData = async (key:string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
