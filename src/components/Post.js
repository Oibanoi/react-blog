function Post({post}) {
    return ( <main className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
    <p className="text-gray-700">Post published on  <span className="font-medium">{post.author.name}</span></p>
    <img className="w-full mt-4" src={post.coverImage.url} alt="Post Cover"/>
    <div className="mt-4 text-lg text-gray-700" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
  </main> );
}

export default Post;