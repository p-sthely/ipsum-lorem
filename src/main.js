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

    switch(pageName) {
        case 'index.html':
            document.querySelector('.navbar-nav a[href="index.html"]').classList.add("border-bottom", "border-dark")
            break
        case 'about.html':
            document.querySelector('.navbar-nav a[href="about.html"]').classList.add("border-bottom", "border-dark")
            break
        case 'contact.html':
            document.querySelector('.navbar-nav a[href="contact.html"]').classList.add("border-bottom", "border-dark")
            break
        default:
            console.log('unknown')
    }
}

