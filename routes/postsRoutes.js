const express = require ('express');
const router = express.Router();
const postsController = require('../controllers/postsController.js');

// Define routes and link to controller functions
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;