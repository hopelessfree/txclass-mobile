module.exports = {
	apps: [
		{
			name: 'txclass-mobile',
			script: './server/index.js',
			env: {
				COMMON_VARIABLE: 'true'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	],

	deploy: {
		production: {
			user: 'root',
			host: '47.96.134.225',
			ref: 'origin/master',
			repo: 'https://github.com/hopelessfree/txclass-mobile.git',
			path: '/www/txclass-mobile/production',
			ssh_options: "StrictHostKeyChecking=no",
			'pre-deploy': 'git fetch --all',
			'post-deploy': 'yarn && yarn build && yarn start && pm2 startOrRestart deploy.config.js --env production'
		}
	}
}