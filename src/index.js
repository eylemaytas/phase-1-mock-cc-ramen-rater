/*const ramenName = document.querySelector('.name')
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const [ramenDetailImage, ramenDetailName, ramenDetailRestaurant] = ramenDetail.children;
const RamenDetailImage = document.querySelector('.detail-image')
const newRamenNameInput = document.getElementById("new-name");
const newRamenRestauranInput = document.getElementById("new-restaurant");
const newRamenImageInput = document.getElementById("new-image");
const newRamenRatingInput = document.getElementById("new-rating");
const newRamenCommentNameInput = document.getElementById("new-comment");

fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    ramens.forEach(ramen => {
      addRamenToMenu(ramen);
    });
    displayRamenMenu(ramens[0]);
    displayNewRamenMenu(ramens[0]);
  });

function addRamenToMenu(ramen) {
  const ramenImage = document.createElement('img');
  ramenImage.src = ramen.image;
  ramenMenu.appendChild(ramenImage);
  ramenImage.addEventListener("click", (event) => {
    displayRamenMenu(item);
  });
}

function displayRamenMenu(item) {
  let itemImage = document.querySelector(".detail-image");
  itemImage.src = ramen.image;
  let itemName = document.querySelector(".name");
  itemName.textContent = ramen.name;
  let restaurantName = document.querySelector(".restaurant");
  restaurantName.textContent = ramen.restaurant;
  commentRamen = document.getElementById("comment-display");
  commentRamen.textContent = ramen.comment;
  ratingRamen = document.getElementById("rating-display");
  ratingRamen.textContent = ramen.rating;
}

const newRamenForm = document.getElementById("new-ramen");

newRamenForm.addEventListener("submit", addNewItem);

function addNewItem(event) {
  event.preventDefault();
  const newRamenNameInput = document.getElementById("new-name").value;
  const newRamenRestauranInput =
    document.getElementById("new-restaurant").value;
  const newRamenImageInput = document.getElementById("new-image").value;
  const newRamenRatingInput = document.getElementById("new-rating").value;
  const newRamenCommentNameInput = document.getElementById("new-comment").value;
  newRamenImageInput.src = 2
  ramenMenu.appendChild(newRamenImageInput);
  newRamenNameInput.textContent = item.name;
  newRamenRestauranInput.textContent = item.restaurant;
  newRamenRatingInput.textContent = item.rating;
  newRamenCommentNameInput.textContent = item.rating;
}
*/

const ramenName = document.querySelector(".name");
const ramenRestaurant = document.querySelector(".restaurant");
const ramenImage = document.querySelector(".detail-image");
const RamenRating = document.getElementById("rating-display");
const ramenComment = document.getElementById("comment-display");

function displayRamenDetails(ramen) {
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ramenImage.src = ramen.image;
  RamenRating.textContent = ramen.rating;
  ramenComment.textContent = ramen.comment;
}

fetch("http://localhost:3000/ramens")
  .then((res) => res.json())
  .then((ramens) => {
    ramens.forEach((ramen) => {
      addRamenToMenu(ramen);
    });
    displayRamenDetails(ramens[0]);
  });

const ramenMenu = document.querySelector("#ramen-menu");

function addRamenToMenu(ramen) {
  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image;
  ramenMenu.appendChild(ramenImage);

  ramenImage.addEventListener("click", () => {
    displayRamenDetails(ramen);
  });
}

const newRamenForm = document.querySelector('#new-ramen');
newRamenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newImageElement = document.createElement("img");
newImageElement.src = newImageInput;
ramenMenu.appendChild(newImageElement);
});
//yeni bi image yuklemis olduk

/*const newNameValue = document.querySelector('new-name').value
  const newRestaurantValue = document.querySelector('new-restaurant').value
  const newImageValue = document.querySelector("#new-image").value;
  const newRatingValue = document.querySelector('new-rating').value
  const newCommentValue= document.querySelector('new-comment').value
  
  const newRamen = { 
    name: newNameValue,
    restaurant: newRestaurantValue,
    image: newImageValue,
    rating: Number(newRatingValue),
    comment: newCommentValue
  }
  addRamenToMenu(newRamen)
*/