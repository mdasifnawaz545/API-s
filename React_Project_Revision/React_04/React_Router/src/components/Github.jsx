import React from 'react'
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


function Github() {
  let data = useLoaderData();


  return (
    <div className='min-h-screen flex justify-center bg-green-50 items-center'>
      <div className='bg-green-200 flex gap-3 p-4 min-w-1/2 h-1/4'>
        <div className='flex items-center justify-center'><img src={data.avatar_url} alt="" /></div>
        <div>
          <p>{data.name} <span> (Followers : {data.followers} )&nbsp;(Following : {data.following} )</span></p>
          <p>{data.bio}</p>
        </div>
      </div>

    </div>
  )
}

async function githubInfos() {
  let data = null;
  let gitInfoURL = "https://api.github.com/users/mdasifnawaz545";
  await fetch(gitInfoURL).then((jsonData) => (jsonData.json())).then((validJson) => { data = validJson })
  return data;
}

export { githubInfos }
export default Github