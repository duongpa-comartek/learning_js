/**
 * Arrow function
 * - Tạo một function bằng cách ngắn gọn hơn
 * - Một số ví dụ:
 */

function addNumber(a,b){
    return a+b;
}
// Có thể được viết như sau:
// Hàm arrow nếu chỉ có một lệnh thì có thể viết lệnh ngay sau => mà không cần {}
// nếu sau => là một biểu thức như a+b  hay một biến thì sẽ được hiểu đó là giá trị được trả về mà không cần có từ khóa return
const add = (a,b) => a+b;

// Hàm mũi tên với không hoặc nhiều hơn 1 đối số phải có dấu ():
let greet = () => console.log('Hello!');
greet = (name, friend) => console.log(`Hi ${friend}. My name is ${name}.`);
// Hàm mũi tên với một đối số thì không cần dấu ():
greet = name => console.log(`Hello. My name is ${name}`);

//this với arrow function
function Person(){
    this.name = 'person',
    this.age = 25,
    this.sayHi = function(){
        console.log(this.age);
        // function inner(){
        //     console.log(this.age); // ở đây this không trỏ đến person khi vì inner là một function thông thường nên this trỏ toàn cục
        // }
        let inner = () => console.log(this.age); // this trỏ đến đối tượng cha là person
        inner();
    }
}
const person = new Person();
person.sayHi();

/**
 * Enhanced object literals
 * Khả năng tạo các đối tượng JavaScript bằng cách sử dụng ký hiệu chữ rất mạnh mẽ. 
 * ES6 giúp xử lý đối tượng dễ dàng hơn trong tất cả các trình duyệt hiện đại (không phải IE) và Node.js.
 */

// Khai báo đối tượng từ biến:
// Vs ES5:
// var a = 1, b = 2, c = 3;
// var object = { a:a, b:b, c:c }
// Với ES6:
const a = 1, b = 2, c = 3;
const obj = { a, b, c }
// Khai báo nhanh hơn với function
// ES5 code: var lib = {
//     sum:  function(a, b) { return a + b; },
//     mult: function(a, b) { return a * b; }
//   };
// ES6
const lib = {
    sum(a,b) {
        return a + b;
    },
    mult(a,b) { 
        return a * b;
    } 
}

//Khóa thuộc tính động
// ES6 cho phép gán thuộc tính động bằng một biểu thức trong []
const key1 = 'one';
const obj1 = {
    [key1] : 1, 
    two : 2
}
//obj1.one = 1

/**
 * Template string
 * Cho phép sử dụng một chuỗi hoặc biểu thức nhúng dưới dạng chuỗi
 * Chuỗi sẽ được bao bọc trong dấu ``
 */

//Dùng trích dẫn tiện hơn
// const str1 = 'A \'string\''
// Có thể được viết:
const str1 = `A 'string'`;

// Chuỗi đa dòng
// const message1 = 'This a long time\n' + 'in code';
// có thể viết:
const message1 = `This a long time
in code`;

// Biểu thức nội suy 
// dùng ${} để thay thế giá trị của biến hay biểu thức, hàm vào chuỗi.
const num1 = 10;
const num2 = 9;
console.log(`${num1} + ${num2} = ${add(num1, num2)}`); // Hàm add ở trên arrow function

/**
 * Destructuring
 * Cho phép  một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array. 
 * Điều này có thể làm giảm đáng kể các dòng mã cần thiết để thao tác dữ liệu trong các cấu trúc này. 
 */

//Ví dụ với array:
const arrValue = ['one', 'two', 'three'];
const [x, y, z] = arrValue; 
// Sau dòng lệnh trên x, y, z sẽ được gán giá trị tương tự như khi ta làm:
// const x = arrValue[0];
// const y = arrValue[1];
// const z = arrValue[2];
// Điều này giúp giảm đáng kể dòng lệnh

