import Navbar from '../components/Navbar.mjs'
import Gallery from '../components/Gallery.mjs'

const data = {
    style: {
        container: `
            padding-top: 2em;
            padding-bottom: 2em;
        `
    }
}

const template = `
    <div id="siteWrapper" class="container-fluid" style="${ data.style.container }">
        ${ Navbar }
        <div class="container-fluid my-5">
            ${ Gallery }
        </div>
    </div>
`

export default template
