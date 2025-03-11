import { View, Text } from 'react-native'
import React from 'react'
import Routes from "./src/Routes/Routes";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  axios.defaults.baseURL = 'http://192.168.29.225:8000'
  axios.defaults.headers.common['Accept'] = 'application/json';
  const getToken = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  };
  
  axios.interceptors.request.use(
    async function (config) {
      try {
        const token = await getToken('token'); 
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Error in request interceptor:', error);
      }
      return config;
    },
    function (error) {
      // Handle request error
      return Promise.reject(error);
    }
  );
  
  
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  return (
    <Routes/>
  )
}

export default App