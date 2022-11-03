const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map((users) => "Hello " + users.firstName);
console.log("welcomeStudents:", welcomeStudents);
const fullStackStudents = users.filter((users) => users.role === "Full Stack Resident");
console.log("fullStackStudents", fullStackStudents);
const lastNameOfFullStackResidents = users
    .filter((users) => users.role === "Full Stack Resident")
    .map((users) => users.lastName);
    console.log("lastNameOfFullStackResidents:", lastNameOfFullStackResidents);