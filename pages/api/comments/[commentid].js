import { comments } from "@/data/comments";

const get_perticular_comments = (req, res) => {
    const { commentid } = req.query;
    if (req.method === 'GET') {
        const comment = comments.find(comment => comment.id === parseInt(commentid))
        res.status(200).json(comment)
    }
    else if (req.method === 'DELETE') {
        const delete_comment = comments.find(comment => comment.id === parseInt(commentid))
        
        const index = comments.findIndex(comment => comment.id === commentid)
        comments.splice(index, 1)
        res.status(200).json(delete_comment)

    }

}
export default get_perticular_comments