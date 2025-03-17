const ramens = [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Gyukotsu", image: "images/gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Kojiro", image: "images/kojiro.jpg", rating: 6, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Naruto", image: "images/naruto.jpg", rating: 8.5, comment: "Greatest ramen i've tasted so far." },
    { id: 4, name: "Nirvana Ramen", restaurant: "Nirvana", image: "images/nirvana.jpg", rating: 4, comment: "Authentic Japanese ramen!" },
    { id: 5, name: "Shoyu Ramen", restaurant: "Shoyu", image: "images/shoyu.jpg", rating: 2, comment: "Not my favorite." },
];
// displayRamens() - Displays all ramen images in ramen-menu(html)
function displayRamens() {
    const myNode = document.getElementById("ramen-menu");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    let i;
    for (i = 0; i < ramens.length; i++) {
        str = '<img src="' + ramens[i].image + '" alt="' + ramens[i].name + '" onclick="handleClick(' + i + ')">'
        document.getElementById("ramen-menu").innerHTML += str

    }
    if (ramens.length > 0) {
        handleClick(0)
    }
}

//handleClick() - Shows ramen details when an img is clicked
function handleClick(index) {
    const ramen = ramens[index];
    document.getElementById("mainImage").src = ramen.image;
    document.getElementById("ramenName").textContent = ramen.name;
    document.getElementById("ramenRestaurant").textContent = ramen.restaurant;
    document.getElementById("ramenRating").textContent = ramen.rating;
    document.getElementById("ramenComment").textContent = ramen.comment;
}
//addSubmitListener() - Adds new ramen when entered in a form
function addSubmitListener() {
    document.getElementById("ramen-form").addEventListener("submit", function (event) {
        event.preventDefault(); //prevents the page from refreshing

        //obtains the form values
        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        if (!name === "" || !restaurant === "" || !image === "" || !rating === "" || !comment === "") {
            alert("Please fill all fields");
            return;
        }
        
        ramens.push({ name, restaurant, image, rating: parseInt(rating), comment }); //Adds new ramen to the ramens array
        
        displayRamens(); //Refreshes the ramen menu
        
        const newRamen = { name, restaurant, image, rating: parseInt(rating), comment }; //Creates a new ramen object
        
        ramens.push(newRamen); //Adds a new ramen to array
         
        addRamenToMenu(newRamen, ramens.length - 1); //Adds a new ramen img to the menu
        
        handleClick(ramens.length - 1); //Displays all newly added ramen details
        
        document.getElementById("ramen-form").reset(); //Clears form fields
    });
}

//initialization
function main() {
    displayRamens();
    addSubmitListener();
}
//Ensures DOM content is loaded b4 running main()
document.addEventListener("DOMContentLoaded", main);
