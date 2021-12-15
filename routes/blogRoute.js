const express = require("express")
const router = express.Router();
const blog = require('../controlors/blogsCtrl')
const upload = require('../config/multer')

router.post('/', upload.array("images"), blog.createBlog);
router.get('/', blog.getAllBlog);
router.delete('/:id', blog.deleteBlog);
router.put('/:id', upload.array("images"), blog.modifBlog);
router.get('/:id', blog.getOneBlog);

module.exports = router