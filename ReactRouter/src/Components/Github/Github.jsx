import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';

function Github() {
    const data = useLoaderData()
  //const [data, setData] = useState(null); 

//   useEffect(() => {
//     fetch('https://api.github.com/users/AtifAfridiii') 
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data); 
//       })
//       .catch((err) => console.error('Error fetching data:', err)); 
//   }, []);

  return (
    <div className="text-center bg-black text-bold text-white">
      {data ? ( 
        <>
        <h1>{data.name}</h1>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
          <p>Public Repos: {data.public_repos}</p>
          <img src={data.avatar_url} alt="gitpic"width={300} />
        </>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AtifAfridiii')
    return response.json()
}