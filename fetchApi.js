// fetch api

let Url = "https://fakestoreapi.com/products/";
//get
let getData = async () => {
  let results = await fetch(Url);
  let data = await results.json();
  // console.log( results );
  console.log(data.length);
};

getData();

//post

let new_product = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
};

// fetch({
//   url: Url,
//   method: "POST",
// });

let postProdusct = async () => {
  let response = await fetch(Url, {
    url: Url,
    method: "POST",
    body: JSON.stringify(new_product),
  });

  let result = await response.json();
  console.log(result);
};

postProdusct();

// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   body: JSON.stringify(new_product),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));
