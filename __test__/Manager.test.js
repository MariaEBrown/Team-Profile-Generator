const Manager = require('../lib/Manager.');
const manager = new Manager('Maria', '079876', 'mariaeb@gmail.com', '909');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Maria');
    expect(manager.id).toBe('079876');
    expect(manager.email).toBe('mariaeb@gmail.com');
    expect(manager.officeNumber).toBe('909');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Maria');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('079876');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('mariaeb@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('909');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});