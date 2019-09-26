import React from 'react';
import { hydrate, render } from 'react-dom';

import './index.css';
import App from './App';

const root = document.getElementById('root')!;
if (root.hasChildNodes()) {
	hydrate(<App />, root);
} else {
	render(<App />, root);
}
