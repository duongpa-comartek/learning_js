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

/**
 * Với animation
 */
function getAnimation() {
    console.log("animation loading...");
}
function turnOffAnimation() {
    console.log("turn off animation.")
}

function getDataWithAnimation() {
    getAnimation();
    return axios.get(apiURL)
    .then((res) => {
        console.log("data", res.data);
    }).catch((err) => {
        console.log(err);
    }).finally(turnOffAnimation);
}
getDataWithAnimation();