const bluring = document.getElementById('blur');
if (localStorage.length === 0) {
    console.log("newUser");
    bluring.style.cssText = "filter:blur(2px)";
    }
    else {
        console.log("this is not empty")
    }
