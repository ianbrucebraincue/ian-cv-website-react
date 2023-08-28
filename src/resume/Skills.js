import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
       paddingBottom: 12
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 12,
        borderBottom: "1px solid #000000",
        paddingBottom: 6,
        letterSpacing: 2
    },
    subtitle: {
        textTransform: 'uppercase',
        fontSize: 10,
        paddingBottom: 5,
        paddingTop: 6,
        fontWeight: "bold"
    },
    paragraph: {
        fontSize: 12,
        paddingBottom: 6
    },
    link: {
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    }
});

const Links = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Skills</Text>
        <Text style={styles.subtitle}>Hard Skills</Text>
        <Text style={styles.paragraph}>Debugging</Text>
        <Text style={styles.paragraph}>CSS Preprocessing</Text>
        <Text style={styles.paragraph}>Command Line</Text>
        <Text style={styles.paragraph}>Cross-Browser Development</Text>
        <Text style={styles.subtitle}>Techniques</Text>
        <Text style={styles.paragraph}>Web Development</Text>
        <Text style={styles.paragraph}>Agile Methodologies</Text>
        <Text style={styles.paragraph}>Responsive Web Design</Text>
        <Text style={styles.subtitle}>Technical Skills</Text>
        <Text style={styles.paragraph}>HTML / CSS / JavaScript</Text>
        <Text style={styles.paragraph}>Vue.js</Text>
        <Text style={styles.paragraph}>React</Text>
        <Text style={styles.paragraph}>WordPress</Text>
        <Text style={styles.paragraph}>GIT & GitHub</Text>
    </View>
);

export default Links;