/**
 * Tham chiếu và tham trị
 * Tham chiếu là biến được gán địa chỉ, nó thay đổi giá trị của 2 biến nếu thay đổi biến.
 * Tham trị là biến được gán giá trị, nó chỉ thay đổi biến được gán, biến ban đầu không thay đổi
 */

// Tham chiếu
const obj1 = {name: 'duong'}
const obj2 = obj1
obj2.name = 'master'
console.log(obj1)
console.log(obj2)

//Tham trị
let str1 = "";
let str2 = str1;
str2 = "duong";
console.log(str1);
console.log(str2);

/**
 * VD1
 */

const per1 = {name:'A'}
const per2 = {name:'B'}
const people = {per1,per2}
console.log(JSON.stringify(people))
per1.name = 'A1'
console.log(JSON.stringify(people))


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

// Tham chiếu
console.log(listHS);
hs1.name = "master";
console.log(listHS);

/**
 * VD2
 * 
 */

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





