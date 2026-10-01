# IT313 Laboratory 4 - Student Roster

## Problem

The goal of this activity is to create a simple Student Roster using React Native and Expo.

The application displays student information such as the student's name, course, units, and full-load status. It also displays the total number of students and allows the order of the students to be reversed.

## Component Structure

The application uses two main components:

### StudentCard

StudentCard is a reusable component that displays the information of one student.

It receives these values through props:

- Name
- Course
- Units
- Full-load status

It also uses conditional rendering to display "Full Load" only when the student's full-load status is true.

### StudentRoster

StudentRoster is the parent component that contains the student data.

It:

- Stores the list of students.
- Displays the total number of students using students.length.
- Uses .map() to create a StudentCard for each student.
- Uses the student's ID as the stable key.
- Provides a button to reverse the order of the students.

## How to Run the App

1. Open the project folder in VS Code.
2. Open the terminal.
3. Run:

```bash
npx expo start