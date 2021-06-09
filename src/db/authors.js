const AuthorsModel = (sequelize, DataTypes) => {
	const Class = sequelize.define('class', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		surname: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		avatar: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	});
	return Class;
};

export default AuthorsModel;
