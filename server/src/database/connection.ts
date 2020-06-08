import knex from 'knex';
import path from 'path';

const env = process.env.NODE_ENV;

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//DATABASE_URL

const client = env === 'production' ? 'pg' : 'sqlite3';
const strConnection =
  env === 'production'
    ? 'postgres://eagzqdvbsdvdof:f8ecdd900abe6396a757f7df48e9bf3b526d57e1ffad7d2d9cdbdcac61b0178e@ec2-50-17-90-177.compute-1.amazonaws.com:5432/d76t9ff64rgasn'
    : // ? 'postgres://eagzqdvbsdvdof:f8ecdd900abe6396a757f7df48e9bf3b526d57e1ffad7d2d9cdbdcac61b0178e@ec2-50-17-90-177.compute-1.amazonaws.com:5432/d76t9ff64rgasn?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory'
      {
        filename: path.resolve(__dirname, 'database.sqlite'),
      };

const connection = knex({
  client,
  connection: strConnection,
  useNullAsDefault: true,
  // debug: true,
});

export default connection;
