import Navbar from '../components/Navbar.mjs'

const data = {
    style: {
        container: `
            padding: 2em;
        `
    }
}

const template = `
    <div class="container-fluid" style="${ data.style.container }">
        ${ Navbar }
    </div>
`

export default template
