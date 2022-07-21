const { isPrd } = require('./env');

module.exports = {
	MYSQL_CONF: {
		base: {
			host: 'localhost',
			dialect: 'mysql',
			pool: {
				max: 5,
				min: 0,
				idle: 10000
			}
		},
		conf: ['txclass', 'root', isPrd ? 'Nothing0914.' : '123456']
	}
};