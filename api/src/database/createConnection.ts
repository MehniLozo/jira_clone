import { createConnection, Connection } from 'typeorm';

import * as entities from 'entities';

const createDatabaseConnection = async (): Promise<Connection | void> => {
  try {
    const connection = await createConnection({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: Object.values(entities),
      synchronize: true,
    });

    return connection;
  } catch (e) {
    console.log('Error connection');
    console.log(e);
  }
};
console.log('Ran here bro :) ');
export default createDatabaseConnection;
