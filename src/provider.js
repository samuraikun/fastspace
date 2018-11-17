import { h } from 'preact';
import { Provider as PreactProvider } from 'unistore/preact';
import App from './components/app';
import Store from './store';

const Provider = () => (
	<PreactProvider store={Store}>
		<App />
	</PreactProvider>
);

export default Provider;
