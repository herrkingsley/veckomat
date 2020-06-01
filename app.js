console.log(localStorage);
// declaring some variables
const listDishes = document.querySelector('#listDishes');
const weekDishes = document.querySelector('#weekList');
const form = document.querySelector('#formCategory');
let menuOpen = false;

function clickMenu(){
    let menu = document.querySelector('#dropMenu');
    if (menuOpen != true) { 
    menu.style.cssText = "height: auto";
    menuOpen = true;
    } else {
        menuOpen = false;
        menu.style.cssText = "height: 0px";
    }
}



/* ---- Sending data ------ */

// function fires when button in form is clicked
function sendDish(event) {
    if(document.querySelector('input[name="dishCategory"]:checked') === null) {
        // alert("Du måste välja en kategori");
        document.querySelector('#valueDish').value = "";
        document.querySelector('#valueDish').style.border = "2px solid tomato";
        document.querySelector('#valueDish').placeholder = "Du måste välja en kategori";
        
        event.preventDefault();
    } else{
        const category = document.querySelector('input[name="dishCategory"]:checked').value;
        let dish = document.querySelector('#valueDish').value;
        console.log(category);
        dish = dish.toLowerCase(); // converts to lowercase so we can get better nicer layout
        dish = dish.replace(/ /g, "_"); // spaces between words becomes separet array items, thats why we need a symbol to connect them.
        appendData(category, dish);
    }
}

// appends new data to localstorage key
function appendData(key, data){ 
    let old = localStorage.getItem(key);
    if(old === null) {
        old = "";
    } else {
        old = `${old} `;
    }
    localStorage.setItem(key, `${old}${data}`);
}

/* ---- Retreiving data ------ */

// converting category string to an array
function getDishList(cat) { 
    var dishStr = localStorage.getItem(cat);
    if(dishStr != null) {
        dishStr = dishStr.split(" ");
        return dishStr;
    } 
    else {
        dishStr = [];
    }

    return dishStr;

}

function capFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// populating DOM categories with list items
function renderList(cat, id, btnClass) {
   const array = getDishList(cat);


   array.forEach(element => {
        let li = document.createElement('li');
        let dish = document.createElement('span');
        let btn = document.createElement('span');
        let text = capFirst(element)
        btn.className = btnClass;
        dish.className = 'dishDesc';
        let ul = document.querySelector(`#${id}`);
        ul.className = `${cat} listContainer`;
        ul.style.display = "block";
        
        
        
        dish.textContent = text.replace(/_/g, " ");
        li.appendChild(dish);
        li.appendChild(btn);
        ul.appendChild(li);

   });
}

  

// storing the updated list to local storage
function refreshLocalStorage(cat, dish) {
    const array = getDishList(cat); 
    let x = array.indexOf(dish);
    array.splice(x, 1); // removes the dish from array
    aStr = array.join(" "); 
    if (aStr === "") {
        localStorage.removeItem(cat);
    }else {
        localStorage.setItem(cat, aStr);
    }

}






/******************************************************************** 
*                                                                   *
*                    Code for frontpage                             *
*                                                                   *  
********************************************************************/

