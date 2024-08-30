const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class ChallengeMilestone extends Model {}

ChallengeMilestone.init({
    challengeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Challenges',
            key: 'id'
        }
    },
    milestone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: true
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'ChallengeMilestone'
});

module.exports = ChallengeMilestone;
