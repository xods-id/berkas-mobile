import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header Retro Bento */}
        <View style={styles.header}>
          <Text style={styles.badge}>BERKAS MOBILE v1.0</Text>
          <Text style={styles.title}>Penyimpanan HP</Text>
          <Text style={styles.subtitle}>Material Retro Bento File Hub</Text>
        </View>

        {/* Bento Grid Info Card */}
        <View style={styles.bentoCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>📦</Text>
            <View>
              <Text style={styles.cardTitle}>Status Build APK</Text>
              <Text style={styles.cardSubtitle}>Compiled via GitHub Actions</Text>
            </View>
          </View>
          <Text style={styles.cardDesc}>
            Aplikasi ini berhasil di-build langsung dari Termux tanpa PC pake otomatisasi CI/CD cloud.
          </Text>
          <View style={styles.statusPill}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>Native Android Ready</Text>
          </View>
        </View>

        {/* Feature List Preview */}
        <View style={styles.gridRow}>
          <View style={[styles.miniCard, { backgroundColor: '#F4EAE2' }]}>
            <Text style={styles.miniIcon}>📁</Text>
            <Text style={styles.miniTitle}>Storage</Text>
            <Text style={styles.miniDesc}>All Files Access</Text>
          </View>
          <View style={[styles.miniCard, { backgroundColor: '#EFEBF5' }]}>
            <Text style={styles.miniIcon}>🧹</Text>
            <Text style={styles.miniTitle}>Deep Clean</Text>
            <Text style={styles.miniDesc}>Junk & Dupes</Text>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Jelajahi Berkas</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF6EE',
  },
  container: {
    padding: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 24,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F4EAE2',
    color: '#B85D38',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontWeight: '700',
    fontSize: 11,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#362923',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#7D6E66',
    marginTop: 2,
  },
  bentoCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#E7DEC8',
    marginBottom: 16,
    shadowColor: '#362923',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 28,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#362923',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#7D6E66',
  },
  cardDesc: {
    fontSize: 13,
    color: '#554740',
    lineHeight: 19,
    marginBottom: 14,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#EAF7ED',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 6,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#2E7D32',
  },
  statusText: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: '600',
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  miniCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E7DEC8',
  },
  miniIcon: {
    fontSize: 22,
    marginBottom: 8,
  },
  miniTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#362923',
    marginBottom: 2,
  },
  miniDesc: {
    fontSize: 12,
    color: '#7D6E66',
  },
  button: {
    backgroundColor: '#B85D38',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#B85D38',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFDF9',
    fontSize: 15,
    fontWeight: '700',
  },
});
