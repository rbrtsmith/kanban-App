import './main.css';
import 'core-js/fn/array/find-index';
import React from 'react';
import App from './components/App';

var main = function main() {
    const app = document.createElement('div');

    document.body.appendChild(app);

    React.render(<App />, app);
}

main();