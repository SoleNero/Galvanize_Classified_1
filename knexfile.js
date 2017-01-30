// Update with your config settings.
'use strict';
module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: process.env.DATABASE_URL || 'classifiedes_dev',
        }
    },

    test: {
        client: 'pg',
        connection: {
            database: process.env.DATABASE_URL || 'classifiedes_test',
        }
    }

}