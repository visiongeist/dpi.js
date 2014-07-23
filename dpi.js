/*!
 * dpi.js
 * git://github.com/visiongeist/dpi.js.git
 *
 *
 * Copyright 2014 Damien Antipa
 * Released under the Apache License v2
 * 
 */

(function (global) {

    function read(elem, unit) {
        elem.style.width = '1' + unit;
   
        var val = document.defaultView
            .getComputedStyle(elem, null)
            .getPropertyValue('width');
        
        return parseFloat(val); 
    }
 
    function init() {
        var body = document.getElementsByTagName('body')[0];

        if (body.length === 0) {
            document.addEventListener('DOMContentLoaded', init);    
            return;
        }

        var elem = document.createElement('div');
        body.appendChild(elem);

        global.dpi = read(elem, 'in');
        global.dpcm = read(elem, 'cm');
        
        body.removeChild(elem);
    }

    init();

}(window));