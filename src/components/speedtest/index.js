import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from './actions';

class Speedtest extends Component {
	state = {
		isLoading: false
	}

	render() {
		const { count, increment, users, getUsers } = this.props;
		return (
			<div>
				<p>Count: {count}</p>
				{users.length > 0 && users.map(user => (
					<p>Name: {user.name}</p>
				))}
				<button onClick={getUsers}>Display Usernames</button>
				<button onClick={increment}>Increment</button>
			</div>
		);
	}
}

export default connect('count,users', actions)(Speedtest);
