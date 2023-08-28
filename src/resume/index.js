import React from 'react';
import {
  Text,
  Page,
  View,
  Document,
  StyleSheet,
  Link
} from '@react-pdf/renderer';

import Header from './Header';
import Details from './Details';
import Links from './Links';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    leftColumn: {
        flexDirection: 'column',
        width: "30%",
        paddingTop: 30,
    },
    rightColumn: {
        flexDirection: 'column',
        width: "70%",
    },
    footer: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 15,
        paddingTop: 5,
        borderWidth: 2,
        borderColor: 'gray',
        borderStyle: 'dashed',
    },
    link: {
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
        fontStyle: 'italic',
        fontSize: 10,
    }
});

const Resume = props => (
    <Page {...props} style={styles.page}>
        <Header />
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                <Details />
                <Links />
                <Skills />
            </View>
            <View style={styles.rightColumn}>
                <Experience />
                <Education />
            </View>
        </View>
        <Text style={styles.footer}>This PDF is coded using <Link href="https://react-pdf.org/" style={styles.link}>react-pdf</Link>, a React renderer for creating PDF files in the browser.
        </Text>
    </Page>
);

const Index = () => (
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

  export default Index;