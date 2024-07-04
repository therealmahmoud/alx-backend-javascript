var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
function printTeacher(firstName, lastName) {
    return (firstName[0] + ". " + lastName);
}
console.log(printTeacher("John", "Doe"));
