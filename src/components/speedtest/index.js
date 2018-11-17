import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { fetchSampleData } from './mockApi';

let actions = store => ({
	increment(state) {
		return { count: state.count+1 };
	},
	increment2: ({ count }) => ({ count: count+1 }),
	incrementAndLog: ({ count }, event) => {
		console.info(event);
		return { count: count+1 };
	},
	async getUsers(state) {
		let res = await fetchSampleData();
		return { users: res };
	},
	incrementAsync(state) {
		setTimeout( () => {
			store.setState({ count: state.count+1 });
		}, 100);
	}
});

class Speedtest extends Component {
	state = {
		isLoading: false
	}

	render() {
		const { count, increment } = this.props;
		return (
			<div>
				<p>Count: {count}</p>
				<button onClick={increment}>get username</button>
			</div>
		);
	}
}

export default connect('count', actions)(Speedtest);
