import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './db.js';



const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//CREATE A TODO
app.post("/todos", async(req,res)=>{
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);

        res.json(newTodo.rows)
        console.log(req.body);
    } catch (error) {
        console.log(err.message);
    }
});

//GET ALL TODOS
app.get("/todos", async(req,res)=>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.log(err.message);
        
    }
});

//GET A SPECIFIC TODO
app.get("/todos/:id", async(req,res)=>{
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id] )

        res.json(todo.rows[0]);
        console.log(req.params);
    } catch (error) {
        console.log(err.message);
    }
});

//UPDATE A TODO
app.put("/todos/:id", async(req, res)=>{
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);

        res.json("Todo was updated");
    } catch (error) {
        console.error(error.message);
        
    }
});

//DELETE A TODO
app.delete("/todos/:id", async(req, res)=>{
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo was deleted");
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(`${process.env.PORT || 8080}`, ()=>{
    console.log(`server is running on ${process.env.PORT || 8080}`);
})