function getData() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      const data = "This is data from server";
      resolve(data);
    }, 1000);
  });

  return promise1;
}
// console.log("before");

// const dataPromise = getData();
// dataPromise.then((d) => {
//   console.log("we are in then:", d);
// });

// console.log("after");

async function main() {
  //   const dataPromise = getData();
  //   dataPromise.then((d) => {
  //     console.log("we are in then:", d);
  //   });

  const d = await getData();
  console.log("we are in main:", d);
}
console.log("before");
main();
console.log("after");
