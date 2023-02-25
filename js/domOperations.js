import {ResultInDomKvadrat} from "./libraryFormula.js";
import {ResultInDomPriamougolnika} from "./libraryFormula.js";
import {ResultInDomParalelograma} from "./libraryFormula.js";
import {ResultInDomRomba} from "./libraryFormula.js";
document.getElementById('b1').onclick =showResultInDomKvadrat;
function showResultInDomKvadrat(){
    var a = document.getElementById('dlinaStoroniKvadrata').value;
    var result = ResultInDomKvadrat(a);
    document.getElementById ('ploschadKvadrata').textContent = result;
}
document.getElementById('b2').onclick =showResultInDomPriamougolnika;
function showResultInDomPriamougolnika(){
    var a = document.getElementById('pervayaStoronaPriamougolnika').value;
    var b = document.getElementById('drugayaStoronaPriamougolnika').value;
    var result = ResultInDomPriamougolnika(a,b);
    document.getElementById ('ploschadPriamougolnika').textContent = result;
}
document.getElementById('b3').onclick =showResultInDomParalelograma;
function showResultInDomParalelograma(){
    var a = document.getElementById('dlinaStoronyParalelograma').value;
    var h = document.getElementById ('dlinaVisotyParalelograma').value;
    var result = ResultInDomParalelograma(a,h);
    document.getElementById ('ploschadParalelograma').textContent = result;
}
document.getElementById('b4').onclick =showResultInDomRomba;
function showResultInDomRomba(){
    var a = document.getElementById('dlinaStoronyRomba').value;
    var h = document.getElementById ('dlinaVisotyRomba').value;
    var result = ResultInDomRomba(a,h);
    document.getElementById ('ploschadRomba').textContent = result;
}