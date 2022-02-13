/**=============JavaScript Basic ================*/

/**
 * Floating point
 * 0.1+0.2 != 0.3
 * Do bộ nhớ máy tính là có hạn, ta không thể lưu con số với độ chính xác tuyệt đối.
 * Có thể sử dụng các thư viện bigjs, decimaljs, numeraljs, ... để có được kết quả chính xác, tuy nhiên sẽ làm giảm hiệu suất của ứng dụng
 * Các cách làm tròn số: toFixed(i) và một số hàm Math làm tròn number: ceil, floor, round, trunc
 */
function floatingPoint(){
    console.log("floatingPoint:");
    const a = 0.1;
    const b = 0.2;
    console.log(a+b);
    console.log(a*b);
    console.log(3*a+3*b);

    let c = a+b;
    // toFixed(i) làm tròn đến i số sau dấu . 
    console.log("toFixed: 0.1+0.2=" + c.toFixed(1));
    // ceil làm tròn lên
    console.log("ceil: 0.1+0.2=" + Math.ceil(c));
    // floor làm tròn xuống
    console.log("floor: 0.1+0.2=" + Math.floor(c));
    // round làm tròn 0.5
    console.log("round: 0.1+0.2+0.3=" + Math.round(c+0.3));
    // trunc loại bỏ phần thập phân
    console.log("trunc: 0.1+0.2=" + Math.trunc(c));
    // parseFloat để làm việc với số thập phân
	console.log(parseFloat(a+b).toPrecision(12));
}
floatingPoint();

/**
 * null and undefined
 * undefined là khi không khai báo giá trị của biến, là một kiểu của JS
 * tức là một không tồn tại, không xác định 
 * nên không thể làm việc với các phép toán +,-...
 * null là một đối tượng,  được khai báo với giá trị null, 
 * tức nó đã được khai báo nhưng không có giá trị gì 
 */

function compareNullAndUndefined(){
    console.log(typeof null); //object
    console.log(typeof undefined); //undefined
    console.log(!null); //true
    console.log(!undefined); //true
    console.log(null + 1); //1
    console.log(undefined + 1); //NaN
}
compareNullAndUndefined();

/**
 * So sánh == và ===
 * - 2 dấu bằng "==" : Chuyển đổi về cùng kiểu để so sánh
 * - 3 dấu bằng "===" : So sánh cả kiểu dữ liệu và giá trị
 */
function compareEqual(){
    const emptyObject1 = {};
    const emptyObject2 = {};
    const comparationNum1 = 3;
    const comparationNum2 = 3;
    const comparationString = '3';
    /**
    * Mặc dù null khi chuyển number sẽ là 0 và undefined chuyển thành number sẽ là NaN
    * Tuy nhiên chúng đều là false khi chuyển sang boolean, nên khi sử dụng ==, kết quả
    * vẫn là true
    */
    console.log(null == undefined); //true
    /**
    * Khi so sánh 2 object, JS sẽ thực hiện so sánh địa chỉ ô nhớ của chúng trước
    */
    console.log(emptyObject1 == emptyObject2); //false
    /**
    * Đối với các kiểu nguyên thủy, JS sẽ không so sánh địa chỉ ô nhớ
    */
    console.log(JSON.stringify(emptyObject1) === JSON.stringify(emptyObject2)); //true
    console.log(comparationNum1 === comparationNum2); //true
    console.log(comparationNum1 === comparationString); //false
    /**
     * Khi so sánh 2 dấu bằng, JS sẽ cố chuyển đổi 2 vế về cùng kiểu dữ liệu
     */
    console.log(comparationNum1 == comparationString); //true
    console.log(comparationNum1 === +comparationString); //true
}
compareEqual();

/**
 * So sánh Object
 * So sánh object qua giá trị
 * Hoặc có thể ép kiểu string
*/
console.log("Compare Object:");
// Hàm kiểm tra một giá trị là object
function isObject(obj) {
    return obj != null && typeof obj === "object";
}
// Hàm so sánh sâu với đệ quy
function isDeepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    console.log("keys1", keys1); // trả về mảng các thuộc tính của obj1
    const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2

    // nếu số lượng keys khác nhau thì chắc chắn khác nhau
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        // kiểm tra xem hai giá trị có cùng là object hay không
        const areObjects = isObject(val1) && isObject(val2);
        // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
        if (areObjects && !isDeepEqual(val1, val2)) {
            return false;
        }
        // nếu không cùng là object thì so sánh giá trị
        if (!areObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}
