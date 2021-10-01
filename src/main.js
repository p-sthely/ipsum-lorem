/*
* when the document is fully loaded
*/
window.onload = () => {
    console.log('Message from src/main.js : hello!')

    /*
    * define the nav-item to underline
    */
    // store the current page filename
    let splitLocationHref = window.location.href.split('/')
    pageName = splitLocationHref[splitLocationHref.length - 1]

    document.querySelector('.navbar-nav a[href="' + pageName + '"]').classList.add("active")
}

