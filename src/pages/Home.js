import { getPosts } from '../graphql/queries'
import React, { useState } from 'react'
import useQueryPost from '../hook/useQueryPost'
import Error from './Error';
import { Trans, useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';
function Home() {
  const {posts, error,totalPage}= useQueryPost({func: getPosts})
  console.log(posts,totalPage);
  //const [posts, setposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  
  // ...

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { t } = useTranslation()
  const paginate = ({ selected }) => {
     setCurrentPage(selected + 1);
  };
  if (error)
  {
    console.log(error)
    return( <Error/>)
  }
  console.log(currentPosts)
    return (
    <main className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">{t('content.welcome')}</h2>
    <p className="text-gray-700">Here you can find articles about various topics that interest me and hopefully you as well.</p>
    <section className="mt-8">
      <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          currentPosts.map(post =>(
          <div className="w-full p-4 bg-white shadow-md" key={post.id}>
          <img className="w-full h-64 object-cover" src={post.coverImage.url} alt="Post 1 Cover"/>
          <h4 className="text-xl font-bold mt-4">{post.title}</h4>
          <p className="text-gray-700">{post.author.name}</p>
          <a className="text-indigo-500 hover:text-indigo-700 mt-4" href={`/detail/${post.slug}`}>Read More</a>
        </div>
          ))
        }             
        </div>    
        <div>
        <ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(posts.length / postsPerPage)}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination flex float-right items-center justify-between py-4 w-1/4 mr-9'}
                  pageLinkClassName={'page-number bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700'}
                  previousLinkClassName={'page-number bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700'}
                  nextLinkClassName={'page-number bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700'}
                  activeLinkClassName={'active flex items-center justify-center text-gray-500'}
               />
          </div>    
        
    </section>
  </main>);
}

export default Home;