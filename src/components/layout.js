import React from "react"

import "./layout.css"

const layout = ({ children }) => {
  return (
    <>
      <h1>Layout</h1>
      <main>{children}</main>
    </>
  )
}

export default layout
