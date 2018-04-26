module.exports = function(sequelize, DataTypes){
    return sequelize.define('log', {
        discription: DataTypes.STRING,
        result: DataTypes.STRING,
        owner: DataTypes.INTEGER,
        def: DataTypes.STRING
    })
}