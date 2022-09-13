import { useState } from 'react'
import '../styles/components/linkbar.sass'

const LinkBar = ({ action }: {action: any}) => {
  
  const [search, setSearch] = useState<string>('')

  return (
    <div id='linkbar'>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Paste your link in here' />
        <button onClick={() => action(search)}>Short it</button>
    </div>
  )
}

export default LinkBar