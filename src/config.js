import dotenv from "dotenv";
dotenv.config();

export const config = {
  client: "mysql2",
  connection: {
    host: process.env.HOST,
    user: process.env.DBUSER,

    database: process.env.DB,
  },
};

// export const config = {
// 	client: 'sqlite3',
// 	connection: { filename: './js6/mydb.sqlite' },
// 	useNullAsDefault: true,
// }
