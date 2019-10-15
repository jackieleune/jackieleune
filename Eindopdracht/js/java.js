//Code van Rowin - Als je een andere structuur aan wilt houden zoals: slordig //

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//Code van Rowin//
//Filter opties//
//Sectie die je wilt triggeren//
var section = document.getElementsByClassName('filter')[0]; 
//Knop voor eventlistener//
var button = document.getElementsByClassName('Filterknop')[0];

//Code van Rowin//
//Filter functie//
//Functie toggle en sectie//
function Toggle() {
    section.classlist.toggle('filter-activate');
}

//Code van Rowin//
//Eventlistener op button//
button.addEventListener('click', Toggle);