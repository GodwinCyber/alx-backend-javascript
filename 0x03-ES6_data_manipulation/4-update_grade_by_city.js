export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentInCity = students.filter((student) => student.location === city);

  const studentsWithGrades = studentInCity.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    const finalGrade = gradeObject ? gradeObject.grade : 'N/A';
    return { ...student, grade: finalGrade };
  });
  return studentsWithGrades;
}
