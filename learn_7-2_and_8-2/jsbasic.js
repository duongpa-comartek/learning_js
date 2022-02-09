/**
 * Floating point
 * Một số biểu hiện của floating point
 * Các cách để tránh floating point: toFixed, 
 * một số hàm Math: ceil, floor, round, trunc
 */
function floatingPoint(){
    console.log("floatingPoint:");
    let a = 0.1;
    let b = 0.2;
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
    console.log("null and undefined:");
    let a;
    const b = null;
    console.log(a==b);
    console.log(a===b);

    const c = null;
    console.log(c==b);
    console.log(c===b);

    let d;
    console.log(a==d);
    console.log(a===d);
    
    console.log(typeof a);
    console.log(typeof b);

    console.log(a+1);
    console.log(b+1);
}
compareNullAndUndefined();

/**
 * Compare Object
 * So sánh object qua giá trị
 * Em chưa đi sâu so sánh nếu có thuộc tính có giá trị là object, buộc phải dùng đệ quy
 * Hoặc có thể ép kiểu string
*/
console.log("Compare Object:");
function compareObject(obj1, obj2) {
    if(obj1==null && obj2==null && typeof obj1 != "object" && typeof obj2 != "object"){
        return false;
    }
    Object.is(obj1, obj1);
    Object.is(obj1, obj2);

    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if(key1.length!=key2.length) return false;

    for(let i = 0; i < key1.length; i++){
        if(key1[i]!==key2[i]) return false;
    }

    for(let key in key1){
        if(obj1[key]!==obj2[key]) return false;
    }
    return true;
}

const obj1 = { a:1, b:2};
const obj2 = { a:1, b:2};
const result = compareObject(obj1, obj2);
console.log(result);
console.log(JSON.stringify(obj1)==JSON.stringify(obj2));


/** 
 * For
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
 * Scope: phân biệt các biến có thể truy cập ở đâu
 * có phân chia đơn giản là global, trong block {} và trong function block {}
 * 
 * var, let and const
 * var là khai báo ở bất kỳ đâu thì kể cả trong function hay if 
 * thì ở ngoài block cũng có thể lấy được giá trị của nó.
 * là 1 biến global mọi lúc.
 * 
 * let là dùng để khai báo cho biến có thể thay đổi giá trị.
 * const là dùng để khai báo cho biến không đổi.
 * dùng trong cùng một block thì không thể khai báo lại cùng một tên biến của let, const.
 * const có thể cập nhập giá trị nếu là biến dạng object, array, class.
 */

function myFunction(){
    var name = "Duong";
}
console.log(name);
if(true){
    var age = 30;
}
console.log(age);

const a = 10;
const b = 1;
{
    const a = 11;
    //Nó lấy giá trị biến ở block ngoài nếu trong block không có biến đó
    console.log(b);
}
// Nó sẽ lấy giá trị biến có tại cùng scope
console.log(a);

const array = [1,2,3,4];
//Thêm một giá trị vào mảng array
array.push(5);
console.log(array);

/**
 * Closures 
 * 1 function có thể return 1 hoặc nhiều function có trong hàm
 * để có thể giúp dút gọn code, hay để thêm bảo mật
 * vì sẽ chỉ có thể làm việc với 1 số hàm mà mình đưa ra.
 */
function addNumber(){
    let n = 0;
    function add(){
        return ++n;
    }
    return add;
}
const temp = addNumber();
console.log(temp());
console.log(temp());
console.log(temp());
