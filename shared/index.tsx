import { StyleSheet, ImageBackground, Image, Text, View } from 'react-native';
import { Button } from '../shared/Button/Button';
import { Colors, Fonts, Radius } from '../shared/tokens';

const BG_START_PAGE = require('../assets/BG-startPage.png');

export function Index() {
    return (
        <ImageBackground source={BG_START_PAGE} resizeMode="cover" style={styles.bgStartPage}>
            <View style={[styles.container]}>
                <View style={[styles.content]}>
                    <View style={[styles.info]}>
                        <Text style={[styles.h1]}>Одно из самых вкусных кофе в городе!</Text>
                        <Text style={[styles.description]}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
                    </View>
                    <Button text="Начать"></Button>
                </View>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    logo: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 30,
        // backgroundColor: Colors.black,
    },
    bgStartPage: {
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: "flex-end",
    },
    info: {
        gap: 8,
        marginBottom: 24,
    },
    h1: {
        fontSize: Fonts.f34,
        fontWeight: 600,
        color: Colors.white,
        textAlign: 'center',
    },
    description: {
        fontSize: Fonts.f14,
        lineHeight: 21.56,
        color: Colors.descriptionText,
        textAlign: 'center',

    },
})
