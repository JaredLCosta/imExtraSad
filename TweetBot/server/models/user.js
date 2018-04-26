module.exports = function(seq, DataTypes){

var User = seq.define('user', {
    username: DataTypes.STRING,
    passwordhash: DataTypes.STRING,
    img: DataTypes.STRING
})

return User;
}