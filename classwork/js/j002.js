/**
 * Created by felix on 2/17/2017.
 */

window.onload = function () {
    //final work calculator,before classes
    var priceArr80 = ['34','24','10','1.5']; // price array
    var price81 = document.getElementById('price81');
    var price82 = document.getElementById('price82');
    var price83 = document.getElementById('price83');
    var price84 = document.getElementById('price84');
    price81.innerHTML = priceArr80[0]; //set price
    price82.innerHTML = priceArr80[1];
    price83.innerHTML = priceArr80[2];
    price84.innerHTML = priceArr80[3];

    var num80 = document.getElementById('num80');
    var num81 = document.getElementById('num81');
    var num82 = document.getElementById('num82');
    var num83 = document.getElementById('num83');
    var item01 = 0;
    var item02 = 0;
    var item03 = 0;
    var item04 = 0;
    num80.innerHTML = item01;
    num81.innerHTML = item02;
    num82.innerHTML = item03;
    num83.innerHTML = item04;
    var subtotal80 = document.getElementById('subtotal80');
    var subtotal81 = document.getElementById('subtotal81');
    var subtotal82 = document.getElementById('subtotal82');
    var subtotal83 = document.getElementById('subtotal83');
    subtotal80.innerHTML = parseInt(price81 * item01);
    var plus80 = document.getElementById('plus80');
    var plus81 = document.getElementById('plus81');
    var plus82 = document.getElementById('plus82');
    var plus83 = document.getElementById('plus83');

    plus80.onclick = function () {
        item01++;
        num80.innerHTML = item01;
        subtotal80.innerHTML = parseInt(price81 * item01);

    };

    // simple calculator
    var Text01 = document.getElementById('text01');
    var Text02 = document.getElementById('text02');
    var Plus01 = document.getElementById('plus01');
    var Result01 = document.getElementById('result01');

    //console.log(Text01.value);
    Plus01.onclick = function () {
        var Num01 = parseFloat(Text01.value);
        var Num02 = parseFloat(Text02.value);
        //noinspection JSValidateTypes
        Result01.innerHTML = Num01 + Num02;
    };

    // switch first tryout. failed.
    var day01 = document.getElementById('day01');
    var getDay = document.getElementById('getDay');
    var result80 = document.getElementById('result80');
    var day;
    getDay.onclick = function () {
        switch (day01.value) {
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
            case 7:
                day = 'Sunday';
                break;
            default:
                day = 'Do you really know what day is it?';
        }
        result80.innerHTML = day;
        console.log(day01.value);
    };

};