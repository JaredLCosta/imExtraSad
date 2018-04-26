module.exports = function(seq, DataTypes){

    var Tweet = seq.define('tweet', {
        tweet: DataTypes.STRING,
    })
    
    return Tweet;
    }