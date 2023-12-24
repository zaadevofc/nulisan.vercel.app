let docId = (id) => document.getElementById(id)

let img, fonts, texts,
    Rotate = 0.0,
    Leading = 13.7,
    tX = 66,
    h = 13, w = 500,
    tY = 82;

docId('Rotate').addEventListener('keyup', (e) => {
    Rotate = e.target.value;
})
docId('Leading').addEventListener('keyup', (e) => {
    Leading = e.target.value;
})
docId('tX').addEventListener('keyup', (e) => {
    tX = e.target.value;
})
docId('tY').addEventListener('keyup', (e) => {
    tY = e.target.value;
})
docId('w').addEventListener('keyup', (e) => {
    w = e.target.value;
})
docId('h').addEventListener('keyup', (e) => {
    h = parseFloat(e.target.value);
})

docId('opsi-kertas').addEventListener('change', (e) => {
    img = loadImage(e.target.value);
})

docId('opsi-fonts').addEventListener('change', (e) => {
    fonts = loadFont(e.target.value);
})

docId('inputs-text').addEventListener('keypress', (e) => {
    texts = e.target.value;
    // console.log(e.target.value.split('\n'));
})

let storey = []
let storez = []
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        storey.push([tX, tY, Rotate, h, Leading])
        storez.push(`${[tX, tY, Rotate, h, Leading].join(' ')}\n`)
        docId('hasil').innerText = docId('opsi-kertas').value + '\n' + storez
    }
});

docId('simpan').addEventListener('click', (e) => {
    let localz = localStorage.getItem('dataz') || false;
    let push = [
        ...JSON.parse(localz) || [],
        {
            kertas: docId('opsi-kertas').value,
            fonts: docId('opsi-fonts').value,
            width: 500,
            height: 688,
            // x, y, rotate, size, leading
            utilitas: storey
        }
    ]
    localStorage.setItem('dataz', JSON.stringify(push))
    docId('hasil').innerText = JSON.stringify(push, null, 6)
})

let parseKertas = (kertas) => (docId('opsi-kertas').value).match(kertas)

function preload() {
    img = loadImage(docId('opsi-kertas').value)
    fonts = loadFont(docId('opsi-fonts').value)
}


function setup() {
    createCanvas(500, 688, P2D, document.querySelector('canvas'));

    textFont(fonts);
}

let config = [
    {
        kertas: "/assets/folio/folio-1.jpg",
        fonts: "/assets/fonts/handwriting/HandwritingCR-2.ttf",
        width: 500,
        height: 688,
        utilitas: [
            [52, 80, 0.011, 11, 13.7],
            [52, 79, 0.011, 11, 13.7],
            [52, 78, 0.01, 11, 13.7],
            [52, 77, 0.01, 11, 13.7],
            [52, 75, 0.01, 10.8, 13.7],
            [52, 74, 0.01, 10.8, 13.7],
            [52, 73, 0.01, 10.8, 13.7],
            [53, 72, 0.008, 10.8, 13.7],
            [52, 71.5, 0.007, 10.8, 13.7],
            [52, 71, 0.007, 10.8, 13.7],
            [51, 70, 0.007, 10.8, 13.7],
            [50, 69, 0.005, 10.8, 13.7],
            [50, 69, 0.005, 10.8, 13.7],
            [50, 68, 0.004, 10.8, 13.7],
            [49, 68, 0.002, 10.8, 13.7],
            [49, 68, 0.002, 10.8, 13.7],
            [48, 67, 0.002, 10.8, 13.7],
            [48, 66, 0.003, 10.8, 13.7],
            [48, 66, 0.001, 10.8, 13.7],
            [48, 66, 0.001, 10.8, 13.7],
            [48, 65, 0.0018, 10.8, 13.7],
            [48, 65, 0.0018, 10.8, 13.7],
            [48, 65, 0.0018, 10.8, 13.7],
            [48, 64, 0.0018, 10.8, 13.7],
            [48, 64, 0.001, 10.8, 13.7],
            [48, 64, 0.00, 10.8, 13.7],
            [45, 64, -0.002, 10.8, 13.7],
            [45, 64, -0.002, 10.8, 13.7],
            [45, 64, -0.002, 10.8, 13.7],
            [45, 64, -0.002, 10.8, 13.7],
            [45, 64, -0.002, 10.8, 13.7],
            [45, 64, -0.003, 10.8, 13.7],
            [45, 64, -0.003, 10.8, 13.7],
            [45, 63, -0.003, 10.8, 13.7],
            [43, 63.8, -0.004, 10.8, 13.7],
            [40, 80, -0.009, 10.8, 13.7],
            [40, 80, -0.009, 10.8, 13.7],
            [40, 80, -0.009, 10.8, 13.7],
            [40, 80, -0.01, 10.8, 13.7],
        ],
    },
];

let findAssets = (q) => config.find(x => x.kertas.match(q) || x.fonts.match(q))

function draw() {
    background(img);
    // let margin = 20;
    // textSize(h);
    // rotate(Rotate || -0.0);
    // textLeading(parseFloat(Leading));
    // translate(tX || 51, tY || 87);
    // x, y, rotate, size, leading
    // textLeading(parseFloat(Leading));
    
    
    if (findAssets('folio-1')) {
        let util = findAssets('folio-1').utilitas;
        
        fill(0, 0, 0, 200);
        texts?.split('\n')?.forEach((x, i) => {
            translate(util[i][0], util[i][1]);
            rotate(util[i][2]);
            textSize(util[i][3]);
            text(x, 0, (i * 10 + 20), 390, 520);
        });
    }
}