import React from 'react'
import AppRoute from './router/AppRoute'
import { Toaster } from 'sonner'
import { useSocket } from './hooks/contextApi/useSocketContext'

function App() {
    
    return (
        <>
        
            <AppRoute />
            <Toaster richColors/>
        </>
    )   
}

export default App