import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
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

const Experience = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Work Experience</Text>
        <View style={styles.entryContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.leftColumn}>
                    <Text style={styles.jobTitle}>Front End Developer, Auxly Cannabis Group Inc.</Text>
                    <Text style={styles.date}>Jun. 2018 — Feb. 2023</Text>
                </View>
                <View style={styles.rightColumn}>
                <Text style={styles.location}>Toronto</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                    Designed and developed in-house brand websites using Vue.js and Nuxt.js to leverage server-side rendering technology, improve SEO and reduce load times.
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                    Integrated Google Maps APIs and JSON datasets creating an interactive retailer list, showcasing product stock information to drive conversions. This map emphasized preferred partnerships with selected retailers, resulting in boosted sales.
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                    Used CI/CD tools, specifically AWS CodeDeploy, streamlining testing, deployment, robust logging, monitoring, and communication with DevOps.
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                    Led website migration to HubSpot with advanced reporting tools for social media, marketing, and innovation teams, enhancing cross-team communication and decision-making.
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                    Used i18n dynamic JSON storage expanding brand credibility to the French Canadian market with French/English language support.
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                    Protected customer data, aligning with the guidelines set by the Canadian Government and the Cannabis Act, through the connection of internal AWS databases, Shopify themes, and Ample medical CMS.
                </Text>
            </View>
        </View>
        <View style={styles.entryContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.leftColumn}>
                    <Text style={styles.jobTitle}>Web Developer, IDLMR / Ohme</Text>
                    <Text style={styles.date}>Nov. 2016 — Jun. 2018</Text>
                </View>
                <View style={styles.rightColumn}>
                <Text style={styles.location}>Toronto</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                Rapidly acquired new technologies and tech stacks at client's request to ensure smooth account management and consistent cash flow.
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                Used third-party APIs, like DocuSign, for e-signature integration with condo purchase documents, updating condo buyers and their assigned real estate agent in realtime via email with purchasing process updates.
                </Text>
            </View>
        </View>
    </View>
);

export default Experience;