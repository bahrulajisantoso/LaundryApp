import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconAkun,
  IconAkunActive,
  IconHome,
  IconHomeActive,
  IconPesanan,
  IconPesananActive,
} from '../assets';
import {WARNA_ACTIVE, WARNA_DISABLE} from '../assets/utils/constant';

const TabItem = ({onPress, onLongPress, isFocused, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;

    if (label === 'Pesanan')
      return isFocused ? <IconPesananActive /> : <IconPesanan />;

    if (label === 'Akun') return isFocused ? <IconAkunActive /> : <IconAkun />;

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 12,
    color: isFocused ? WARNA_ACTIVE : WARNA_DISABLE,
    marginTop: 2,
  }),
});
