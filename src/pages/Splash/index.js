import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo, SplashScreenBg} from '../../assets';
import {Image} from 'react-native-svg';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={SplashScreenBg} style={styles.background}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  },
});
