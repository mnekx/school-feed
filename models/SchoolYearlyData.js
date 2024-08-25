const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const School = require('./School');

class SchoolYearlyData extends Model {}

SchoolYearlyData.init({
    schoolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: School,
            key: 'id'
        }
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    malePrimaryStudents: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    femalePrimaryStudents: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    malePreStudents: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    femalePreStudents: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    maleTeachers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    femaleTeachers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    maleOtherStaff: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    femaleOtherStaff: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    malePass: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    femalePass: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'SchoolYearlyData',
    tableName: 'school_yearly_data',
    timestamps: false
});

module.exports = SchoolYearlyData;
