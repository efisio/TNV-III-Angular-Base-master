'use strict';

module.exports = (sequelize, DataType) => {
    let EnabledCountryEntry = sequelize.define('EnabledCountryEntry', {
    // id missing because Sequelize adds it by default

    countryCode: DataType.STRING(2),
    countryName: DataType.STRING(20),
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'enabledcountry'
    });

    // Association to other models (foreign keys)
    EnabledCountryEntry.associate = function (models) {

    };

    return EnabledCountryEntry;
};

