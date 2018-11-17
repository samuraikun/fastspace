import { h } from 'preact';
import style from './style';
import Speedtest from '../../components/speedtest';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Speedtest />
	</div>
);

export default Home;
