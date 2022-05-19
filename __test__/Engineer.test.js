
   
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('jacob', '456345', 'jacoblmz@gmail.com', 'jaclmz');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('jacob');
    expect(engineer.id).toBe('456345');
    expect(engineer.email).toBe('jacoblmz@gmail.com');
    expect(engineer.githubUsername).toBe('jaclmz');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('jacob');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('456345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jacoblmz@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('jaclmz');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
