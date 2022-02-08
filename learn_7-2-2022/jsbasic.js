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
    let b = null;
    console.log(a==b);
    console.log(a===b);

    let c = null;
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

    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if(key1.length!=key2.length) return false;

    for(let i = 0; i < key1.length; i++){
        if(key1[i]!==key2[i]) return false;
    }

    for(let key in key1){
        if(obj1[key]!==obj2[key]) return false;
    }
    return true;
}

let obj1 = { a:1, b:2};
let obj2 = { a:1, b:2};
let result = compareObject(obj1, obj2);
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