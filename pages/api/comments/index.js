import { comments } from "@/data/comments";

export default function handlekr(req, res) {
  if (req.method == "GET") {
    res.status(200).json(comments)
  }
  else if (req.method == "POST") {
    const newComment = {
      comment : req.body.inputComment,
      id : Date.now(),
    }
    comments.push(newComment);
    res.status(200).json(newComment);
  }
}