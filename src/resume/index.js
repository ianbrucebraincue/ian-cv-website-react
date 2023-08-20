import React from 'react';
import {
  Text,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

import Header from './Header';

const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        '@media max-width: 400': {
            flexDirection: 'column',
        },
    },
    leftColumn: {
        flexDirection: 'column',
        width: 170,
        paddingTop: 30,
        paddingRight: 15,
        '@media max-width: 400': {
            width: '100%',
            paddingRight: 0,
        },
        '@media orientation: landscape': {
          width: 200,
        },
    },
    footer: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 15,
        paddingTop: 5,
        borderWidth: 3,
        borderColor: 'gray',
        borderStyle: 'dashed',
        '@media orientation: landscape': {
            marginTop: 10,
        },
    },
});

const Resume = props => (
    <Page {...props} style={styles.page}>
        <Header />
        <View style={styles.container}>
        <View style={styles.leftColumn}>
            {/* <Education />
            <Skills /> */}
        </View>
        {/* <Experience /> */}
        </View>
        <Text style={styles.footer}>This IS the candidate you are looking for</Text>
    </Page>
);

export default () => (
    <Document
      pageMode="fullScreen"
      author="Ian Bruce"
      keywords="web developer, react, vue, svelte, html, css, javascript"
      subject="Front End Developer"
      title="Ian_Bruce_CV"
    >
      <Resume size="A4"/>
    </Document>
  );