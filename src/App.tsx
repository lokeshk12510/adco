// Router
import { useRoutes } from 'react-router-dom'
import routes from './Router'

function App() {
    const content = useRoutes(routes)
    return <div>{content}</div>
}

export default App
