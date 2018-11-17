import { fetchSampleData } from '../../../config/mockApi';

const actions = (store) => ({
	increment: ({ count }) => ({ count: count+1 }),
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

export default actions;
