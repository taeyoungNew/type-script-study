import { useState } from 'react'
import ChildComp from './ChildComp'

import './App.css'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <ChildComp msg="hello">
        <div>Children</div>
      </ChildComp>
    </>
  )
}

export default App
