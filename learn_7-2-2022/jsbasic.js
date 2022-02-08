/**
 * Floating point
 * Một số biểu hiện của floating point
 * Các cách để tránh floating point: toFixed, 
 * một số hàm Math: ceil, floor, round, trunc
 */
function floatingPoint(){
    let a = 0.1;
    let b = 0.2;
    console.log(a+b);
    console.log(a*b);
    console.log(3*a+3*b)

    let c = a+b;
    console.log("toFixed: " + c.toFixed(1));
    console.log("ceil: " + Math.ceil(c));
    console.log("floor: " + Math.floor(c));
    console.log("round: " + Math.round(c));
    console.log("trunc: " + Math.ceil(c));

}
floatingPoint();


/**
 * null and undefined
 * undefined là không khai báo giá trị của biến, tức là nó không có gì hết
 * null được khai báo với giá trị null, tức nó có giá trị là null
 */

function compareNullAndUndefined(){
    let a;
    let b = null;
    console.log(a==b);
    console.log(a===b);

    let c = null;
    console.log(c===b);
    console.log(c===b);

    let d;
    console.log(a==d);
    console.log(a===d);
    
    console.log(typeof a);
    console.log(typeof b);
}
compareNullAndUndefined();

/**
 * Compare Object
 * So sánh object qua giá trị
 * Em chưa đi sâu so sánh nếu có thuộc tính có giá trị là object
 */
function compareObject(){
    let obj1 = { a:1, b:2};
    let obj2 = { a:1, b:2};

    Object.is(obj1, obj1);
    Object.is(obj1, obj2);

    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if(key1.length=key2.length) return false;
    for(let i = 0; i < key1.length; i++){
        if(key1[i]!==key2[i]) return false;
    }

    for(let key in key1){
        if(obj1[key]!==obj2[key]) return false;
    }
    return true;
}
compareObject();

/** 
 * For
*/

function resFor(){
    const numbers = [10,9,8,7,6,5,4,3,2,1];

    for (let x in numbers) {
        console.log(x+"."+numbers[x]);
    }

    for (let n of numbers) {
        console.log(n);
    }


}

resFor();