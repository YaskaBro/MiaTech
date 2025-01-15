import { useEffect } from "react"
import { useState } from "react"



const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: {}
}

export const useFetch = (url, options = DEFAULT_OPTIONS) => {
    options = { ...DEFAULT_OPTIONS, ...options }

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        if (!loading) setLoading(true)
        if (error) setError(false)
        
        try {
            const response = await fetch(url, options)

            if (!response.ok) {
                throw new Error("Errore durante il caricamento della lista");
            }

            const result = await response.json()

            setData(result)          
        } catch (error) {
            setError(error.message)
        } finally {
            if (loading) setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {
        data,
        error,
        loading,
        reload: fetchData
    }
}