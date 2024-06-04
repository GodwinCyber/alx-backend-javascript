/**
 * Extract students Ids from array of students obejct
 * @parameter{{
 *   id: number
 *   firstName: string
 *   loaction: string
 *   }}
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
