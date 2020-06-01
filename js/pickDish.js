const catButtons = document.querySelectorAll('input[name="dishCategory"]');

let selectedCat;
let weekFood = [];



// adds selected dish to the week list
function clerList(id) {
    document.querySelector(id).innerHTML = "";
}
// creates a <h3> element displaying the category name
function renderCategory(cat) {
    let h3 = document.querySelector('#listCat');
    let category = ["veg", "fish", "bird", "meat", "misc"]
    let writeCat = ["Vegetariskt", "Fisk", "Fågel", "Kött", "Övrigt"]
    i = category.indexOf(cat);
    // h3.className = "listPadding";
    h3.textContent = writeCat[i];


    // let div = document.querySelector('.listWrapper');
    // let h3 = document.createElement('h3');
    // let category = ["veg", "fish", "bird", "meat", "misc"]
    // let writeCat = ["Vegetariskt", "Fisk", "Fågel", "Kött", "Övrigt"]
    // i = category.indexOf(cat);
    // h3.textContent = writeCat[i];

    // div.appendChild(h3);

}




// Runs through radio btn array and add eventlisteners to them all.
Array.from(catButtons).forEach(function(catButtons) {
    catButtons.addEventListener('click', (e) => {
        clerList('#listDishes'); // need to clear previous list before population new list.
        selectedCat = document.querySelector('input[name="dishCategory"]:checked').value;
        renderCategory(selectedCat);
        renderList(selectedCat, "listDishes", "addListBtn"); // rendering all dishes (function in app.js)
    });
});

if (selectedCat != null) {
    
}

// Add dish to week dish list
listDishes.addEventListener('click', (event) => {
    let parent = event.target.parentNode;
    let grandParentID = parent.parentNode.className;
    let dish;
    let weekCat = "weekFood";
    
    if (event.target.className === "addListBtn"){
        dish = event.target.previousSibling.textContent.replace(/ /g, "_");
        weekFood.push(dish); //adding the textcontent of list item to array
        
        if (parent.parentNode.id == "listDishes") {
            appendData(weekCat, dish); // saving dish to local Storage.
            clerList('#weekList'); // need to clear previous list before population new list.
            renderList(weekCat, "weekList", "rmvListBtn"); // rendering all dishes (function in app.js)
        }
    }
    
});




// remove button on Archive list
weekList.addEventListener('click', (event) => {
    let parent = event.target.parentNode;
    let grandParentID = parent.parentNode.className;
    let dish;
    if (event.target.className === "rmvListBtn"){
        dish = event.target.previousSibling.textContent.replace(" ", "_");
        if (parent.parentNode.id == "weekList") {
            refreshLocalStorage("weekFood", dish);
            parent.remove();
        }
    }
    
});


// Render Weeklist if it is avalible
if(localStorage.getItem("weekFood") != null){
    renderList("weekFood", "weekList", "rmvListBtn");
}




/* Säda upp i app.js filen. så att det bara är saker båda sidorna använder. 
renderCategory(cat):  ändra array till object. Lägg den i app.js för global åtkomst.

*/