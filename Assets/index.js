let API_RESPONSE;

const callApi = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      API_RESPONSE = data;
      return listProducts(data)
    })
    .catch((error) => console.log(error));
};

callApi();

function listProducts(res) {
  return (root.innerHTML = res
    .map((product) => {
      let { id, price, title, image, description } = product;
      title = title.substring(0, 15);
      description = description.substring(0, 30) + "...";

      const prod={
        id:id,
        title:title,
        price:price,
      }
      return ` <div class="col" >
              <div class="content">
    <div class="image">
      <img src=${image} alt="image" class="img-responsive" />
    </div>
    <div class="title">
      <h3>${title}</h3>
    </div>
    <div class="description">
      <p class="text-muted">${description}</p>
    </div>
    <div class="footer">
      <span class="price">$${price}</span>
      <button class="addtocart" onclick="addToCart(${id})"> <i class="fa-solid fa-bag-shopping"></i> </button>
      
    </div>
  </div>
</div> `;
    })
    .join(""));
}

let productList = [];

const addToCart = (id)=> {
  console.log(id, API_RESPONSE);
}
const increment = document.getElementById("increment");
let count = 0;

function incrementNumber() {
  count++;
  increment.innerText = count;
}
