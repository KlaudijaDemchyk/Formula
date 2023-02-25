import {ResultInDomKvadrat} from "./libraryFormula";
import {ResultInDomPriamougolnika} from "./libraryFormula";
import {ResultInDomParalelograma} from "./libraryFormula";
import {ResultInDomRomba} from "./libraryFormula";
function showResultInDomKvadrat(){
    var a = document.getElementById('dlinaStoroniKvadrata').value;
    var result = ResultInDomKvadrat(a);
    document.getElementById ('ploschadKvadrata').textContent = result;
 }
function showResultInDomPriamougolnika(){
    var a = document.getElementById('pervayaStoronaPriamougolnik').value;
    var b = document.getElementById('drugayaStoronaPriamougolnika').value;
    var result = ResultInDomPriamougolnika(a,b);
    document.getElementById ('ploschadPriamougolnika').textContent = result;
}
function showResultInDomParalelograma(){
    var a = document.getElementById('dlinaStoronyParalelograma').value;
    var h = document.getElementById ('dlinaVisotyParalelograma').value;
    var result = ResultInDomParalelograma(a,h);
    document.getElementById ('ploschadParalelograma').textContent = result;
}
function showResultInDomRomba(){
    var a = document.getElementById('dlinaStoronyRomba').value;
    var h = document.getElementById ('dlinaVisotyRomba').value;
    var result = ResultInDomRomba(a,h);
    document.getElementById ('ploschadRomba').textContent = result;
}