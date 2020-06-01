

// Renders all the dishes
renderList("veg", "vegList", "rmvListBtn");
renderList("fish", "fishList", "rmvListBtn");
renderList("bird", "birdList", "rmvListBtn");
renderList("meat", "meatList", "rmvListBtn");
renderList("misc", "miscList", "rmvListBtn");

// remove button on Archive list
listDishes.addEventListener('click', (event) => {
    let parent = event.target.parentNode;
    let grandParentID = parent.parentNode.classList[0];
    let dish;
    if (event.target.className === "rmvListBtn"){
        dish = event.target.previousSibling.textContent.replace(/ /g, "_");
        console.log();
        // event.target.classList[0];
        if (parent.parentNode.parentNode.id == "listDishes") {
            refreshLocalStorage(grandParentID, dish);
            parent.remove();
        }
    }
    
});