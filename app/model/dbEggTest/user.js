'use strict';
module.exports = app => {
    const { STRING, BIGINT, INTEGER } = app.Sequelize
    const user = app.dbEggTest.define('user', {
        id: {
            type: INTEGER(11),
            primaryKey: true,
        },
        username: STRING(100),
        email: STRING(254),
        createdTime: INTEGER(11),
        phone: STRING(20),
    }, {
        freezeTableName: true,
        tableName: 'user',
        timestamps: false,
        underscored: true
    })
    return user;
}