'use strict';
const index = require('./index');

function throwException() {
    setTimeout(function() {
        var err = new Error();
        console.log(index.getAsyncException());
    }, 100);    
}

throwException()