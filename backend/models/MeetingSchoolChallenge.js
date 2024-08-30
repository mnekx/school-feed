const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const Meeting = require('./Meeting');
const School = require('./School');
const Challenge = require('./Challenge');

class MeetingSchoolChallenge extends Model {}

MeetingSchoolChallenge.init({
    meetingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Meeting,
            key: 'id'
        }
    },
    schoolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: School,
            key: 'id'
        }
    },
    challengeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Challenge,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'MeetingSchoolChallenge',
    tableName: 'meeting_school_challenges',
    timestamps: false
});

module.exports = MeetingSchoolChallenge;
