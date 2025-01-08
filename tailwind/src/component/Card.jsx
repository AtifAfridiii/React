import React from 'react'

const Card = ({Username}) => {
  return (
    <>
   <div class="max-w-sm mx-auto bg-black rounded-xl shadow-md overflow-hidden">
  <img
    class="w-25 h-25 object-cover"
    src="https://images.pexels.com/photos/16233277/pexels-photo-16233277/free-photo-of-dog-standing-on-lakeshore.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt="Card image" 
  />
  <div class="p-4">
    <h2 class="text-xl font-semibold text-gray">{Username}</h2>
    <p class="mt-2 text-gray-600">
     Tailwid practice
    </p>
    <div class="mt-4">
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Read More
      </button>
    </div>
  </div>
</div>


    </>
  )
}

export default Card
