HTML5
CSS
JS
ReactJS

 

                                 (server)
Front- End---------API------------Back-End---------------Database
                (REDIS)
                (REDIS KEY)
                 (Cache)
                 (Flush Cache when data is updated)
HTML5               |              Java.                     SQL (Structured query lang)
CSS                 |              Nodejs.                   NoSQL( MongoDB)
JS                  |              python.                
ReactJS             |              C#.                       Postgresql(SQL)
TypeScript          |              PHP                       oracle(SQL)

-----------------------------------------------------------------------------------------
                                        |
                                        |   
                                        |
                                (GIT Version control)
                                        |   
                                        |
                          (Front-end, backend, database)
                                      Cloud
                                 (AWS,Azure...)
                                (Domain Mapping)



{}
[]

{
    name: abc
    age ; 1

}
{
    name: abc
    age ; 1
    
}
{
    name: abc
    age ; 1
    
}
{
    name: abc
    age ; 1
    
}
{
    name: abc
    age ; 1
    
}

select * from students

HTML 4
div


HTML 5
semantic elements
Header
Aside
Section
Banner
template
footer


SEO 
Search Engine OPtimization

1. Page :
Title
Description
Keywords
URL


2. Page Schema

3. BreadCrumbs

home > products > product a


attribute : display
attribute-value : flex

html list

1. ordered list
2. un-ordered list


CSS

1. Internal css
2. Inline css
3. External css


class .
id #
tag </>


Form

Table

Table Heading

Table Data(body)


Cookies

webstorage

1. local storage

2. session storage

Local
1. Local storage is a web storage feature that allows websites
to store data in the browser with no expiration time.
2. This means the data remains available even after the user closes
and reopens the browser or the system is restarted. 
3. It is typically used to save long-term data such as
user preferences, themes, or login tokens.

session
1. Session storage is also a browser-based storage method, 
but it only stores data for the duration of a single browser tab session. 
2. Once the tab is closed, all session storage data is automatically deleted. 
3. It is useful for storing temporary data like form inputs or 
navigation steps that don’t need to persist beyond the current session. 
4. Unlike local storage, session storage is not shared across 
tabs — each tab has its own session. 




Git Code Commit 

Push=upload
Pop=Delete
pull=download

1. Git Init
To initialize into project with repository

2. Git Add
To add files to the staging area

3. Git Commit
To commit files to the repository

4. Git Push
To push files to the remote repository

5. Git Pull
To pull files from the remote repository

6. Git Branch
To check current branch

7.Git remote -v
To check remote repository

8. Git status
To check status of the repository

9.Git stash
To stash changes

10. Git stash pop
To pop stash changes

Bootstrap (RWD)

Responsive web designs

Javascrpit Variables
1. let (local scoped)
2. var (global scoped)
3. const (constant)

Local Scoped (let):
a variable cannot be accessed outside a function without defining.

Global Scope (var):
a variable can be accessed outside a function without defining.

print statement in Document Page:
docoment.write(variable);

Debugging:
console.log(variable)


data types in js
1.primitive
2.non-primitive

1. Primitive Data Types
a. String: Textual data.
b. Number: Integers, floating-point numbers.
c. Boolean: Logical values (true or false).
d. Undefined: Variable declared but not assigned a value
e. Null: Intentional absence of value.
f. Symbol: Unique identifiers (ES6). (ES6= ECMAScrpit 2015 (ES6))


2.  Non-Primitive Data Types
a. Object: Key-value pairs. {}
b. Array: Indexed collections. []
c .Function: Reusable blocks of code. ()


variables

let = local scoped
var = global scoped
const = constant

hoisting
a variable can be used before declaraion, it called as hositing, to avoid hositing use use the strict mode(use strict) in script. 


1.[] 
Array
2.{}
Object
3.()
Function
4.[{}]
Array of Object


increment 
1. pre increment
2. post increment

array length = 1,2,3,4,5
index = array length -1 (n-1) = 4


Operators =

1. Arithmetic Operators= Used for mathematical calculations.

Operator | Description      | Example            | Result
a. +         Addition          5 + 3       =          8
b. -       Subtraction         5 - 3       =          2
c. *      Multiplication       5 * 3       =          15
d. /        Division           5 / 2       =          2.5
e. %    Modulus (remainder)    5 % 2       =          1
f. **    Exponentiation        5 ** 2      =          25
g. ++       Increment         let x =5;     x++  =     6
h. --      Decrement          let x =5;     x--  =     4


2. Assignment Operators= Used to assign values to variables.

Operator | Description         | Example        | Equivalent To
a. =        Assignment            x = 10
b. +=      Add and Assign.        x += 5              x = x + 5
c. -=    Subtract and Assign      x -= 5              x = x - 5
d. *=    Multiply and Assign      x *= 5              x = x * 5
e. /=    Divide and Assign.       x /= 5              x = x / 5
f. %=    Modulus and Assign       x %= 5              x = x % 5
g. **=   Exponentiation Assign.   x **= 2             x = x ** 2

3. Comparison Operators = Used to compare two values.

Operator | Description      | Example           | Result

a. (==).    Equal to           5== "5"                TRUE
b. (===).   Strict equal       5===5                 True
c.  ===       (type+value)       5 === "5"           FALSE
d. !=       Not equal.           5 != "5"            FALSE
e. !==    Strict not equal       5 !== "5".          TRUE
f. >      Greater than           5 > 3               TRUE
g.<       Less than              5 < 3               FALSE
h. >=   Greater than or equal    5 >= 5              TRUE
i. <=    Less than or equal      5 <= 3              FALSE


