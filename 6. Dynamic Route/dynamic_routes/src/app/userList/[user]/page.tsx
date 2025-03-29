import React from 'react'

const userList = async ({params} : {params : {user : string}}) => {

    const {user} = await params;
    





  return (
    <div>
        <h1>Info about  {user}</h1>
    </div>
  )
}

export default userList