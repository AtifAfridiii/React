import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch('https://api.github.com/users/AtifAfridiii') 
      .then((res) => res.json())
      .then((data) => {
        setData(data); 
      })
      .catch((err) => console.error('Error fetching data:', err)); 
  }, []);

  return (
    <div className="text-center bg-black text-bold text-white">
      {data ? ( 
        <>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
          <p>Public Repos: {data.public_repos}</p>
        </>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}

export default Github;
