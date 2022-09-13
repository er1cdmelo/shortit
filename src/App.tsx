import { useState } from 'react'
import LinkBar from './components/LinkBar';
import ShortedLink from './components/ShortedLink';
import './styles/app.sass'

function App() {
  const [link, setLink] = useState<string>('')
  const onClick = (url:string) => {
    setLink(url)
  }

  return (
    <div id="App">
      <LinkBar action={onClick} />
      {link.length ? <ShortedLink url={link} /> : null}
    </div>
  );
}

export default App;
