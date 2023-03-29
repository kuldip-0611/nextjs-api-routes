import { useState } from "react"

const comment_Page = ()=>{
    const [comment,setComment] = useState([])
    const hanleClicl = async ()=>{
        const response = await fetch('http://localhost:3000/api/comments')
        const data = await response.json(response)

        setComment(data)
    }

    return (
        <div>
            <button onClick={hanleClicl}>Fetch Comments</button>
            <div>
                {comment.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default comment_Page;