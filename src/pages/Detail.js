import { getOnePost } from '../graphql/queries';
import React from 'react';
import Post from '../components/Post';
import useQueryPost from '../hook/useQueryPost';
import Error from './Error';
function Home() {
    const { posts, error } = useQueryPost({ func: getOnePost });
    console.log(posts);
    if (error)
   return( <Error/>)
        return (
            <div>
                {
                    posts.map(post => (<Post key={post.slug} post={post} />))
                }
            </div>
        );
}

export default Home;
