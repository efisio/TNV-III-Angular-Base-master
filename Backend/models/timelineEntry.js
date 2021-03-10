'use strict';

module.exports = (sequelize, DataType) => {
    let TimelineEntry = sequelize.define('TimelineEntry', {
    // id missing because Sequelize adds it by default
    countryCode: DataType.STRING(2),
    date: DataType.DATE,
    updatedAt: DataType.STRING(26),
    death: DataType.INTEGER(12),
    confirmed: DataType.INTEGER(12),
    recovered: DataType.INTEGER(12),
    new_confirmed: DataType.INTEGER(12),
    new_recovered: DataType.INTEGER(12),
    new_deaths: DataType.INTEGER(12),
    active: DataType.INTEGER(12),

    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'timeline'
    });

    // Association to other models (foreign keys)
    TimelineEntry.associate = function (models) {

    };

    return TimelineEntry;
};

