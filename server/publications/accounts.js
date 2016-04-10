import {Meteor} from 'meteor/meteor';

export default function() {
	Meteor.publish('users.current', () => {
		return Meteor.users.find(this.userId);
	});
}