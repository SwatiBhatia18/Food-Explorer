import React from "react"
import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError()
  return (
    <div>
      <h1>Oops - {err.error.message}</h1>
      <h2>
        Status {err.status} - {err.statusText}
      </h2>
    </div>
  )
}

export default Error
