const callApi = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => listProducts(data))
    .catch((error) => console.log(error));
};

callApi();

function listProducts(res) {
  const products = res.map((product) => {
    const price = document.createElement("span");
    price.textContent = product.price;
    content.appendChild(price);
    const title = document.createElement("p");
    title.textContent = product.title;
    content.appendChild(title);
    const image = document.createElement("img");
    image.width = 300;
    image.src = product.image;
    content.appendChild(image);
  });
  return products;
}

const increment = document.getElementById('increment');
let count = 0;

function incrementNumber() {
    count++;
    increment.innerText = count;
}