const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//for uploading a post
router.post("/", async(req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        return res.status(500).json(err);
    }
});

//updating a post
router.put("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Post has been updated");
        }
        else{
            res.status(403).json("You can update only your post");
        }
    }
    catch(err){
        res.status(500).json(err);

    }
});

//deleting a post
router.delete("/:id",async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post successfully deleted");
        }
        else{
            res.status(403).json("You can delete only your post");
        }
    }
    catch(err){
        return res.status(500).json(err);
    }
});

//liking and disliking a post
router.put("/:id/like",async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The post has been liked");
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("The post has been disliked");
        }
    }
    catch(err){
        return res.status(500).json(err);
    }
});

//getting a post
router.get("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.statu(500).json(err);
    }
});

//timeline post
router.get("/timeline/:id", async(req,res) => {
    try{
        const currentUser = await User.findById(req.params.id);
        const userPost = await Post.find({userId:currentUser._id});
        const friendPost = await Promise.all(
            currentUser.following.map((id) => {
                return Post.find({userId: id});
            })
        );
        res.status(200).json(userPost.concat(...friendPost));
    }
    catch(err){
        return res.status(500).json(err);
    }

});

//getting all post of user
router.get("/profile/:username" , async (req,res) => {
    try{
        const user = await User.findOne({username:req.params.username});
        const posts = await Post.find({userId: user._id});
        res.status(200).json(posts);
    }
    catch(err){
        return res.status(500).json(err);
    }
})

module.exports = router