let point11 = { x: 1, y: 2, metadata: { type: "point", age: 12 } };
let point12 = { x: 1, y: 2, meta: { type: "point" } };
console.log("so sánh 2 object ", isDeepEqual(point11, point12));
console.log(JSON.stringify(point11)==JSON.stringify(point12));

/** 
 * Các vòng lặp for
 * forlet là nhanh nhất vì nó xác định điều kiện trước
 * forin lấy các chỉ số của các phần tử để thực hiện vòng lặp
 * forof lấy giá trị của các phần tử để thực hiện vòng lặp
*/
console.log("Các hàm for:")
function resFor(){
    const numbers = [10,9,8,7,6,5,4,3,2,1];
    let str = "";
    for (let x in numbers) {
        str += x + "." + numbers[x] + "|"
    }
    console.log(str);
    str="";

    for (let n of numbers) {
        str += n + "|"
    }
    console.log(str);
    str="";

    for (let i=0; i<numbers.length; i++) {
        str += i + "." + numbers[i] + "|"
    }
    console.log(str);
}
resFor();

/**
 * So sánh typeof và instanceof
 * - Giá trị trả về của typeof là chuỗi, giá trị trả về của instanceof là boolean
 * - typeof được dùng khi ta muốn biết tên kiểu dữ liệu của biến
 * - instanceof được dùng khi ta muốn biết biến có phải là thực thể của đối tượng hay không
 */
function typeAndInstance(){
    console.log(typeof 3); //number
    console.log(typeof '3'); //string
    console.log(3 instanceof Number); //false
    console.log([] instanceof Array); //true
    console.log(null instanceof Object); //false
    console.log(typeof null); //object
}
typeAndInstance();

/**
 * Scope: phân biệt các biến có thể truy cập ở đâu
 * có phân chia đơn giản là global, trong block {} và trong function block {}
 * hay localscope, blockscope, functionscope
 * gobalscope hay toàn cục biến có thể truy cập đến mọi nơi và ở các blockscope con
 * blockspoce là khoảng trong giấu {}
 * functionscope là khoảng mà khi hàm được gọi sẽ được tạo ra một các riêng biệt 
 */

function myFunctionScope(){
    var name = "Duong";
}
myFunctionScope();
// console.log(name); biến name không thể gọi vì nó là ở trong functionscope 

if(true){
    var agePerson = 30; // biến agePerson có thể gọi từ scope ngoài của một block
}
console.log(agePerson);

const a1 = 10;
const b1 = 1;
{
    const a1 = 11;
    //lấy giá trị biến ở block ngoài nếu trong block không có biến đó
    console.log(b1);
}
//lấy giá trị biến có tại cùng scope
console.log(a1);

/**
 * Closures 
 * 1 function có thể return 1 hoặc nhiều function có trong hàm
 * để có thể giúp dút gọn code, hay để thêm bảo mật
 * vì sẽ chỉ có thể làm việc với 1 số hàm mà mình đưa ra.
 */
function addNumberClosures(){
    let n = 0;
    function add(){
        return ++n;
    }
    return add;
}
const closures = addNumberClosures();
console.log(closures());//1
console.log(closures());//2
console.log(closures());//3

/**
 * Bitwise Operator
 * Đây là một phép toán đơn giản và nhanh, được hỗ trợ trực tiếp bởi bộ xử lý (processor).
 * Thông thường các phép tính bitwise nhanh hơn rất nhiều so với phép nhân, phép chia, đôi khi nhanh hơn đáng kể so với phép cộng.
 * Các phép tính bitwise sử dụng ít năng lượng hơn bởi nó ít sử dụng tài nguyên
 */ 

