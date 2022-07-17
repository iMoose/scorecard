import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		dotfiles: true,
	},
	() => {
		console.log('Deploy completed');
	}
);
