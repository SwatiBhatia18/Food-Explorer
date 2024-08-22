import React from "react"
import User from "./User"
import UserClass from "./UserClass"

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <div
        style={{
          border: "1px solid black",
        }}
      >
        <User
          name={"Swati Functional"}
          location={"delhi"}
          email={"swatibhatia626@gmail.com"}
        />
      </div>
      <div
        style={{
          border: "1px solid black",
        }}
      >
        <UserClass
          name={"Vani Class"}
          location={"delhi"}
          email={"swatibhatia626@gmail.com"}
        />
      </div>
    </>
  )
}

export default About
