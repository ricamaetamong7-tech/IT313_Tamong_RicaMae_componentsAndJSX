import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Define the TypeScript interface for the props
interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

export default function StudentCard({ name, course, units, isFullLoad }: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>Course: {course}</Text>
      <Text style={styles.detail}>Units Enrolled: {units}</Text>
      
      {/* Conditional rendering using logical AND (&&) */}
      {isFullLoad && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Full Load</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  badge: {
    marginTop: 8,
    backgroundColor: '#e6f4ea',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: '#137333',
    fontSize: 12,
    fontWeight: 'bold',
  },
});