const data = {
    style: {
        card: `
            border: none;
        `,
        image: `
            height: 575px;
            object-fit: cover;
        `,
        cardBody: `
            font-family: 'Nanum Myeongjo', serif
        `
    }
}

const template = `
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card" style="${ data.style.card }">
            <img src="https://cdn.pixabay.com/photo/2019/11/11/10/16/chair-4617903_1280.jpg" class="card-img-top" alt="..." style="${ data.style.image }">
            <div class="card-body" style="${ data.style.cardBody }">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="${ data.style.card }">
            <img src="https://p0.pxfuel.com/preview/83/110/486/ikea-table-dining-chair.jpg" alt="..." style="${ data.style.image }">
            <div class="card-body" style="${ data.style.cardBody }">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="${ data.style.card }">
            <img src="https://p2.piqsels.com/preview/863/419/712/ipad-ikea-pillow-plaid.jpg" class="card-img-top" alt="..." style="${ data.style.image }">
            <div class="card-body" style="${ data.style.cardBody }">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="${ data.style.card }">
            <img src="https://cdn2.picryl.com/photo/2017/05/22/desk-chair-fauteuil-de-bureau-f7af69-1024.jpg" class="card-img-top" alt="..." style="${ data.style.image }">
            <div class="card-body" style="${ data.style.cardBody }">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
    </div >
`

export default template
