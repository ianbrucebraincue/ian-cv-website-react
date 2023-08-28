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

const Details = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Contact</Text>
        <Text style={styles.subtitle}>Address</Text>
        <Text style={styles.paragraph}>Toronto, Canada</Text>
        <Text style={styles.subtitle}>Phone</Text>
        <Text style={styles.paragraph}>+ 1 (905) 476 6979</Text>
        <Text style={styles.subtitle}>Email</Text>
        <Text style={styles.paragraph}>
            <Link href="mailto:brucegordonian@gmail.com" style={styles.link}>
            brucegordonian@gmail.com
            </Link>
        </Text>
    </View>
);

export default Details;