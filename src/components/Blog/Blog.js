import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { GeneralSection } from '../GeneralSection/GeneralSection'
import { BlogPost } from '../BlogPost/BlogPost'

import '../../sass/blogpost.scss'

export const Blog = () => {

    const [post, setPost] = useState([])

    const addComponents = (posts) => {
        const components = []
        posts.map(b_post => (
            components.push(
                <BlogPost key={b_post.id} title={b_post.title} image={b_post.cover_image} url={b_post.url}/>
            )
        ));
        return components
    }

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios (
                "https://dev.to/api/articles?username=leonardoalonso&per_page=3"
            );

            setPost(addComponents(result.data))
        }
        fetchData()
    }, []);

    return(
        <GeneralSection title="blog_title" main_class="project" subtitle='blog_subtitle' components={post}/>
    )
}