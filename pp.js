var _0x1f6e = ['', "HandwritingCR 2 (Populer)", "HandwritingCR-2.ttf", "Gloria Hallelujah", "GloriaHallelujah-Regular.ttf", 'Zahraaa', "Zahraaa.ttf", "Shadows Into Light", "ShadowsIntoLight-Regular.ttf", "My Handwriting", 'My_handwriting.ttf', "My Hands Are Holding You", 'MyHandsareHoldingYou.ttf', "Convered By Your Grace", 'Convered-By-Your-Grace.ttf', "99% Hand Writting", "99HandWritting.ttf", "And This Happened", "And-This-Happened.ttf", "AS Melanie Handwritting", "ASMelanieHandwritting.ttf", "Edoms Handwritting Normal (Populer)", "Edoms-Handwritting-Normal.ttf", "Kempton Demo Handwritting", "Kempton-Demo-Handwritting.ttf", "Michelle Handwritting (Rekomendasi)", "michellehandwritting.ttf", "Nadeznas Handwritting (Rekomendasi)", "Nadeznas-Handwritting.ttf", "212 Baby Girl (Populer)", "212BabyGirl.otf", "212 Leahlee Sans", '212LeahleeSans.ttf', "Zuey Handwriting (Rekomendasi)", "ZueyHandwriting-Regular.otf", "A Casual", "ACasualHandwrittenPenNoncommercial.ttf", "A Day in September", "ADayinSeptember.otf", "A Little Sunshine", "Alittlesunshine.ttf", "Angelina", "angelina.ttf", "Avenir Condensed Hand (Pensil)", "AvenirCondensedHand.ttf", "Avocados (Populer)", "Avocados.ttf", "Babby Doll (Rekomendasi)", "BabyDoll.ttf", "Battle Of King (Rekomendasi)", 'BattleOfKingsRegular.ttf', "Bray Notes (Populer)", "BrayNotes.ttf", "My Unprofessional Handwriting", "My_Unprofessional_Handwriting.ttf", "Ceker Ampela (Rekomendasi)", 'Ceker-Ampela.ttf', "Ceker Ucus (Populer)", 'Ceker-Ucus.ttf', "Ans Handwrite", "annshandwriting.ttf", "Regular", "HandwritingMain-Regular.ttf", "Luna (Rekomendasi)", "luna.ttf", "Karenina (Populer)", "Karenina-Handwriting.ttf", "PWSchool (Rekomendasi)", "ComingSoon.ttf", "SchoolBoy (Rekomendasi)", "SchoolboySam.otf", 'Ananda', 'kiwischoolhandwritingregular.ttf', "Folio 1 (Populer)", "folio_1.jpg", "Folio 2", "folio_2.jpg", "Buku 1", "buku_1.jpg", "Buku 2", "buku_2.jpg", "Buku 3 (Populer)", "buku_3.jpg", "Buku 4", 'buku_4.jpg', "HVS (Populer)", 'hvs.jpg', "fontIndex", 'getItem', "bookIndex", "assets/", "file", "fonts/", "index", "DOMContentLoaded", "font", 'getElementById', 'selected', "<option value=\"", "\" ", '>', "</option>", "name", "forEach", 'innerHTML', "addEventListener", "book"];
function getCookie(_0x20dbfa) {
  var _0x1a2a06 = _0x20dbfa + '=';
  var _0x447652 = document.cookie.split(';');
  for (var _0x2535a9 = 0x0; _0x2535a9 < _0x447652.length; _0x2535a9++) {
    for (var _0x555097 = _0x447652[_0x2535a9]; " " == _0x555097.charAt(0x0);) {
      _0x555097 = _0x555097.substring(0x1);
    }
    if (0x0 == _0x555097.indexOf(_0x1a2a06)) {
      return _0x555097.substring(_0x1a2a06.length, _0x555097.length);
    }
  }
  return '';
}
let bg;
let font;
let margin;
let txtDate = _0x1f6e[0x0];
let txtName = getCookie('user_name');
let txtFakultas = _0x1f6e[0x0];
let txtKelas = _0x1f6e[0x0];
let txtContent = _0x1f6e[0x0];
let fonts = [{
  'index': 0x0,
  'name': _0x1f6e[0x1],
  'file': _0x1f6e[0x2]
}, {
  'index': 0x1,
  'name': _0x1f6e[0x3],
  'file': _0x1f6e[0x4]
}, {
  'index': 0x2,
  'name': _0x1f6e[0x5],
  'file': _0x1f6e[0x6]
}, {
  'index': 0x3,
  'name': _0x1f6e[0x7],
  'file': _0x1f6e[0x8]
}, {
  'index': 0x4,
  'name': _0x1f6e[0x9],
  'file': _0x1f6e[0xa]
}, {
  'index': 0x5,
  'name': _0x1f6e[0xb],
  'file': _0x1f6e[0xc]
}, {
  'index': 0x6,
  'name': _0x1f6e[0xd],
  'file': _0x1f6e[0xe]
}, {
  'index': 0x7,
  'name': _0x1f6e[0xf],
  'file': _0x1f6e[0x10]
}, {
  'index': 0x8,
  'name': _0x1f6e[0x11],
  'file': _0x1f6e[0x12]
}, {
  'index': 0x9,
  'name': _0x1f6e[0x13],
  'file': _0x1f6e[0x14]
}, {
  'index': 0xa,
  'name': _0x1f6e[0x15],
  'file': _0x1f6e[0x16]
}, {
  'index': 0xb,
  'name': _0x1f6e[0x17],
  'file': _0x1f6e[0x18]
}, {
  'index': 0xc,
  'name': _0x1f6e[0x19],
  'file': _0x1f6e[0x1a]
}, {
  'index': 0xd,
  'name': _0x1f6e[0x1b],
  'file': _0x1f6e[0x1c]
}, {
  'index': 0xe,
  'name': _0x1f6e[0x1d],
  'file': _0x1f6e[0x1e]
}, {
  'index': 0xf,
  'name': _0x1f6e[0x1f],
  'file': _0x1f6e[0x20]
}, {
  'index': 0x10,
  'name': _0x1f6e[0x21],
  'file': _0x1f6e[0x22]
}, {
  'index': 0x11,
  'name': _0x1f6e[0x23],
  'file': _0x1f6e[0x24]
}, {
  'index': 0x12,
  'name': _0x1f6e[0x25],
  'file': _0x1f6e[0x26]
}, {
  'index': 0x13,
  'name': _0x1f6e[0x27],
  'file': _0x1f6e[0x28]
}, {
  'index': 0x14,
  'name': _0x1f6e[0x29],
  'file': _0x1f6e[0x2a]
}, {
  'index': 0x15,
  'name': _0x1f6e[0x2b],
  'file': _0x1f6e[0x2c]
}, {
  'index': 0x16,
  'name': _0x1f6e[0x2d],
  'file': _0x1f6e[0x2e]
}, {
  'index': 0x17,
  'name': _0x1f6e[0x2f],
  'file': _0x1f6e[0x30]
}, {
  'index': 0x18,
  'name': _0x1f6e[0x31],
  'file': _0x1f6e[0x32]
}, {
  'index': 0x19,
  'name': _0x1f6e[0x33],
  'file': _0x1f6e[0x34]
}, {
  'index': 0x1a,
  'name': _0x1f6e[0x35],
  'file': _0x1f6e[0x36]
}, {
  'index': 0x1b,
  'name': _0x1f6e[0x37],
  'file': _0x1f6e[0x38]
}, {
  'index': 0x1c,
  'name': _0x1f6e[0x39],
  'file': _0x1f6e[0x3a]
}, {
  'index': 0x1d,
  'name': _0x1f6e[0x3b],
  'file': _0x1f6e[0x3c]
}, {
  'index': 0x1e,
  'name': _0x1f6e[0x3d],
  'file': _0x1f6e[0x3e]
}, {
  'index': 0x1f,
  'name': _0x1f6e[0x3f],
  'file': _0x1f6e[0x40]
}, {
  'index': 0x20,
  'name': _0x1f6e[0x41],
  'file': _0x1f6e[0x42]
}, {
  'index': 0x21,
  'name': _0x1f6e[0x43],
  'file': _0x1f6e[0x44]
}, {
  'index': 0x22,
  'name': _0x1f6e[0x45],
  'file': _0x1f6e[0x46]
}, {
  'index': 0x23,
  'name': _0x1f6e[0x47],
  'file': _0x1f6e[0x48]
}];
let papers = [{
  'index': 0x0,
  'name': _0x1f6e[0x49],
  'file': _0x1f6e[0x4a]
}, {
  'index': 0x1,
  'name': _0x1f6e[0x4b],
  'file': _0x1f6e[0x4c]
}, {
  'index': 0x2,
  'name': _0x1f6e[0x4d],
  'file': _0x1f6e[0x4e]
}, {
  'index': 0x3,
  'name': _0x1f6e[0x4f],
  'file': _0x1f6e[0x50]
}, {
  'index': 0x4,
  'name': _0x1f6e[0x51],
  'file': _0x1f6e[0x52]
}, {
  'index': 0x5,
  'name': _0x1f6e[0x53],
  'file': _0x1f6e[0x54]
}, {
  'index': 0x6,
  'name': _0x1f6e[0x55],
  'file': _0x1f6e[0x56]
}];
let getFontIndex = () => {
  let _0x4961d0 = localStorage[_0x1f6e[0x58]](_0x1f6e[0x57]);
  return _0x4961d0 ? fonts[_0x4961d0] : fonts[0x0];
};
let getPaperIndex = () => {
  let _0x11ddb = localStorage[_0x1f6e[0x58]](_0x1f6e[0x59]);
  return _0x11ddb ? papers[_0x11ddb] : papers[0x0];
};
function preload() {}
function setup() {
  createCanvas(0x258, 0x37e);
  bg = loadImage(_0x1f6e[0x5a] + getPaperIndex()[_0x1f6e[0x5b]]);
  font = loadFont(_0x1f6e[0x5c] + getFontIndex()[_0x1f6e[0x5b]]);
  textFont(font);
  textSize(0x10);
}
function draw() {
  background(bg);
  if (0x0 === getPaperIndex()[_0x1f6e[0x5d]] || 0x1 === getPaperIndex()[_0x1f6e[0x5d]]) {
    margin = 0x14;
    if (0x1 === getPaperIndex()[_0x1f6e[0x5d]]) {
      fill(0x0, 0x0, 0x0, 0x96);
    } else {
      fill(0x0, 0x0, 0x0, 0xfa);
    }
    translate(margin - 0x0, 0x4 * margin);
    if (txtName && txtKelas && !txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtKelas, 0x0, 0x0);
    } else if (txtName && !txtKelas && txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtFakultas, 0x0, 0x0);
    } else if (!txtName || txtKelas || txtFakultas) {
      if (txtName && txtKelas && txtFakultas) {
        text(txtName, 0x0, -0x28);
        text(txtKelas, 0x0, -0x14);
        text(txtFakultas, 0x0, 0x0);
      }
    } else {
      text(txtName, 0x0, 0x0);
    }
    text(txtDate, 0x1ae, 0x0);
    translate(0x0, margin + 0x7);
    text(txtContent, 0x0, 0x0, 0x244);
  } else if (0x2 === getPaperIndex()[_0x1f6e[0x5d]]) {
    margin = 0x14;
    if (0x2 === getPaperIndex()[_0x1f6e[0x5d]]) {
      fill(0x0, 0x0, 0x0, 0x96);
      textSize(23.8);
    } else {
      fill(0x0, 0x0, 0x0, 0x96);
    }
    translate(margin - 0x0, 0x4 * margin);
    if (txtName && txtKelas && !txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtKelas, 0x0, 0x0);
    } else if (txtName && !txtKelas && txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtFakultas, 0x0, 0x0);
    } else if (!txtName || txtKelas || txtFakultas) {
      if (txtName && txtKelas && txtFakultas) {
        text(txtName, 0x0, -0x28);
        text(txtKelas, 0x0, -0x14);
        text(txtFakultas, 0x0, 0x0);
      }
    } else {
      text(txtName, 0x0, 0x0);
    }
    text(txtDate, 0x172, 0x0);
    translate(0x0, margin + 0x7);
    text(txtContent, 0x20, 0x6, 0x244);
  } else if (0x3 === getPaperIndex()[_0x1f6e[0x5d]]) {
    margin = 0x14;
    if (0x3 === getPaperIndex()[_0x1f6e[0x5d]]) {
      fill(0x0, 0x0, 0x0, 0x96);
      textSize(21.2);
    } else {
      fill(0x0, 0x0, 0x0, 0x96);
    }
    translate(margin - 0x0, 0x6 * margin);
    if (txtName && txtKelas && !txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtKelas, 0x0, 0x0);
    } else if (txtName && !txtKelas && txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtFakultas, 0x0, 0x0);
    } else if (!txtName || txtKelas || txtFakultas) {
      if (txtName && txtKelas && txtFakultas) {
        text(txtName, 0x0, -0x28);
        text(txtKelas, 0x0, -0x14);
        text(txtFakultas, 0x0, 0x0);
      }
    } else {
      text(txtName, 0x0, 0x0);
    }
    text(txtDate, 0x18b, 0xa);
    translate(0x0, margin + 0x7);
    text(txtContent, 0x3c, 0xb, 0x244);
  } else if (0x4 === getPaperIndex()[_0x1f6e[0x5d]]) {
    margin = 0x14;
    if (0x4 === getPaperIndex()[_0x1f6e[0x5d]]) {
      fill(0x0, 0x0, 0x0, 0x96);
      textSize(22.1);
    } else {
      fill(0x0, 0x0, 0x0, 0x96);
    }
    translate(margin + 0x1e, 0x6 * margin);
    if (txtName && txtKelas && !txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtKelas, 0x0, 0x0);
    } else if (txtName && !txtKelas && txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtFakultas, 0x0, 0x0);
    } else if (!txtName || txtKelas || txtFakultas) {
      if (txtName && txtKelas && txtFakultas) {
        text(txtName, 0x0, -0x28);
        text(txtKelas, 0x0, -0x14);
        text(txtFakultas, 0x0, 0x0);
      }
    } else {
      text(txtName, 0x0, 0x0);
    }
    text(txtDate, 0x140, 0x2);
    translate(0x0, margin + 0x7);
    text(txtContent, 0x3b, 0x6, 0x244);
  } else if (0x5 === getPaperIndex()[_0x1f6e[0x5d]]) {
    margin = 0x14;
    if (0x5 === getPaperIndex()[_0x1f6e[0x5d]]) {
      fill(0x0, 0x0, 0x0, 0x96);
      textSize(0x15);
    } else {
      fill(0x0, 0x0, 0x0, 0x96);
    }
    translate(margin + 0x1e, 5.5 * margin);
    if (txtName && txtKelas && !txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtKelas, 0x0, 0x0);
    } else if (txtName && !txtKelas && txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtFakultas, 0x0, 0x0);
    } else if (!txtName || txtKelas || txtFakultas) {
      if (txtName && txtKelas && txtFakultas) {
        text(txtName, 0x0, -0x28);
        text(txtKelas, 0x0, -0x14);
        text(txtFakultas, 0x0, 0x0);
      }
    } else {
      text(txtName, 0x0, 0x0);
    }
    text(txtDate, 0x15e, -0x2);
    translate(0x0, margin + 0x7);
    text(txtContent, 0x2a, 0x3, 0x244);
  } else if (0x6 === getPaperIndex()[_0x1f6e[0x5d]]) {
    margin = 0x14;
    if (0x6 === getPaperIndex()[_0x1f6e[0x5d]]) {
      fill(0x0, 0x0, 0x0, 0x96);
      textSize(0x15);
    } else {
      fill(0x0, 0x0, 0x0, 0x96);
    }
    translate(margin + 0x28, 6.1 * margin);
    if (txtName && txtKelas && !txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtKelas, 0x0, 0x0);
    } else if (txtName && !txtKelas && txtFakultas) {
      text(txtName, 0x0, -0x14);
      text(txtFakultas, 0x0, 0x0);
    } else if (!txtName || txtKelas || txtFakultas) {
      if (txtName && txtKelas && txtFakultas) {
        text(txtName, 0x0, -0x28);
        text(txtKelas, 0x0, -0x14);
        text(txtFakultas, 0x0, 0x0);
      }
    } else {
      text(txtName, 0x0, 0x0);
    }
    text(txtDate, 0x122, -0x2);
    translate(0x0, margin + 0x7);
    text(txtContent, 0x14, 0x3, 0x244);
  }
}
document[_0x1f6e[0x69]](_0x1f6e[0x5e], _0x1274c6 => {
  let _0x1ee442 = document[_0x1f6e[0x60]](_0x1f6e[0x5f]);
  let _0x191498 = _0x1f6e[0x0];
  fonts[_0x1f6e[0x67]]((_0x1401de, _0xfc56fb) => {
    _0x191498 += ((_0x5458c4, _0x2f4ad3) => {
      let _0x91f7a2 = _0x5458c4 == getFontIndex()[_0x1f6e[0x5d]] ? _0x1f6e[0x61] : _0x1f6e[0x0];
      return '' + _0x1f6e[0x62] + _0x5458c4 + _0x1f6e[0x63] + _0x91f7a2 + _0x1f6e[0x64] + _0x2f4ad3 + _0x1f6e[0x65];
    })(_0xfc56fb, _0x1401de[_0x1f6e[0x66]]);
  });
  _0x1ee442[_0x1f6e[0x68]] = _0x191498;
});
document[_0x1f6e[0x69]](_0x1f6e[0x5e], _0x5e2994 => {
  let _0x2f197b = document[_0x1f6e[0x60]](_0x1f6e[0x6a]);
  let _0x3f7c56 = _0x1f6e[0x0];
  papers[_0x1f6e[0x67]]((_0x147ed0, _0x319c3e) => {
    _0x3f7c56 += ((_0x187b6b, _0x1f3a5e) => {
      let _0x2110df = _0x187b6b == getPaperIndex()[_0x1f6e[0x5d]] ? _0x1f6e[0x61] : _0x1f6e[0x0];
      return '' + _0x1f6e[0x62] + _0x187b6b + _0x1f6e[0x63] + _0x2110df + _0x1f6e[0x64] + _0x1f3a5e + _0x1f6e[0x65];
    })(_0x319c3e, _0x147ed0[_0x1f6e[0x66]]);
  });
  _0x2f197b[_0x1f6e[0x68]] = _0x3f7c56;
});
var _0xea48 = ['a', "createElement", "download", "href", "toDataURL", "createEvent", 'MouseEvents', "click", 'initMouseEvent', 'dispatchEvent', "fireEvent", 'onclick', 'defaultCanvas0', "getElementById", "devicePixelRatio", 'slice', 'height', "getPropertyValue", 'width', "setAttribute"];
function downloadCanvas(_0x332ed9, _0x218f75) {
  var _0x553920;
  var _0x1d0eb2 = document[_0xea48[0x1]](_0xea48[0x0]);
  _0x1d0eb2[_0xea48[0x2]] = _0x218f75;
  _0x1d0eb2[_0xea48[0x3]] = _0x332ed9[_0xea48[0x4]]();
  if (document[_0xea48[0x5]]) {
    (_0x553920 = document[_0xea48[0x5]](_0xea48[0x6]))[_0xea48[0x8]](_0xea48[0x7], true, true, window, 0x0, 0x0, 0x0, 0x0, 0x0, false, false, false, false, 0x0, null);
    _0x1d0eb2[_0xea48[0x9]](_0x553920);
  } else if (_0x1d0eb2[_0xea48[0xa]]) {
    _0x1d0eb2[_0xea48[0xa]](_0xea48[0xb]);
  }
}
function fix_dpi() {
  let _0x435d1b = document[_0xea48[0xd]](_0xea48[0xc]);
  let _0x5dae02 = window[_0xea48[0xe]];
  let _0xf91457 = {
    'height': function () {
      return +getComputedStyle(_0x435d1b)[_0xea48[0x11]](_0xea48[0x10])[_0xea48[0xf]](0x0, -0x2);
    },
    'width': function () {
      return +getComputedStyle(_0x435d1b)[_0xea48[0x11]](_0xea48[0x12])[_0xea48[0xf]](0x0, -0x2);
    }
  };
  _0x435d1b[_0xea48[0x13]](_0xea48[0x12], _0xf91457[_0xea48[0x12]]() * _0x5dae02);
  _0x435d1b[_0xea48[0x13]](_0xea48[0x10], _0xf91457[_0xea48[0x10]]() * _0x5dae02);
}
var _0xf079 = ['', "val", "#date", "#name", "#kelas", '#content', '/', 'split', "Minggu", "Senin", "Selasa", 'Rabu', "Kamis", "Jumat", 'Sabtu', "changeDate", "getDay", ", ", 'on', "dd/mm/yyyy", "linked", 'id', "datepicker", "#detpiker input"];
function eraseText() {
  $(_0xf079[0x2])[_0xf079[0x1]](_0xf079[0x0]);
  $(_0xf079[0x3])[_0xf079[0x1]](_0xf079[0x0]);
  $(_0xf079[0x4])[_0xf079[0x1]](_0xf079[0x0]);
  $(_0xf079[0x5])[_0xf079[0x1]](_0xf079[0x0]);
  $("#fakultas").val('');
  txtDate = _0xf079[0x0];
  txtName = _0xf079[0x0];
  txtFakultas = _0xf079[0x0];
  txtKelas = _0xf079[0x0];
  txtContent = _0xf079[0x0];
}
function parseDate(_0x4a9d34) {
  let _0x3fdd28 = _0x4a9d34[_0xf079[0x7]](_0xf079[0x6]);
  return new Date(_0x3fdd28[0x2], _0x3fdd28[0x1] - 0x1, _0x3fdd28[0x0]);
}
function getName(_0x18f703) {
  return 0x0 == _0x18f703 ? _0xf079[0x8] : 0x1 == _0x18f703 ? _0xf079[0x9] : 0x2 == _0x18f703 ? _0xf079[0xa] : 0x3 == _0x18f703 ? _0xf079[0xb] : 0x4 == _0x18f703 ? _0xf079[0xc] : 0x5 == _0x18f703 ? _0xf079[0xd] : _0xf079[0xe];
}
$(_0xf079[0x17])[_0xf079[0x16]]({
  'format': _0xf079[0x13],
  'todayBtn': _0xf079[0x14],
  'language': _0xf079[0x15],
  'autoclose': true
})[_0xf079[0x12]](_0xf079[0xf], function (_0xe715e0) {
  const _0x2f274f = parseDate($(this)[_0xf079[0x1]]());
  txtDate = (0x0 == _0x2f274f[_0xf079[0x10]]() ? _0xf079[0x8] : 0x1 == _0x2f274f[_0xf079[0x10]]() ? _0xf079[0x9] : 0x2 == _0x2f274f[_0xf079[0x10]]() ? _0xf079[0xa] : 0x3 == _0x2f274f[_0xf079[0x10]]() ? _0xf079[0xb] : 0x4 == _0x2f274f[_0xf079[0x10]]() ? _0xf079[0xc] : 0x5 == _0x2f274f[_0xf079[0x10]]() ? _0xf079[0xd] : _0xf079[0xe]) + _0xf079[0x11] + $(this)[_0xf079[0x1]]();
});