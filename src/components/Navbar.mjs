const data = {
    style: {
        navbar: `
            background-color: transparent;
        `,
        navbarBrand: `
            font-family: 'Nanum Myeongjo', serif;
            font-size: 1.6em;
        `,
        navbarToggler: `
            border: none;
        `,
        navbarTogglerIcon: `
            font-size: 1.6em;
        `
    },
    title: 'Ipsum Lorem'
}

const template = `
    <nav class="navbar navbar-expand-lg navbar-light" style="${ data.style.navbar }">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="${ data.style.navbarBrand }">${ data.title }</a>
            <button class="navbar-toggler" type="button" style="${ data.style.navbarToggler }" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-three-dots" style="${ data.style.navbarTogglerIcon }"></i>
            </button>
            <div class="offcanvas offcanvas-end" id="navbarSupportedContent">
                <div class="offcanvas-body">
                    <button type="button" class="btn-close text-reset d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
`

export default template
