const router = require('express').Router();
const sequelize = require('../db.js');
const Tweet = sequelize.import('../models/tweet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cd){
            cd(null, './uploads/');
        },
        filename: function(req, file, cd){
            cd(null, req.tweet.id + Date.now() + path.extname(file.originalname))
        }
    }),
    fileFilter: (req, file, cd) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            return cd(null, true);
        } else {
            return cd(null,false);
        }
    },
    limits : 1024 * 1024 * 5
})

router.get('/list', function(req, res){
    Tweet.findAll({}).then(tweets => {
        res.status(201).send(tweets);
    })
})

router.get('/kill/:tweet_id', function(req, res){
    Tweet.destroy({
        where: {
            id: req.params.tweet_id
        }
    }).then(() => {
        res.status(201).send({success: true});
    })
})

router.post('/', function(req, res){
    Tweet.create({
        tweet : req.body.tweet,
    }).then(
        function createSuccess(){
            const token = jwt.sign({id:Tweet.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24}) 
            res.json({
                tweet: Tweet,
                message: 'create',
                sessionToken: token
            })
        },
        function createError(err){
            res.json({
                statuscode: 500,
                error: err.message
            })
        }
    )
})

router.post('/upload-image', upload.single('image'), (req,res) => {
    console.log(req.body);
    console.log(req.file);
    Tweet.findOne({ where: {id: req.tweet.id}}).then(
        (tweet) => {
            const _tweet = tweer;
            Tweet.update({
                img: req.file.path
            }, { where: { id: tweet.id}}).then(
                (updateSuccess) => {
                    res.json({
                        message: 'image was added',
                        imgRoute: _tweet.img
                    });
                },
                (err) => {
                    res.json({error: err})
                }
            )
        },
        (err) =>{
            res.json('there was an error', err)
        }
    )
})

module.exports = router;