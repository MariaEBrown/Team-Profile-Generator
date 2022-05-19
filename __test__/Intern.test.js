const Intern = require('../lib/Intern');
const intern = new Intern('carmen', '56789', 'carmeest@gmail.com', 'Auburn');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('carmen');
    expect(intern.id).toBe('56789');
    expect(intern.email).toBe('carmeest@gmail.com');
    expect(intern.school).toBe('Auburn');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('carmen');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('56789');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('carmeest@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Auburn');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});