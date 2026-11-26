import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Index() {
  const exercises = [
    'ex01', 'ex02', 'ex03', 'ex04', 'ex05', 'ex06',
    'ex07', 'ex08', 'ex09', 'ex10', 'ex11', 'ex12',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {exercises.map((item) => (
        <Link key={item} href={`/${item}` as any} style={styles.link}>
          <Text style={styles.linkText}>{item.toUpperCase()}</Text>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    gap: 10,
  },
  link: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    width: 150,
    borderRadius: 8,
    textAlign: 'center',
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});