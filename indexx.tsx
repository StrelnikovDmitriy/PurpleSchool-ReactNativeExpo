import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
          <Text style={styles.description}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
        </View>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Войти</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  content: {
    gap: 50,
  },
  info: {
    gap: 8,
  },
  title: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 34,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#A9A9A9',
    textAlign: 'center',
  },
  btn: {
    padding: 21,
    borderRadius: 16,
    backgroundColor: '#C67C4E',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 600,
  },
});