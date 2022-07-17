import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'git@github.com:iMoose/scorecard.git',
		user: {
			name: 'Imas Neupane',
			email: 'imas68@outlook.com',
		},
		dotfiles: true,
	},
	() => {
		console.log('Deploy completed');
	}
);
