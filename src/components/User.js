import { useEffect, useState } from "react"

const User = ({name, location, email}) => {
  const [count , setCount] = useState(0)

  useEffect(()=>{
    // console.log('count changed');
    const timer = setInterval(()=>{
      console.log("Swati");
    },1000)

    return()=>{
      console.log('component Unmount');
      clearInterval(timer)
    }
  },[])

  return (
    <div>
       <h1>{name}</h1>
       <button onClick={()=>setCount(count+1)}>Hello</button>
       <h2>{location}</h2>
       <h3>{email}</h3>
    </div>
  )
}

export default User

