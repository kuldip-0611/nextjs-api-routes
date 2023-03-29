import { comments } from "@/data/comments";

const get_perticular_comments = (req,res)=>{
    const {commentid} = req.query;
    const comment = comments.find(comment => comment.id === parseInt(commentid))
    res.status(200).json(comment)

}
export default get_perticular_comments