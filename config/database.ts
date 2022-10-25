import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      // host: env('DATABASE_HOST', '127.0.0.1'),
      // port: env.int('DATABASE_PORT', 3306),
      // database: env('DATABASE_NAME', 'rmw'),
      // user: env('DATABASE_USERNAME', 'root'),
      // password: env('DATABASE_PASSWORD', '12345678'),
    },
    useNullAsDefault: true,
  },
});
