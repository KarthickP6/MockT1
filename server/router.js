const express = require('express')
const router = express.Router();

const Trending = require('./modal/trending')

const Latest = require('./modal/latest')

router.get('/trending', (req,res)=>{
    Trending.find((err,item)=>{
        if(!err)
        res.status(200).send(item)
        else
        res.send(err)
    })
})

router.get('/latest',(req,res)=>{
    Latest.find((err,item)=>{
        if(!err)
        res.status(200).send(item)
        else
        res.send(err)
    })
})

router.delete('/latest/:id',(req,res)=>{
    Latest.findByIdAndRemove({_id:req.params.id},(err,item)=>{
        if(!err)
        res.status(200).send(item)
        else
        res.send(err)
    })
})



router.post('/latest', (req,res)=>{
    const newObj = new Latest({
        id:req.body.id,
        title:req.body.title,
        story:req.body.story,
        directors:req.body.directors,
        writers:req.body.writers,
        language:req.body.language,
        release_date:req.body.release_date,
        rating:req.body.rating
    })

    newObj.save((err,item)=>{
        if(!err)
        res.send("added successfully")
        else
        res.send(err)
    })
})


router.post('/trending', (req,res)=>{
    const newObj = new Trending({
        id:req.body.id,
        title:req.body.title,
        story:req.body.story,
        directors:req.body.directors,
        writers:req.body.writers,
        language:req.body.language,
        release_date:req.body.release_date,
        rating:req.body.rating
    })

    newObj.save((err,item)=>{
        if(!err)
        res.send("added successfully")
        else
        res.send(err)
    })
})



module.exports = router