/**
 * OOP
 */


/**
 * Một class khai báo dạng function
 */
function Person (name, age, male) {
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

/**
 * new person để tạo một đối tượng mới
 */
const per1 = new Person('p1', 25, true);
console.log(per1.getInfo());
per1.setName('person');
console.log(per1.getInfo());

/**
 * Một class khai báo dạng object
 */
const human = {
    name : "human", 
    age : 25,
    getInfo : function() {
        return this.name + " " + this.age;
    }
}

console.log(human.getInfo());
human.location = "hn";
human.getInfo = function () {
    return this.name + " " + this.location;
}
console.log(human.getInfo());

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

const hs1 = HocSinh;
hs1.setAll(
    'hs1', 30, 'hg'
)
console.log(hs1.getAll());

/**
 * Kế thừa
 */

//Kế thừa function person
function PersonHigh(name, age, male, height){
    Person.call(this, name, age, male);
    this.height = height;
}

// kế thừa prototype
PersonHigh.prototype = Object.create(Person.prototype);
PersonHigh.prototype.constructor = PersonHigh;


const per2 = new PersonHigh('p2', 20, false, 180);
console.log(per2 instanceof Person); // true
console.log(per2 instanceof PersonHigh); //true


/**
 * prototype: Prototype là khuôn mẫu cho các đối tượng trong javascript. 
 * Các đối tượng kế thừa các thuộc tính và phương thức. 
 * Nếu bạn bổ sung thuộc tính hay phương thức.
 */

function ConNguoi(name, age) {
    this.name = name;
    this.age = age;
}

const nam = new Connguoi(
    "nam", 30
);
// Thêm thuộc tính
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
console.log(wave.run()); // this ở đây trỏ đến đối tượng wave được tạo ra

// const button = document.querySelector('button');
// button.onclick = function(){
//     console.log(this); this trỏ đến button even
// }

//Các phương thức bind(), call(), apply() có thể tham chiếu this tới một đối tượng khác