/**
 * & - AND
 * Trả về 1 nếu cả 2 bit là 1 và ngược lại là 0 nếu cả 2 bit là 0
 * | - OR	
 * Nếu 1 trong 2 bit là 1 giá trị trả về là 1, là 0 nếu cả 2 bit là 0
 * ^ - XOR	
 * Nếu hai bit khác nhau, giá trị trả về là 1, ngược lại trả về 0
 * ~ - NOT	
 * Đảo ngược tất cả các bit, 0 thành 1 và 1 thành 0.
 * << - Zero Fill
 * Dịch chuyển tất cả các bit sang bên trái.
 * >> - Sign Preserving
 * Dịch chuyển tất cả các bit sang bên phải ngoại trừ bit đầu tiên.
 * >>> - Zero Fill
 * Dịch chuyển tất cả các bit sang bên phải.
 */

/**
 * Tham chiếu và tham trị
 * Tham chiếu là biến được gán địa chỉ, nó thay đổi giá trị của 2 biến nếu thay đổi biến.
 * Tham trị là biến được gán giá trị, nó chỉ thay đổi biến được gán, biến ban đầu không thay đổi
 */
// Tham chiếu
function referenceExample(){
    const obj1 = {name: 'duong'}
    const obj2 = obj1
    obj2.name = 'master'
    console.log(obj1) // {name: 'master'}
    console.log(obj2) // {name: 'master'}
}
referenceExample();
//Tham trị
function valueExample(){
    let str1 = "";
    let str2 = str1;
    str2 = "duong";
    console.log(str1); // ""
    console.log(str2); // "duong"
}
valueExample();

/**
 * Quản lý học sinh
 */
const hs1 = {name: "h1", score: 7};
const hs2 = {name: "h2", score: 5};
const hs3 = {name: "h3", score: 6};
const hs4 = {name: "h4", score: 8};
const hs5 = {name: "h5", score: 9};
const listHS = [hs1, hs2, hs3, hs4, hs5];

/**
 * @returns Hoc sinh giỏi điểm nếu >= 8.5
 */
function getHSGioi(){
  return listHS.filter(hs => hs.score>=8.5);
}
/**
 * @returns Hoc sinh khá nếu điểm từ 7 đến 8.5
 */
function getHSKha(){
  return listHS.filter(hs => hs.score>=7 && hs.score<8.5);
}
/**
 * @returns Hoc sinh khá nếu điểm từ 5 đến 7
 */
function getHSTrungBinh(){
  return listHS.filter(hs => hs.score>=5 && hs.score<7);
}
// Tham chiếu đến 1 đối tượng trong mảng
console.log(listHS);
hs1.name = "master";
console.log(listHS);

/**
 * VD2 về tham chiếu
 */
const per1 = {name:'A'}
const per2 = {name:'B'}
const people = {per1,per2}
console.log(JSON.stringify(people))
per1.name = 'A1'
console.log(JSON.stringify(people))
const chil1 = {
  name: "children1"
}
const chil2 = {
  name: "children2"
}
per1.children = [chil1, chil2];
//Khi thay đổi thuộc tính của chil1 thì trong per1-chil1 cũng thay đổi
//Vì chúng cùng đều cùng tham chiếu đến 1 vùng nhớ
console.log(per1);
chil1.name = 'duong';
console.log(per1);

/**
 * OOP ES5 
 */
//Một class khai báo dạng function
function Person1 (name, age, male) {
    this.name = name;
    this.age = age;
    this.male = male;
    this.getInfo = function () { 
        return this.name + " " + this.age;
    }
    this.setName = function (name) {
        this.name = name;
    }
}
// new person để tạo một đối tượng mới
const per11 = new Person1('p1', 25, true);
console.log(per11.getInfo());
per11.setName('person');
console.log(per11.getInfo());

//Một class khai báo dạng object
const human1 = {
    name : "human", 
    age : 25,
    getInfo : function() {
        return this.name + " " + this.age;
    }
}
console.log(human1.getInfo());
human1.location = "hn";
human1.getInfo = function () {
    return this.name + " " + this.location;
}
console.log(human1.getInfo());

//Hoặc cũng có thể là:
const HocSinh = new Object();
HocSinh.setAll = function(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;
}
HocSinh.getAll = function(){
    return this.name + " " + this.age + " " + this.location;
}
const hocsinh1 = HocSinh;
hocsinh1.setAll('hs1', 30, 'hg')
console.log(hocsinh1.getAll());

/**
 * Kế thừa
 */
