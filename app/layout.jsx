
import Nav from '@components/Nav';
import '@styles/global.css';
// import { Children } from 'react';

export const metadata = {
    title : "Promtopia",
    description:"Discover & Share AI Prompts"
}
const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
              <Nav/>
              {children}</main>
        </body>
    </html>
  )
}

export default Rootlayout