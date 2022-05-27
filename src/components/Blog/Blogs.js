import React from 'react'

const Blogs = () => {
  return (
    <>
      <div className="text-2xl">Blog Page</div>
      <div className="container px-2 mx-auto ">
        <p className="text-left">
          Question-1: How will you improve the performance of a React
          Application?
        </p>
        <p className="text-left text-emerald-800">
          Answer -1: Some ways to improve the performance of react application
          are : using local state in components, implementing lazy loading if
          necessary, memorizing component to stop unnecessary re-renders{' '}
        </p>
        <p className="text-left">
          Question-2: What are the different ways to manage a state in a React
          application?
        </p>
        <p className="text-left text-emerald-800">
          Answer -2: Four different ways to manage state are Local State, Global
          State, Server State, URL State
        </p>
        <p className="text-left">
          Question-3: How does prototypical inheritance work?
        </p>
        <p className="text-left text-emerald-800">
          Answer -3: In javascript, Each object has a private property which
          holds a link to another object called its prototype. That prototype
          object has a prototype of its own. JavaScript objects have a link to a
          prototype object. When trying to access a property of an object, the
          property will not only be sought on the object but on the prototype of
          the object, the prototype of the prototype,
        </p>
        <p className="text-left">
          Question-4: Why you do not set the state directly in React?
        </p>
        <p className="text-left text-emerald-800">
          Answer -4: we should not update the state directly. If we update it
          directly, calling the setState() afterward may just replace the update
          we made.
        </p>
        <p className="text-left">
          Question-5 You have an array of products. Each object has a name,
          price, description, etc. How will you implement a search to find
          products by name?
        </p>
        <p className="text-left text-emerald-800">
          Answer -5: we can find out product by it's name using filter method
        </p>
      </div>
    </>
  )
}

export default Blogs
