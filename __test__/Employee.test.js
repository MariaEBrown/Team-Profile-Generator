//import in what you want to test
const Employee = require('../lib/Employee');

//diff ways to wrap this together-check out Jest documentation on web
// call back function
test('When I call the Employee class, it will create an instance object', () => {
    // inside  the call back funtion  is the test I want to run
    // AAA line can be blur together
    //Arrange put together pieces that your need
    //Act the actual test method itself
    const instanceObject = new Employee();
    //Assert I expect some value to be something else
    expect(typeof instanceObject).toBe('object');
});


//when I call the getName () {} I should see my name

test('When I call the getName method, I should see the employees name', () => {
    //AAA
    //Arrange
    const name = 'Charlie';
    const newObj = new Employee(name);
    //Act
    const newName = newObj.getName();
    //Assert
    expect(newName).toBe(name);
    //next go to employee.js file in getName () {} method add return this.name; and run the test again
    


});


