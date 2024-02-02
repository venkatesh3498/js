// console.log('First');
// new Promise((resolve, reject) => {
//     console.log('Second');
//     reject();
// }).then(() => {
//     console.log('Third');
// }).catch(() => {console.log('Fourth')});

// console.log('Last');

// console.log("First");

// function getPosts() {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   // const data = await res.json();
//   // console.log(data);
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getPosts();
// console.log("Last");

// Closures ---
function parentFunction() {
    const x = 10;
    return innerFunction = () => {
        console.log(x);
     }
}