//Kế thừa function person
//Để kế thừa giữa các lớp đối tượng, bạn cần sử dụng đến phương thức call().
function PersonHigh(name, age, male, height){
    Person1.call(this, name, age, male);
    this.height = height;
}
// kế thừa prototype
PersonHigh.prototype = Object.create(Person1.prototype); 
PersonHigh.prototype.constructor = PersonHigh;

const per22 = new PersonHigh('p2', 20, false, 180);
console.log(per22 instanceof Person1); // true
console.log(per22 instanceof PersonHigh); //true

/**
 * prototype: Prototype là khuôn mẫu cho các đối tượng trong javascript. 
 * Các đối tượng kế thừa các thuộc tính và phương thức. 
 * Có thể bổ sung thuộc tính hay phương thức.
 */
function ConNguoi(name, age) {
    this.name = name;
    this.age = age;
}
const nam = new ConNguoi("nam", 30);
// Thêm thuộc tính và phương thức
ConNguoi.prototype.male = true;
ConNguoi.prototype.getInfo = function () {
    return this.name + " " + this.male;
}
console.log(nam);

/**
 * this
 * this là từ khóa đề cập đến một đối tượng tùy theo cách mà nó được gọi
 * this trỏ về đối tượng nó đang thuộc về
 */
// Khi "use strict" thì this nằm ở ngoài thì trỏ đối tượng toàn cục, 
// nếu this nằm trong một function thì this là undefined
// Một mình, this tham chiếu đối tượng toàn cục
console.log(this);
const oppo = {
    name: 'Oppo',
    color: 'black',
    info() {
        console.log(this); // this trỏ đến đối tượng object mà nó thuộc về
    },
    children: {
        name: 'child',
        method() {
            console.log(this) // this trỏ đến đối tượng children
        }
    }
}
oppo.children.method(); // this trỏ đến đối tượng ngay trước dấu . : children
function Car(name, color){
    this.name = name;
    this.color = color;
    this.run = function() {
        console.log("run...", this);
    }
}
const wave = new Car('Wave', 'blue');
wave.run(); // this ở đây trỏ đến đối tượng wave được tạo ra

// const button = document.querySelector('button');
// button.onclick = function(){
//     console.log(this); this trỏ đến button even
// }
// Các phương thức bind(), call(), apply() có thể tham chiếu this
const personY = {
    myName: 'person'
};
const personX = {
    myName: 'duong',
    sayHi(){
        return `Hello! My name is ${this.myName}`;
    }
}
console.log(personX.sayHi());
// Để getHello có this là trỏ đến đúng đối tượng personX
// Sử dụng bind để khóa rằng buộc personX
const getHello = personX.sayHi.bind(personX); 
console.log(getHello());
// Call: bind rằng buộc với đối tượng và gọi luôn hàm đó.
console.log(personX.sayHi.call(personY));
//apply được dùng để xác định từ khóa this trong khi function được thực thi
//giống với call nhưng các đối số tiếp theo được gom thành 1 mảng

/**======================ES6===================== */

/**
 * So sánh var, let và const
 * - var là localscope, nghĩa là biến có thể được truy cập từ nơi khai báo nó
 * và từ các blockscope con (xem ví dụ để hiểu)
 * - var có tính chất hoisting, có nghĩa là ta có thể sử dụng biến trước khi khai báo
 * - var có thể được khai báo lại trong cùng scope
 * - let là blockscope
 * - let có thể được cập nhật nhưng không thể khai báo lại trong cùng scope
 * - const giống let nhưng không thể cập nhật lại giá trị nếu là biến tham trị
 */

/**
 * - Sử dụng var sẽ khiến code khó đọc do nó có thể được khai báo lại.
 * var khiến chương trình dễ xảy ra lỗi hơn do nó là localscope
 * - Sử dụng let mặc dù tốt hơn var nhưng đôi khi cũng khiến chương trình xảy ra lỗi
 * do nó là blockscope, nó vẫn có thể được sửa đổi trong functionscope
 * - Sử dụng const mặc dù tránh được việc bị sửa đổi nhưng có thể cập nhập nếu là biến tham chiếu
 */

