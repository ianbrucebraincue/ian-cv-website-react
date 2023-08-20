import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
  },
  link: {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

const Header = () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Ian Bruce</Text>
      <Text style={styles.subtitle}>Front End Developer</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href="mailto:brucegordonian@gmail.com" style={styles.link}>
        brucegordonian@gmail.com
      </Link>
    </View>
  </View>
);

export default Header;