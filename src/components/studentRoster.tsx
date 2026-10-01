import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import StudentCard from './studentCard';

interface Student {
  id: string;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

const initialStudents: Student[] = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header showing computed total number of students using JSX expression[cite: 1] */}
      <Text style={styles.header}>
        Student Roster ({students.length} students)
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Reverse Order" onPress={reverseRoster} />
        <View style={{ height: 10 }} />
        
      </View>


      {/* Render student list using .map() with key prop[cite: 1] */}
      {students.map((student) => (
        <StudentCard
          key={ student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#202124',
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  keyModeText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#5f6368',
    marginBottom: 16,
    fontStyle: 'italic',
  },
});