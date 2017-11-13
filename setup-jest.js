const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';

/*

// This code is from the enzyme documentation

const { jsdom } = require('jsdom');

global.document = jsdom(documentHTML);
global.window = document.defaultView;
global.navigator = {
    userAgent: 'node.js',
};

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src).filter(
        prop => typeof target[prop] === 'undefined').reduce(
            (result, prop) => ({
                ...result,[prop]: Object.getOwnPropertyDescriptor(src, prop),}), {});
            
    Object.defineProperties(target, props);
}
    
copyProps(document.defaultView, global);

*/

import {jsdom} from 'jsdom';
global.document = jsdom(documentHTML);
global.window = document.parentWindow;
global.navigator = {
    userAgent: 'node.js',
};