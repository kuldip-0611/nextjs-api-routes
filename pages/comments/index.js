import { useState } from "react"

const comment_Page = ()=>{
    const [comment,setComment] = useState([])
    const [inputComment,setInputComment] = useState("")
    const hanleClicl = async ()=>{
        const response = await fetch('http://localhost:3000/api/comments')
        const data = await response.json(response)

        setComment(data)
    }
    const handlePost = async ()=>{
        const response = await fetch('http://localhost:3000/api/comments',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                inputComment,
            })
        })
        const data = await response.json()

       

        console.log(data)
        hanleClicl();
       
    }
    // const deleteComment = async (commentid)=>{
    //     const response = await fetch(`/api/comments/${commentid}`,{
    //         method : 'DELETE',
    //     })
    //     const data = await response.json()
    //     console.log(data);
    //     hanleClicl();    
    // }
    const deleteComment = async (commentid) =>{
        const response = await fetch(`/api/comments/${commentid}` ,{
            method :'DELETE'
        })
        const data = await response.json()
        console.log(data)
        hanleClicl()
    }

    return (
        <div>
            <input type='text' value={inputComment} onChange={e=>setInputComment(e.target.value)} />
            <button onClick={handlePost}>Add Comment</button>
            <button onClick={hanleClicl}>Fetch Comments</button>
            <div>
                {comment.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <button onClick={()=>{deleteComment(comment.id)}}>Delete Comment</button>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default comment_Page;