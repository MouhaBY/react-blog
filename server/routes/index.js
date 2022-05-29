var express = require('express');
var router = express.Router();
const pool = require('../main/db');

router.get('/api/get/userprofilefromdb', (req, res, next)=>{
    const email = req.query.email
    pool.query(`SELECT * FROM users WHERE email = $1`, [email], (q_err, q_res)=>{
                    res.json(q_res.rows)
                    if(q_err){console.log(q_err)}
                })
})

router.post('/api/post/userprofiletodb', (req, res, next)=>{
    const values = [req.body.name, req.body.email, req.body.email_verified ];
    pool.query(`INSERT INTO users(username, email, email_verified, date_created) VALUES($1, $2, $3, NOW()) 
                ON CONFLICT DO NOTHING`, values, (q_err, q_res)=>{
                    res.json(q_res.rows)
                    if(q_err){console.log(q_err)}
                })
})

router.post('/api/post/blog', (req, res, next)=>{
    const values = [req.body.blogTitle, req.body.blogBody, req.body.author ];
    pool.query(`INSERT INTO posts(title, body, user_id, date_created) VALUES($1, $2, $3, NOW()) 
                ON CONFLICT DO NOTHING`, values, (q_err, q_res)=>{
                    try { res.json(q_res.rows) }
                    catch (err) {
                        console.log(err)
                    }
                    if(q_err){console.log(q_err)}
                })
})

router.get('/api/get/posts', (req, res, next)=>{
    pool.query(`SELECT * FROM posts`, [], (q_err, q_res)=>{
                    res.json(q_res.rows)
                    if(q_err){console.log(q_err)}
                })
})

module.exports = router;
