const promise1 = function updateLastUserActivity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let time = new Date();
            resolve(time);
        }, 1000)
    })
}

var post = [];

const promise2 = function createPost() {
    return new Promise((resolve, reject) => {
        post.push("Post");
        resolve(post);
    })
}

const promise3 = function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(post);
            post.pop();
        }, 2000)

    })
}
var p1_2 = [promise1, promise2];
var p1_3 = [promise1, promise3]
Promise.all(p1_2.map(func => func())).then((values) => console.log(values));
Promise.all(p1_3.map(func => func())).then((values) => console.log(values));