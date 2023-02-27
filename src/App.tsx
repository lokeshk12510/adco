// Router
import { useRoutes } from 'react-router-dom'
import routes from './Router'
import { QueryClient, QueryClientProvider } from 'react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
    const content = useRoutes(routes)

    return <QueryClientProvider client={queryClient}>{content}</QueryClientProvider>
}

export default App
