import { h, render, Component } from 'preact';

let root;

function init() {
    let App = require('./components/app').default;
    root = render(<App />, document.getElementById('app'), root);
}

if (module.hot) {
    module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
