let express = require('express')
let router = express.Router()

router.get('/',function (req,res,next){
    res.json({'message':'This is a basic express app!'})
})

module.exports = router
