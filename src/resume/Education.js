import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 12,
        borderBottom: "1px solid #000000",
        paddingBottom: 6,
        letterSpacing: 2
    },
    entryContainer: {
        marginBottom: 10,
    },
    location: {
        fontSize: 12,
        paddingTop: 6,
    },
    detailContainer: {
        flexDirection: 'row',
    },
    detailLeftColumn: {
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
    },
    detailRightColumn: {
        flexDirection: 'column',
        flexGrow: 9,
    },
    details: {
        fontSize: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: 'column',
        flexGrow: 9,
    },
    rightColumn: {
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-end',
        justifySelf: 'flex-end',
    },
    jobTitle: {
        fontSize: 12,
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        paddingTop: 6,
    },
    date: {
        fontSize: 11,
        color: 'black',
        paddingTop: 3,
    },
    item: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    bulletPoint: {
        width: 10,
        fontSize: 12,
    },
    itemContent: {
        flex: 1,
        fontSize: 12,
    },
});

const Education = () => (
<View style={styles.container}>
    <Text style={styles.title}>Education</Text>
    <View style={styles.entryContainer}>
        <View style={styles.headerContainer}>
            <View style={styles.leftColumn}>
                <Text style={styles.jobTitle}>Humber College, Bachelor of Journalism</Text>
                <Text style={styles.date}>Sept. 2010 — Apr. 2014</Text>
            </View>
            <View style={styles.rightColumn}>
            <Text style={styles.location}>Toronto</Text>
            </View>
        </View>
    </View>
</View>
);

export default Education;