export default {
	// Import check to check the values
	register({LocalState, Accounts, FlowRouter}, email, password, confirmPassword) {
		console.log(email, password, confirmPassword);
		if(password.length < 8) {
			return LocalState.set('REGISTER_ERROR', 'Password must be more than 8 characters');
		}
		if(password !== confirmPassword) {
			return LocalState.set('REGISTER_ERROR', 'Passwords do not match');
		}
		const options = {
			email,
			password
		};
		Accounts.createUser(options, () => {
			FlowRouter.go('/');
		});
		LocalState.set('REGISTER_ERROR', null);
	}
}
