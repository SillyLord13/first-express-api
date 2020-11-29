let express = require('express')
let router = express.Router()

router.get('/',function (req,res,next){
    res.json({'message':'I legit cried for an hour over this.!'})
})

module.exports = router