import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => {
  return <h1>I am the Title component inside heading component</h1>
}

const titleElement = (
  <h1> This is title element inside heading component </h1>
)


const HeadingComponent = () => (
  <div>
    <Title/>
    {titleElement}
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)
