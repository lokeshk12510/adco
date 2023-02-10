import './App.css'
import routes from './Router'

import { useRoutes } from 'react-router-dom'

function App() {
    const content = useRoutes(routes)

    return <div className="App">{content}</div>
}

export default App
