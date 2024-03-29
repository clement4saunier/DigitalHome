/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import './styles/global.css';
import './styles/theme.css';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
