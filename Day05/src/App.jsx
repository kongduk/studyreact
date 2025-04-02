import { useState } from 'react'
import ProfileForm from './ProFileForm'
import ProfileFormImmer from './ProfileFormImmer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ProfileForm /> */}
    <ProfileFormImmer />
    </>
  )
}

export default App
