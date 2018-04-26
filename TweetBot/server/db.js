var Sequelize = require('sequelize');
var seq = new Sequelize(process.env.DATABASE_URL,{
    dialect: 'postgres',
    port: 5432
});
var User = seq.import('./models/user');
var Definition = seq.import('./models/definition');
var Log = seq.import('./models/log')
var tweet = seq.import('./models/user')

seq.authenticate().then(
    function(){
        console.log('you are connected to the pg database')
    },
    function(err){
        console.log(err)
    }
);

seq.sync()
module.exports = seq