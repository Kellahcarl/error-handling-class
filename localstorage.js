//local storage

let data = ["sweater" , "trauser" , "shirt" , "pant" , "shoes"];
data = JSON.stringify( data );

localStorage.setItem( "product", data );

let products = [
  { name: "trouser", id: 1 },
  { name: "trouser", id: 1 },
  { name: "trouser", id: 1 },
];

let new_products = { name : "shorts", id: 4 };

// saving data to local storage

localStorage.setItem( "products", JSON.stringify( products ) );
// getting data from local storage

let productsFromLocalStorage = localStorage.getItem( "products" );
console.log( JSON.parse( productsFromLocalStorage ) );

//updating data in local storage


productsFromLocalStorage = JSON.parse( productsFromLocalStorage ); //getting array

productsFromLocalStorage.push( new_products ); // adding value to array

console.log( productsFromLocalStorage );

localStorage.setItem( "products", JSON.stringify( productsFromLocalStorage ) ); // overidding the value in local storage