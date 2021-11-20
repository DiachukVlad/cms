//@flow
import React from 'react'
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import remarkGfm from 'remark-gfm'

type Post = {
    id: number,
    forattedText: string
}

export default function Posts(): React$Element<"div">{
    const [posts, setPosts] = useState<Array<Post>>([])

    useEffect(() => {
        axios('http://localhost:1337/posts')
            .then(response => {
                setPosts(response.data)
            })
    }, [])

    return (
        <div>
            {
                posts.map((post: Post)=>{
                    return (
                        <ReactMarkdown children={post.forattedText} key={post.id} remarkPlugins={[remarkGfm]}/>
                    )
                })
            }
        </div>
    )
}