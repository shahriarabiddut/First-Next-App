import React from 'react'

const BlogLayout = ({children}) => {
  return (
    <section className="bg-gray-300 p-2 min-h-screen">
      <div className="w-11/12 mx-auto">
         {children}
      </div>
    </section>
  )
}

export default BlogLayout