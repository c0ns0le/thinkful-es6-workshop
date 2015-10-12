export default function defaultEx() {
  console.log("Default Syntax: ");
  
  /*
   * Write a function that takes 3 parameters:
   * greeting, firstName, and lastName
   *
   * Set the default values to 'hello', your first and last name,
   * if no input is provided
   */
   
   const greeting = (greeting ='hello', firstName = 'harry', lastName = 'hedger') =>{
       return `${greeting} ${firstName} ${lastName}`
   }
    console.log(greeting());
    console.log(greeting('yo', 'harry', 'hedger')); 
    console.log(greeting('yo', '', 'hedger')); 
    // console.log(greeting('yo', null, 'hedger')); 
}