4. Logical Operators = Used for logical operations.
Operator | Description | Example
a.  &&     Logical AND. true && false → false
b. | |      Logical OR.    a || b
c. !       Logical NOT.   !true → false


5. String Operators=Used to manipulate strings.

Operator   |   Description             | Example                         | Result
a. +         String Concatenation         "Hello" + "World"                "Hello World"
b. +=       Concatenation assign       let x = "Hi "; x += "Adil";         "Hi Adil"


String = ""

Boolean = true/false (1/0)

Number = 123

1.push
array.push() -> stores/added data into array

2.pop
array.pop() -> deletes record from array.

3.slice
array.slice() -> creates a new array after working on the array.


var array = [10,9,2,5,2,5,]
array.slice(1)
sliced array = [10,2,5,2,5,]

Conditional Statements:
if
else if
else

The <span> tag in HTML is an inline container used to style, highlight, or manipulate a specific portion of text or content without breaking the flow of the line. It’s commonly used with CSS or JavaScript to apply styles or add interactivity to small parts of a webpage.



1. Understanding Cookies :

Cookies are small pieces of data stored in the browser. They help websites remember information about users, like login status, preferences, or shopping cart items.

Stored as name=value pairs.
Useful for tracking small data across sessions.


2. how we write a cookie :
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

3. how we read a cookie :
console.log(document.cookie);
// Output: "username=JohnDoe;"


4. Deleting Cookies :
To delete a cookie, set its expiration date to the past:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

5. Counting with Cookies :
It Say you want to count how many times the user visited the page.

count = "1...n"
string concat + count +
template literals `${count}`



CallBack fns :

1. map()
The map() method is used to loop through an array and create a new array with the result of applying a function to each element.

2. setTimeout()
The setTimeout() method runs a function once after a specified delay (in milliseconds).

3. setInterval()
The setInterval() method runs a function repeatedly, at a fixed time interval (in milliseconds), until stopped.

eg :

let nums = [1, 2, 3];
let doubled = nums.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

(num => num * 2)

num = 1 * 2 (0)
num = 2 *2 (1)
num = 3 * 2 (2)

1. create a function to double the give array [1,2,3]

2. Use map() to convert all strings in an array to uppercase? toUp

3. Use map() to get only the names from this array of objects:

4.  Add a prefix to every item in an array using map()?

fruit : apple, fruit:  banana, fruit:, grapes


2. 
// function sayHello() {
//   alert("Hello ")
// }

// setTimeout(sayHello, 4000); 



3. 
// function sayHelloInterval() {
//   alert("Hello ");
// }

// setInterval(sayHelloInterval, 3000);


Async/Await
javascript async and await;
1.to create responsive applications in javascript
2.to execute concurrent process
3.no block state or no need to wait till function ends.
4.async and await are used in JavaScript to work with asynchronous operations more easily.
5.They allow code to wait for long tasks (like fetching data) without stopping the entire program.


async -> Marks a function that may run tasks which take time(but returns promise(1/0)).
await -> Pauses the function until the function(promise) finishes, but does not block other code.
Used for -> API calls, database operations, file reading, timers, etc.
Benefit -> Code becomes easier to read and understand (looks like normal step-by-step code).

https://jsonplaceholder.typicode.com/

https://jsonplaceholder.typicode.com/posts/1

Real-Life Example 

Example: Ordering Food in a Restaurant

1.You order biryani (this takes time to prepare).

2. But you don’t stand in the kitchen waiting (that would block everything).

3. Instead, you sit and talk with friends (other work continues).

4. When the biryani is ready, the waiter delivers it (result comes later).

This is async behavior:

1.Order placed = Request sent

2. Waiter prepares silently = Awaiting result

3. You keep doing other things = Non-blocking

4. Food delivered = function(promise) resolved


response.json() → Converts the API data into a JavaScript object.
await → Waits until the conversion is done.


return new Promise((resolve =>{})(rejected=>{}));


javascript promise


1.it is a special javascript object
2.it will return either resolved or rejected status
3.it always returns response, it wont break during transaction/process
4.reject and resolve both are callback functions it will execute either anyone
5.we access promise by method :
then()
catch()

React Notes

React Js
1. it is a javascript libarary
2.React js is used to create ui components
3.virtual DOM support
4.its very fast and performance
5.single page application(SPA) development
6.component based architectire
7.server side rendering


setup

1. navigate to project folder/directory
cmd : cd foldername

2.how to create react setup
cmd: npm install create-react-app

3.how to create react project
cmd: npx create-react-app reactproject
note: project name should be in small letters

4. run/execute react project
cmd: npm start


Component Syntax

1. Create a js file,
2. create a funciton 
3. Return the function
4. export the function
5. import the function in app.js/index.js
6. render(call) the function in app.js/index.js

function Demo() {
  return (
    <div>
      <h1>This is Demo Function from demo.js file</h1>
    </div>
  );
}
export default Demo();

1. function/component 
2. component defination
3. component calling(exporting) [to reuse this same component we must import the exported component to the file we are expecting to use it]


Bootstrap setup 
1.
npm install bootstrap@4.6.0

2. to check installation status
npm list bootstrap


3.import css files
import "bootstrap/dist/css/bootstrap.min.css";

4.import js files
import "bootstrap/dist/js/bootstrap.bundle.min.js";

5.uninstall
npm uninstall bootstrap



 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">


import "bootstrap/dist/css/bootstrap.min.css"




React routing

To Implement single page application
To navigate one page to another page using routing

React Routing Component
1. BrowserRouter -> to handel browser navigation action 
2. Routes -> Routes Will have route Configuration
3. Route -> Route Path to be rendered Component based on ink url text
4. Link -> to link to the path 

To setup react routing need to install routing package 

npm install react-router-dom






































































