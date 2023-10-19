// console.log("no errors");
let getData = () => {
  return new Promise((resolve, reject) => {
    let data = "data returned";
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

try {
   getData() .then ( data => console.log(data)).catch((error)=>{console.log(error.message);});
} catch (error) {
    console.log(error.message);
}

async function getDataAsync() {
  try {
    let data1 = await getData();
    console.log(data1);
  } catch (error) {
    console.log(error.message);
  }
}

getDataAsync();

console.log("executed when all errors are handled");
