import {ResultInDomKvadrat} from "./libraryFormula.js";
import {ResultInDomPriamougolnika} from "./libraryFormula.js";
import {ResultInDomParalelograma} from "./libraryFormula.js";
import {ResultInDomRomba} from "./libraryFormula.js";
document.getElementById('b1').onclick =showResultInDomKvadrat;
function showResultInDomKvadrat(){
    const a = document.getElementById('dlinaStoroniKvadrata').value;
    const result = ResultInDomKvadrat(a);
    document.getElementById ('ploschadKvadrata').textContent = result;
}
document.getElementById('b2').onclick =showResultInDomPriamougolnika;
function showResultInDomPriamougolnika(){
    const a = document.getElementById('pervayaStoronaPriamougolnika').value;
    const b = document.getElementById('drugayaStoronaPriamougolnika').value;
    const result = ResultInDomPriamougolnika(a,b);
    document.getElementById ('ploschadPriamougolnika').textContent = result;
}
document.getElementById('b3').onclick =showResultInDomParalelograma;
function showResultInDomParalelograma(){
    const a = document.getElementById('dlinaStoronyParalelograma').value;
    const h = document.getElementById ('dlinaVisotyParalelograma').value;
    const result = ResultInDomParalelograma(a,h);
    document.getElementById ('ploschadParalelograma').textContent = result;
}
document.getElementById('b4').onclick =showResultInDomRomba;
function showResultInDomRomba(){
    const a = document.getElementById('dlinaStoronyRomba').value;
    const h = document.getElementById ('dlinaVisotyRomba').value;
    const result = ResultInDomRomba(a,h);
    document.getElementById ('ploschadRomba').textContent = result;
}