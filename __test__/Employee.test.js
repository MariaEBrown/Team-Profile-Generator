const Employee = require('../lib/Employee');
const employee = new Employee('mark', '265374', 'markasth@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('mark');
    expect(employee.id).toBe('265374');
    expect(employee.email).toBe('markasth@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('mark');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('265374');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('markasth@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});