import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    border: 1,
    padding: 20,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    width: '70%',
    display: 'flex',
    margin: '0 auto'
  },
  titleColumn: {
    textAlign: 'center',
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 24,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'light',
    justifySelf: 'flex-end',
  },
});

const Header = () => (
  <View style={styles.container}>
    <View style={styles.titleColumn}>
      <Text style={styles.name}>Ian Bruce</Text>
      <Text style={styles.subtitle}>Front End Developer</Text>
    </View>
  </View>
);

export default Header;