const products = JSON.parse(localStorage.getItem('checkoutData'));
console.log(products, "Trigger");

function checkoutList () {
    let counter = 0;
    return (root.innerHTML = products
        .map((product) => {
          counter++;
          let { id, price, title} = product;
          title = title.substring(0, 15);
    
          return ` 
            <div class="row text-center first-product-row my-2">
                <div class="col">
                    <p>${counter}</p>
                </div>
                <div class="col">
                    <p>${title}</p>
                </div>
                <div class="col">
                    <p>$${price}</p>
                </div>
                <div class="col">
                    <p class="total-count">0</p>
                </div>
                <div class="col">
                    <p>$ 0.00</p>
                </div>

                <div class="col">
                    <button class="plus-btn" onclick="increment()"><i class="fa-solid fa-plus"></i></button>
                    <button class="minus-btn" onclick="decrement()"><i class="fa-solid fa-minus"></i></button>
                    <button class="btn btn-sm btn-danger" type="button">REMOVE</button>
                </div>
            </div> `;
        })
        .join(""));
}

let removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);
for(let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
    })
}

const quantity = document.getElementsByClassName('total-count');

let count = 0;
console.log(quantity);

function increment() {
    count++;
    quantity.innerText = count;
  }

function decrement() {
    count--;
    quantity.innerText = count;
  }

checkoutList();