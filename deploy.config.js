module.exports = {
	app: [
		{
			name: 'txclass-mobile',
			script: 'server/index.js',
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
			password: 'Nothing0914.',
			host: '47.96.134.225',
			ref: 'origin/master',
			repo: 'https://github.com/hopelessfree/txclass-mobile.git',
			path: '/www/txclass-mobile/production',
			'pre-deploy': 'git fetch --all',
			'post-deploy': 'npm install && npm run build && npm start && pm2 startOrRestart deploy.config.js --env production'
		}
	}
}