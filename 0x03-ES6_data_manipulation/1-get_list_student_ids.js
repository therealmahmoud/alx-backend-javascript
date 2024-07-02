/**
 * Retrieves ids from a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @returns
*/
export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((arr) => arr.id);
  }
  return [];
}
