/**
 * Retrieves students in a given location.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {String} city - The location.
* @returns
*/
export default function getStudentsByLocation (arr, city) {
  if (arr instanceof Array) {
    return arr.filter(arr => arr.location === city);
  }
  return [];
}
