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
        paddingTop: 6
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
        <Text style={styles.title}>Links</Text>
        <Text style={styles.paragraph}>
            <Link href="https://www.linkedin.com/in/ian-bruce-306810110/" style={styles.link}>
                Linkedin
            </Link>
        </Text>
        <Text style={styles.paragraph}>
            <Link href="https://github.com/ianbrucebraincue" style={styles.link}>
                GitHub
            </Link>
        </Text>
        <Text style={styles.paragraph}>
            <Link href="https://ianbruce.site" style={styles.link}>
                ianbruce.site
            </Link>
        </Text>
    </View>
);

export default Links;