//Ví dụ với object:
const human = {
    name: 'Duong',
    age: 25,
    gender: 'male'    
}
let {name, age, gender} = human;
// Ở đây name, age, gender sẽ được gán giá trị của key tương ứng trong human;
// Thứ tự các key không quan trọng
// có thể let { age, gender, name } = person vẫn cho kết quả tương tự
// Không thể sử dụng key name1 thay cho name : let {name1, age, gender}
// Và nếu muốn dùng name1 thay vì name:
// let { name: name1, age: age1, gender:gender1 } sẽ có được kết quả tương tự

//Nó cũng có thể dùng để hoán đổi các biến
let num3 = 3;
let num4 = 4;
[num3, num4] = [num4, num3]; // num3, num4 được đổi giá trị cho nhau.

// Đổi các giá trị mặc định:
let [num5 = 5, num6 = 7] = arrValue; 
// ở trên arrValue = ['one', 'two', 'three']
// bỏ quan 'three' và gán các giá trị tương ứng num5 = 'two', num6 = 'three'

/** 
 * Class 
 * ES6 class là một bản thiết kế cho đối tượng, có thể tạo đối tượng từ một class
*/

// Để khởi tạo một đối tượng:
// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// const person1 = new Person();
//Thay vì trên, ES6 có constructor: 
// Phương thức bên trong một lớp được gọi tự động mỗi khi một đối tượng được tạo.
class Student {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`Hello! My name is ${this.name}`);
    }
    get stdName(){
        return this.name;
    }
    set stdName(name){
        this.name = name;
    }
}
const std = new Student('duong');
// Ở đây std là một đối tượng của class Student
// Để truy cập đến đối tượng cần sự dụng tên của nó + dấu chấm và tên property hay function
console.log(std.name);
std.sayHi();

// Getter - Setter
// các phương thức nhận (getter) và cài đặt (setter) giá trị của một đối tượng
console.log(std.stdName);
std.stdName = 'person';
console.log(std.name);

// Không thể truy cập một lớp trước khi xác định nó, nó sẽ gẫy ra lỗi.
// VD: không thể const std = new Student('duong'); tại trước class Student {}

// Class có thể coi như là một function đặc biệt vì vậy
// typeof Student = function

// Kế thừa
// Sử dụng kế thừa lớp, một lớp có thể kế thừa tất cả các phương thức và thuộc tính của một lớp khác.
// Kế thừa là một tính năng hữu ích cho phép khả năng tái sử dụng mã.
// Để sử dụng kế thừa lớp, bạn sử dụng từ khóa extends. 
class StudentMale extends Student{
    constructor(name, age){
        super(name);
        this.age = age;
    }

    // Ghi đè lại hàm sayHi() nếu không muốn thực hiện hàm của cha
    sayHi(){
        console.log(`Hello! I'm ${this.name}`);
    }
}

/** 
 * Default, rest, spread
*/

// Default: Cho phép cung cấp các giá trị mặc định cho các tham số của hàm.
// VD:
function sum(x = 1, y = 1) {
    return x + y;
}
console.log('sum()', sum(5, 15)); // 20
console.log('sum()', sum(7));     // 8 vì x = 7 còn y nhận giá trị default là 1
console.log('sum()', sum());      // 2 vì x, y có giá trị default là 1

// Có thể sử dụng biểu thức làm giá trị mặc định
function sum2(x=1, y=x, z=x+y){
    console.log('sum2()', x+y+z);
}
sum2();
//Có thể truyền giá trị hàm làm giá trị mặc định
const calculate = (x, y = x*sum()) => x+y;
console.log(calculate(1)); // = 1+ 1*sum() = 2
// const sum(x = y, y = 1) không gọi được sum() vì không thể xác định y
// Khi truyền undefined đến một hàm tham số mặc định, hàm sẽ nhận tham số mặc định


