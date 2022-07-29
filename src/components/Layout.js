import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React from 'react';

const Layout = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({});
