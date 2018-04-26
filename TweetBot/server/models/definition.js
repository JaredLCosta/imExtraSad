module.exports = function(seq, DataTypes){
    return seq.define('definition', {
        description: DataTypes.STRING,
        logType: DataTypes.STRING,
        owner: DataTypes.INTEGER
    })
}