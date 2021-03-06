const {updateCommentById, removeCommentById} = require('../Models/commentsModel')

exports.patchCommentById = (req, res, next)=>{
    const {comment_id} = req.params
    const {inc_votes} = req.body
    updateCommentById(comment_id, inc_votes).then((updatedComment)=>{
        res.status(200).send({comments: updatedComment})
    })
    .catch((err)=>{
      next(err)
    })
};


exports.deleteByCommentId = (req, res, next)=>{
  const {comment_id} = req.params
  removeCommentById(comment_id).then(()=>{
      res.sendStatus(204)
  })
  .catch((err)=>{
    next(err)
  })
};


