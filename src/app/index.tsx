import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedView style={styles.heroSection}>
            <AnimatedIcon />
            <ThemedText type="title" accessibilityRole="header" style={styles.title}>
              Product Explorer
            </ThemedText>
            <ThemedText themeColor="textSecondary" style={styles.introduction}>
              Discover something for your everyday.
            </ThemedText>
            <ThemedView style={styles.author}>
              <ThemedText type="small">Haifa Yousaf</ThemedText>
              <ThemedText type="small">Roll No: 23I-3072</ThemedText>
              <ThemedText type="small">Expo GitHub Activity</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.products}>
            <ThemedText accessibilityRole="header" style={styles.sectionHeading}>
              Featured product
            </ThemedText>
            <ThemedView type="backgroundElement" style={styles.productCard}>
              <ThemedText type="small" themeColor="textSecondary">
                ACCESSORIES · SAMPLE PRODUCT
              </ThemedText>
              <ThemedText style={styles.productName}>Everyday Backpack</ThemedText>
              <ThemedText themeColor="textSecondary">
                A lightweight backpack with roomy pockets for your daily essentials.
              </ThemedText>
              <ThemedText style={styles.price}>$49.99</ThemedText>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const product = ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.five,
  },
  heroSection: {
    alignItems: 'center',
    gap: Spacing.three,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
  },
  introduction: {
    textAlign: 'center',
  },
  author: {
    alignItems: 'center',
    gap: Spacing.one,
  },
  products: {
    gap: Spacing.three,
  },
  sectionHeading: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
  },
  productCard: {
    padding: Spacing.four,
    borderRadius: Spacing.three,
    gap: Spacing.two,
  },
  productName: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '600',
  },
  price: {
    marginTop: Spacing.two,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
  },
});