// Rest parameter là một cú pháp tạo ra một array từ một số lượng giá trị không xác định
function restTest(...args) {
    console.log(args)
}
restTest(1, 2, 3, 4, 5, 6)

// Spread operator là ba dấu chấm ( ...)
// có thể chuyển đổi một mảng thành một chuỗi các tham số được phân tách bằng dấu phẩy. 

//Với array
//Tạo một mảng từ một mảng đã được xác định và một mảng, một biến, hay một dãy biến.
const tools = ['hammer', 'screwdriver'];
const otherTools = ['wrench', 'saw'];
const allTools = [...tools,...otherTools];
// const allTools = [...tools, 'a'];
// const allTools = [...tools, 'a', 'b', 'c'];

//Tương tự ta có với object
const hs = { name: 'hs', age: 25 };
const infohs = { ...hs, local: 'hanoi'};

//Hay là call một function
function multiply(a, b, c) {
    return a * b * c
}
const numbers = [1,2,3];
console.log(multiply(...numbers));

/** 
 * Promise là một cách để xử lý bất đồng bộ
 * Được sử dụng để tìm hiểu hoạt động bất đồng bộ có được hoàn thành hay không
 * Ví dụ: khi bạn yêu cầu dữ liệu từ máy chủ bằng cách sử dụng một lời hứa, nó sẽ ở trạng thái chờ xử lý. 
 * Khi dữ liệu đến thành công, nó sẽ ở trạng thái hoàn thành. 
 * Nếu một lỗi xảy ra, thì nó sẽ ở trạng thái bị từ chối.
 * 
 * Nó được sử dụng để giải quyết callbackhell
*/

const promise = new Promise(function(resolve, reject) {
    //Logic 
    // Bắt buộc phải có 1 trong 2 resolve hoặc reject
    //Thành công: 
    resolve('foo');

    //Thất bại: 
    // reject()
})

// Có 3 hàm then(), catch() và finally() để xử lý Promise
// then(): xử lý thành công resolve('foo')
// catch(): xử lý thành công reject()
promise
    .then(function(data){
        console.log(data);
        return 1;
    }).then(function(data){ // Hàm then thứ 2 sẽ lấy dữ liệu từ hàm then đầu
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })

// Promise.all để xử lý cùng lúc các Promise: hoặc là xử lý thành công cùng lúc hoặc là một promise bị reject thì cùng thất bại
// Promise.all([Promise1, Promise2, Promise3])
//  .then(result) => {
//    console.log(result)
//  })
//  .catch(error => console.log(`Error in promises ${error}`))

/** 
 * Async + Await
 * từ khóa async được sử dụng trước hàm để biểu thị rằng hàm không đồng bộ.
 * Hàm async trả về một lời hứa .
 * Từ khóa await được sử dụng bên trong hàm async để chờ thao tác không đồng bộ.
*/

// 1 promise
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});
// async 
async function asyncFunc() {
    let result = await promise2; // Chờ promise được thực hiện rồi mới thực hiện tiếp các câu lệnh sau
    console.log(result);
    console.log('hello');
}
asyncFunc();
//Hàm async cho phép phương thức không đồng bộ được thực thi theo cách có vẻ đồng bộ. 
//Mặc dù hoạt động không đồng bộ, có vẻ như hoạt động được thực hiện theo cách đồng bộ.

// chờ promise hoàn thành thì mới thực hiện promise2
async function asyncFunc() {
    let result1 = await promise;
    let result2 = await promise2;

    console.log(result1);
    console.log(result2);
}

//Xử lý lỗi bằng try/catch
// async function
async function asyncF() {
    try {
        // wait until the promise resolves 
        let result = await promise2; 
        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}

/** 
 * Axios
 * Axios là một thư viện HTTP Client dựa trên Promise. 
 * Cơ bản thì nó cung cấp một API cho việc xử lý XHR.
 * Axios sử dụng thuộc tính data đã tự động convert sang json
*/

// Lấy dữ liệu với api
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });