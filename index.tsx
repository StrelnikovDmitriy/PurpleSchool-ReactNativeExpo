import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Index() {
  return (
    <View>
      <View>
        <View>
          <Text>Одно из самых вкусных кофе в городе!</Text>
          <Text>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
        </View>
        <Pressable>
          <Text>Войти</Text>
        </Pressable>
      </View>
    </View>
  );
}
