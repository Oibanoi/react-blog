import { getOnePost } from '../graphql/queries';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import Post from '../components/Post';
function Home() {
    const { slug } = useParams();
    const [posts, setPosts] = useState();
    useEffect(() => {
        getOnePost(slug ).then((newPost) => setPosts(newPost));
    }, [slug]);
    if (posts)
    return (
        <React.Fragment key={posts.slug}>
            
                    <Post post={posts} />
        </React.Fragment>
    );
}

export default Home;
