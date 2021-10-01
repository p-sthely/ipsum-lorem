const data = {
    style: {
        navbar: `
            font-family: 'Nanum Myeongjo', serif;
            background-color: transparent;
        `,
        navbarBrand: `
            font-size: 1.6em;
        `,
        navbarToggler: `
            border: none;
        `,
        navbarTogglerIcon: `
            font-size: 1.6em;
        `,
        navLink: `
            color: #000;
        `
    },
    title: 'Ipsum Lorem'
}

const template = `
    <nav class="navbar navbar-expand-lg navbar-light" style="${ data.style.navbar }">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html" style="${ data.style.navbarBrand }">${ data.title }</a>
            <button class="navbar-toggler" type="button" style="${ data.style.navbarToggler }" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-three-dots" style="${ data.style.navbarTogglerIcon }"></i>
            </button>
            <div class="offcanvas offcanvas-end" id="navbarSupportedContent">
                <div class="offcanvas-body">
                    <button type="button" class="btn-close text-reset d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html" style="${ data.style.navLink }">Mon travail</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html" style="${ data.style.navLink }">\À propos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html" style="${ data.style.navLink }">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
`

export default template
