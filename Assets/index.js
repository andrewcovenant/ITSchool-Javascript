const callApi = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => listProducts(data))
    .catch((error) => console.log(error));
};

callApi();

function listProducts(res) {
  return (root.innerHTML = res
    .map((product) => {
      let { price, title, image, description } = product;
      title = title.substring(0, 15);
      description = description.substring(0, 30) + "...";

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
      <a href="#" class="buy-btn"><i class="fa-solid fa-bag-shopping"></i></a>
    </div>
  </div>
</div> `;
    })
    .join(""));

  
}

const increment = document.getElementById("increment");
let count = 0;

function incrementNumber() {
  count++;
  increment.innerText = count;
}
