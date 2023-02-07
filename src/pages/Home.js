import { getPosts } from './graphql/queries'
import { useState, useEffect } from 'react';

function Home() {
  const [posts,setPosts]= useState([])

  useEffect(() => {
    getPosts()
        .then((newPosts) => setPosts(newPosts))
}, []);
    return (
    <main className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Welcome to My Blog</h2>
    <p className="text-gray-700">Here you can find articles about various topics that interest me and hopefully you as well.</p>
    <section className="mt-8">
      <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          posts.map(post =>(
          <div className="w-full p-4 bg-white shadow-md" key={post.id}>
          <img className="w-full h-64 object-cover" src={post.coverImage.url} alt="Post 1 Cover Image"/>
          <h4 className="text-xl font-bold mt-4">{post.title}</h4>
          <p className="text-gray-700">{post.author.name}</p>
          <a className="text-indigo-500 hover:text-indigo-700 mt-4" href="#">Read More</a>
        </div>
          ))
        }             
        </div>
    </section>
  </main>);
}

export default Home;