import $ from "jquery";
import Vue from "vue";


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

$('p').css('color', 'red');

document.getElementById('button1').onclick = () => {
    "use strict";

    alert('Hej från button');


};


let hello = () => { alert('hello'); };