import { useState, createContext } from "react";
import { Text, View, Button } from "react-native";
import Paragraph from "./Paragraph";

export const ThemeContext = createContext('light');
export default function UserContentScreen() {
    const [theme, setTheme] = useState('light');
    const handleToggleThem = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <View>

            <ThemeContext.Provider value={theme}>
                <Text>userContentScreen</Text>
                <Button title='Change theme' onPress={handleToggleThem} />
                <Paragraph />
            </ThemeContext.Provider>

        </View>
    )
}