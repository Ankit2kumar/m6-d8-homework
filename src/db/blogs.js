const BlogsModel = (sequelize, DataTypes) => {
	const Class = sequelize.define('class', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		category: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		title: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		cover: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		read_time_value: {
			type: DataTypes.INTEGER,
		},
		read_time_unit: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	});
	return Class;
};

export default BlogsModel;
