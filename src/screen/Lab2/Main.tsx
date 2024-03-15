import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

const colors = ['white', 'gray', 'yellow', 'red', 'blue', 'orange'];

export type UserType = {
    name: string;
    avtar: string;
};

export default function Main() {
    const [user, setUser] = useState<UserType>({
        name: 'NO NAME',
        avtar: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-2.jpg'
    })
    const [lastTimeUpdate, setLastTimeUpdate] = useState(
        'Bạn chưa cập nhật thông tin',
    );

    const [footerColor, setFooterColor] = useState(colors[0]);

    const handleUpdateInfor = useCallback((_user: UserType) => {
        setUser(_user);
    }, []);

    const handleRandomColor = useCallback(() => {
        const numberRandom = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[numberRandom]);
    }, []);

    useEffect(() => {
        const currentdate = new Date();
        const datetime =
            currentdate.getDate() +
            '/n' +
            (currentdate.getMonth() + 1) +
            '/n' +
            currentdate.getFullYear() +
            ' ' +
            currentdate.getHours() +
            ':' +
            currentdate.getMinutes() +
            ':' +
            currentdate.getSeconds();
        setLastTimeUpdate(datetime);
    }, [user]);
    return (
        <View >
            <Text style={styles.textStyle}> REACT NAVTE HOOK

            </Text>
            <Header user={user} />

          <View style={styles.container}>
              <Body
                onUpdateInfor={handleUpdateInfor}
                onClickChangeBgFooter={handleRandomColor} />
          </View>

            <Footer timeUpdate={lastTimeUpdate} backgroudColor={footerColor} />
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'blue',

    },
    container: {
        alignItems:'center'

    }
})