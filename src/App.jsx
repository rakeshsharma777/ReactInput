import { useState } from 'react'


function App() {
  const [text, setText] = useState("")

  return (

    <>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
      </div>
    </>
  )
}

export default App
