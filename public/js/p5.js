let inject = document.getElementById('nulis');
let docId = (id) => document.getElementById(id)

let eChange = (id, cb) => docId(id).addEventListener('change', e => (cb)(e.target.value))
let eKeyUp = (id, cb) => docId(id).addEventListener('keyup', e => (cb)(e.target.value))

let w = 20 * 30, h = 20 * 40 + 94;
let img, fonts, tinta;
let rowNama, rowKelas, rowMapel, rowIsi;

eChange('opsi-kertas', val => { img = loadImage(val) })
eChange('opsi-fonts', val => { fonts = loadFont(val) })
eChange('opsi-tinta', val => { tinta = color(`${val}`) })

eKeyUp('row-nama', val => { rowNama = val })
eKeyUp('row-kelas', val => { rowKelas = val })
eKeyUp('row-mapel', val => { rowMapel = val })

function setup() {
    img = loadImage(docId('opsi-kertas').value)
    fonts = loadFont(docId('opsi-fonts').value)
    tinta = color(`${docId('opsi-tinta').value}`)
    createCanvas(w, h, P2D, inject);
    textFont(fonts);
}

function draw() {
    background(img);
    textSize(16);
    fill(tinta);

    translate(28, 80);
    text(rowNama, 0, 0);
    text(rowMapel, 450, 0);

    translate(0, 27);
    text('web akan segera di update~', 0, 0, 580);
}