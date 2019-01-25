const express = require('express')
const Router = express.Router()

const conn = require('../utils/db')



Router.get('/categories', (req, res, next) => {
    const sql = `SELECT * FROM categories`

    conn.query(sql, (error, results, fields) => {
        const categories = 
        results
        .map(parent => {
            const children = results.filter(cat => cat.parent_id == parent.id)
            parent.children = children
            return parent
        })
        res.json(categories)
    })
})



Router.get('/listings/:slug', (req, res, next) => {
    const getSql = `SELECT id FROM categories WHERE slug = ?`
    conn.query(getSql, [req.params.slug], (error, results, fields) => {
        const sql = `SELECT * FROM posts 
            LEFT JOIN categories ON posts.category_id = categories.id
            WHERE posts.category_id = ? OR categories.parent_id = ?`
    

    // need to do results[0] tiwce because we have 2 question marks in 2nd sql query above
    conn.query(sql, [results[0].id, results[0].id], (error1, results1, fields1) => {
            res.json(results)
        })
    })
})




Router.get('/listing/:id', (req, res, next) => {
    const sql = `SELECT * FROM posts WHERE id = ?`

    conn.query(sql, [req.params.id], (error, results, fields) => {
        res.json(results)
    })
})


Router.post('/listings', (req, res, next) => {
    //get id from categories with slug
    const getSql = `SELECT id FROM categories WHERE slug = ?`
    // do your query, and heres the slug
    conn.query(getSql, [req.body.slug], (error0, results0, fields0) => {
        // now im gonna give you these values to insert into posts
    const sql = `INSERT INTO posts (name, descript, category_id, cover_photo, price) VALUES (?, ?, ?, ?, ?)`
        // id is coming from results0 from above
    conn.query(sql, [req.body.name, req.body.descript, results0[0].id, req.body.cover_photo, req.body.price], (error, results, fields) => {
        // once we done say inserted
        res.json({
            message: 'Inserted'
        })
    })
})
})

module.exports = Router
