/**
 * Retrieves the sum of ids of a list of arr.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} arr - The list of arr.
* @returns {Number}
*/
export default function getStudentIdsSum(arr) {
  if (arr instanceof Array) {
    return arr.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
