import s from 'sequelize';
import pg from 'pg';
const Sequelize = s.Sequelize;
const DataTypes = s.DataTypes;
import BlogsModel from './blogs.js';
import AuthorsModel from './authors.js';

const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
	host: PGHOST,
	dialect: 'postgres',
});
const pool = new pg.Pool();
const test = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

const models = {
	Blog: BlogsModel(sequelize, DataTypes),
	Author: AuthorsModel(sequelize, DataTypes),
	sequelize: sequelize,
	pool: pool,
};

models.Module.hasMany(models.Author);

test();

export default models;
