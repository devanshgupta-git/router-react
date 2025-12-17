import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-xl rounded-xl">
      Github Followers: {data ? data.followers : "Loading..."}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/devanshgupta-git");
    return response.json(); 
};