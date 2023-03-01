// Router
import { BrowserRouter } from 'react-router-dom'

// React query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Mui Theme provider
import ThemeWrapper from './theme/ThemeProvider'
import Routes from './routes/Index'

// Create a client instance
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // By default, refetch on window focus is disabled
        },
    },
})

function App() {
    return (
        <BrowserRouter>
            <ThemeWrapper>
                <QueryClientProvider client={queryClient}>
                    <Routes />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </ThemeWrapper>
        </BrowserRouter>
    )
}

export default App
