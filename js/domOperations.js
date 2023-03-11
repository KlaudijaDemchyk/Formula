import {ResultInDomKvadrat} from "./libraryFormula.js";
import {ResultInDomPriamougolnika} from "./libraryFormula.js";
import {ResultInDomParalelograma} from "./libraryFormula.js";
import {ResultInDomRomba} from "./libraryFormula.js";
document.getElementById('b1').onclick =showResultInDomKvadrat;
function showResultInDomKvadrat(){
    const squareSide = document.getElementById('dlinaStoroniKvadrata').value;
    const result = ResultInDomKvadrat(squareSide);
    document.getElementById ('ploschadKvadrata').textContent = result;
}
document.getElementById('b2').onclick =showResultInDomPriamougolnika;
function showResultInDomPriamougolnika(){
    const squareSide = document.getElementById('pervayaStoronaPriamougolnika').value;
    const squareSide2 = document.getElementById('drugayaStoronaPriamougolnika').value;
    const result = ResultInDomPriamougolnika(squareSide,squareSide2);
    document.getElementById ('ploschadPriamougolnika').textContent = result;
}
document.getElementById('b3').onclick =showResultInDomParalelograma;
function showResultInDomParalelograma(){
    const squareSide = document.getElementById('dlinaStoronyParalelograma').value;
    const squareHeight = document.getElementById ('dlinaVisotyParalelograma').value;
    const result = ResultInDomParalelograma(squareSide,squareHeight);
    document.getElementById ('ploschadParalelograma').textContent = result;
}
document.getElementById('b4').onclick =showResultInDomRomba;
function showResultInDomRomba(){
    const squareSide = document.getElementById('dlinaStoronyRomba').value;
    const squareHeight = document.getElementById ('dlinaVisotyRomba').value;
    const result = ResultInDomRomba(squareSide,squareHeight);
    document.getElementById ('ploschadRomba').textContent = result;
}