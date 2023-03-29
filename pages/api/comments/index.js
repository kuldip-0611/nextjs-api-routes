import { comments } from "@/data/comments";

export default function handlekr(aa,res){
  res.status(200).json(comments);
}