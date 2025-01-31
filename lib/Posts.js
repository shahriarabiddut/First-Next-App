
 async function getAllPosts(limit) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
  {
    next:{revalidate:10,}
    // cache:'no-store' 
    // Makes it server-rendered on demand default was force-cache (prerendered as static content)
  }
  );
  return result.json();
}

 async function getPost(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // if(!result.ok){
    //   throw new Error("There was an error fetching posts!");
    // }
     if (!result.ok) {
      return null; 
    }
  return result.json();
}
async function getPostComments(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    // if(!result.ok){
    //   throw new Error("There was an error fetching posts!");
    // }
  return result.json();
}
export {getAllPosts,getPost,getPostComments}
