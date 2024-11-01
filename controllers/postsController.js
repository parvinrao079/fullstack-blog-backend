const pool = require ('../db/db.js');

// Retrieve all posts
const getAllPosts = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM posts');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving posts');
    }
  };
  
  // Retrieve a single post by ID
  const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
      if (result.rows.length) {
        res.json(result.rows[0]);
      } else {
        res.status(404).send('Post not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving the post');
    }
  };
  
  // Create a new post
  const createPost = async (req, res) => {
    const { author, title, content, cover } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO posts (author, title, content, cover) VALUES ($1, $2, $3, $4) RETURNING *',
        [author, title, content, cover]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating the post');
    }
  };
  
  // Update an existing post by ID
  const updatePost = async (req, res) => {
    const { id } = req.params;
    const { author, title, content, cover } = req.body;
    try {
      const result = await pool.query(
        'UPDATE posts SET author = $1, title = $2, content = $3, cover = $4 WHERE id = $5 RETURNING *',
        [author, title, content, cover, id]
      );
      if (result.rows.length) {
        res.json(result.rows[0]);
      } else {
        res.status(404).send('Post not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating the post');
    }
  };
  
  // Delete a post by ID
  const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM posts WHERE id = $1', [id]);
      if (result.rowCount) {
        res.send('Post deleted');
      } else {
        res.status(404).send('Post not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting the post');
    }
  };
  
  module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  };