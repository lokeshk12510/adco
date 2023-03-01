import { useQuery, useQueryClient } from '@tanstack/react-query'

/**
 * This hook will save state in react query context.
 * We can use it as a global state throughout the components
 *
 *
 * @param key Unique string to identify the state
 * @param initialData Inital Data to be loaded on mount
 * @returns A useState hook to get and set the global state
 */

const useGlobalState = (key: string, initialData: any) => {
    const queryClient = useQueryClient()

    return [
        useQuery([key], () => initialData, { enabled: false, initialData }).data,
        (value: any) => queryClient.setQueryData([key], value),
    ]
}

export default useGlobalState
