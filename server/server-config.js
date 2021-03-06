const path = require('path');

module.exports = {
	// serwer www
	httpServer: {
		port: process.env.PORT || 3000,
		wwwRoot: path.join(__dirname, '../client')
	},
	database: {
		connectionString: process.env.DATABASE_URL || 'pg://postgres:postgres@localhost:5432/gabinet?stringtype=unspecified'
	},
	jsonwebtoken: {
		secret: 'sekretne_haslo_przechowac_w_config'
	}
};