if (true) {
	if (true) {
		//Blockscope, ở đây có thể truy cập các biến global
		var variable1 = 'localscope';
	}
}
//Globalscope, ở đây có thể truy cập các biến var trong blockscope con
console.log(variable1); //localscope
function functionScope() {
	//Functionscope, ở đây có thể truy cập các biến global
	var variable2 = 'functionScope';
}
//Globalscope, ở đây không thể truy cập các biến var trong functionscope
//console.log(variable2); //Lỗi: variable2 is not defined

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
const addArrow = (a,b) => a+b;

// Hàm mũi tên với không hoặc nhiều hơn 1 đối số phải có dấu ():
let greet = () => console.log('Hello!');
greet = (name, friend) => console.log(`Hi ${friend}. My name is ${name}.`);
// Hàm mũi tên với một đối số thì không cần dấu ():
greet = name => console.log(`Hello. My name is ${name}`);

//this với arrow function
function Person2(){
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
const person21 = new Person2();
person21.sayHi();

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
const a22 = 1, b22 = 2, c22 = 3;
const obj22 = { a22, b22, c22 }
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
const obj2 = {
    [key1] : 1,  //obj2.one = 1
    two : 2
}

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
console.log(`${num1} + ${num2} = ${addArrow(num1, num2)}`); // Hàm add ở trên arrow function

/**
 * Destructuring
 * Cho phép  một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array. 
 * Điều này có thể làm giảm đáng kể các dòng mã cần thiết để thao tác dữ liệu trong các cấu trúc này. 
 */

//Ví dụ với array:
const arrValue = ['one', 'two', 'three'];
// Sau dòng lệnh dưới x, y, z sẽ được gán giá trị tương tự như khi ta làm:
// const x = arrValue[0];
// const y = arrValue[1];
// const z = arrValue[2];
// Điều này giúp giảm đáng kể dòng lệnh
const [x, y, z] = arrValue; 

//Ví dụ với object:
const human2 = {
    name: 'Duong',
    age: 25,
    gender: 'male'    
}
// Ở dưới đây name, age, gender sẽ được gán giá trị của key tương ứng trong human2;
// Thứ tự các key không quan trọng
// có thể let { age, gender, name } = person vẫn cho kết quả tương tự
// Không thể sử dụng key name1 thay cho name : let {name1, age, gender}
// Và nếu muốn dùng name1 thay vì name:
// let { name: name1, age: age1, gender:gender1 } sẽ có được kết quả tương tự
let {name, age, gender} = human2;

//Nó cũng có thể dùng để hoán đổi các biến
let num3 = 3;
let num4 = 4;
[num3, num4] = [num4, num3]; // num3, num4 được đổi giá trị cho nhau.

// Đổi các giá trị mặc định:
// ở dưới arrValue = ['one', 'two', 'three']
// bỏ quan 'three' và gán các giá trị tương ứng num5 = 'two', num6 = 'three'
let [num5 = 5, num6 = 7] = arrValue; 

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
// Thay vì trên, ES6 có constructor: 
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

/*
 Default: Cho phép cung cấp các giá trị mặc định cho các tham số của hàm.
*/
// VD:
function sumNumbers(x = 1, y = 1) {
    return x + y;
}
console.log('sum()', sumNumbers(5, 15)); // 20
console.log('sum()', sumNumbers(7));     // 8 vì x = 7 còn y nhận giá trị default là 1
console.log('sum()', sumNumbers());      // 2 vì x, y có giá trị default là 1
// Có thể sử dụng biểu thức làm giá trị mặc định
function sum2(x=1, y=x, z=x+y){
    console.log('sum2()', x+y+z);
}
sum2();
//Có thể truyền giá trị hàm làm giá trị mặc định
const calculate = (x, y = x*sumNumbers()) => x+y;
console.log(calculate(1)); // = 1+ 1*sumNumbers() = 2
// const sum(x = y, y = 1) không gọi được sum() vì không thể xác định y
// Khi truyền undefined đến một hàm tham số mặc định, hàm sẽ nhận tham số mặc định

/*
 Rest parameter là một cú pháp tạo ra một array từ một số lượng giá trị không xác định
 */
function restTest(...args) {
    console.log(args)
}
restTest(1, 2, 3, 4, 5, 6) // args = [1,2,3,4,5,6]

/*
Spread operator là ba dấu chấm ( ...) có thể chuyển đổi một mảng thành một chuỗi các tham số được phân tách bằng dấu phẩy. 
*/
//Với array
//Tạo một mảng từ một mảng đã được xác định và một mảng, một biến, hay một dãy biến.
const tools = ['hammer', 'screwdriver'];
const otherTools = ['wrench', 'saw'];
const allTools = [...tools,...otherTools];
// const allTools = [...tools, 'a'];
// const allTools = [...tools, 'a', 'b', 'c'];

//Tương tự ta có với object
const hs11 = { name: 'hs', age: 25 };
const infohs = { ...hs11, local: 'hanoi'};
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
 * Nó được sử dụng để giải quyết callbackhell
*/

const promise = new Promise(function(resolve, reject) {
    // Logic 
    // Bắt buộc phải có 1 trong 2 resolve hoặc reject
    // Thành công: 
    resolve('foo');
    // Thất bại: 
    // reject('err');
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
    });

/**
 * Các phương thức trong promise    
 */

//Promise.all 
//Trả về tất cả kết quả cùng lúc sau khi các Promise đều chạy thành công 
//Nếu đến 1 promise bất kỳ có kết quả lỗi thì sẽ reject luôn promise lỗi đầu tiền và kết thúc
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve('promise1'), 1000);
  });
