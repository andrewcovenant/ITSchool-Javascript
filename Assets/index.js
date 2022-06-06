const callApi = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => listProducts(data))
    .catch((error) => console.log(error));
};

callApi();

function listProducts(res) {
  const products = res.map((product) => {
    const productContainer = document.createElement("div");
    const title = document.createElement("p");
    const price = document.createElement("span");
    const image = document.createElement("img");
    const description = document.createElement("span");

    productContainer.setAttribute("class", "content");

    title.textContent = product.title;
    productContainer.appendChild(title);

    image.width = 300;
    image.src = product.image;
    productContainer.appendChild(image);

    description.textContent = product.description;
    productContainer.appendChild(description);

    price.textContent = product.price;
    productContainer.appendChild(price);
  });
  return products;
}

const increment = document.getElementById("increment");
let count = 0;

function incrementNumber() {
  count++;
  increment.innerText = count;
}