const promise2 = 2;
const promise3 = Promise.resolve('promise3');
Promise.all([promise1, promise2, promise3])
    .then(data => {
        const [p1,p2,p3] = data;
        console.log(p1,p2,p3); // promise1 2 promise3
    }).catch(err => {
        console.error(err); // nếu có 1 promise lỗi
    });

// Promise.allSettled
// Trả về một dãy kết quả là resolve và reject đều được thực hiện trong []
// Nó luôn trả về resolve kể cả có 1 hay tất cả các promise trả về reject
Promise.allSettled([promise1, promise2, promise3])
    .then(data => {
        console.log(data);
    });

// Promise.any
// Trả về promise được hoàn thành sớm nhất trong các prommise
// Nếu tất cả các promise đều lỗi thì reject
const promise4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 1000, 'Error: 4');
});
Promise.any([promise1, promise4, promise3])
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.error(err);
    });

// Promise.race
// Trả về promise có kết quả sớm nhất trong các prommise
// Bất kể promise đó có được thực hiện không.
const promise5 = new Promise(function(resolve, reject) {
    setTimeout(reject, 0, 'Error: 5');
})
Promise.race([promise4, promise5])
    .then(data => { 
        console.log(data);
    }).catch(err => {
        console.log(err); // Do promise5 có kết quả trước nên sẽ in 'Error: 5'
    });

/**
 * Axios là một thư viện HTTP Client dựa trên Promise. 
 * Cơ bản thì nó cung cấp một API cho việc xử lý XHR (XMLHttpRequests).
 * Một số phương thực yêu cầu được hỗ trợ: request,get, post, put, patch, delete, head, options
 */
// Thực hiện với GET:
axios.get ('https://jsonplaceholder.typicode.com/todos/1')
    .then (data => {console.log('get_axios \n', data)})
    .catch (err => {console.log(err)});

// Thực hiện với POST:
axios.post ('https://jsonplaceholder.typicode.com/todos/', {
    firstName: 'Phan',
    lastName: 'Duong'
    })
    .then (res => console.log('post_axios \n', res))
    .catch (err => console.log('err', err));

// GET all:
let endpoints = [
   'https://api.github.com/users/ejirocodes',
   'https://api.github.com/users/ejirocodes/repos',
   'https://api.github.com/users/ejirocodes/followers',
   'https://api.github.com/users/ejirocodes/following'
];
axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((data) => console.log('get_axios.all \n',data));

/**
 * Async - await
 * Async khai báo một hàm bất đồng bộ, biến đổi một hàm thông thường thành một Promise.
 * Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
 * Await chỉ làm việc với Promise. 
 * Bắt lỗi với try/catch
 */
const apiURL = `https://61e63bb6ce3a2d0017359021.mockapi.io/users`;
const list = async () => {
    try {
        return await axios.get(apiURL);
    } catch (error) {
        console.error(error);
    }
}
const getData = async () => {
    const info = await list().then(res => {
        if (res.data) {
            res.data.forEach(e => {
                console.log(`${e.id}. Name: ${e.name}`);
            });
        }
    }).catch(error => {
        console.log(error);
    })
}
getData();