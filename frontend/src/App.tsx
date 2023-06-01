import { useEffect, useState } from 'react'
import { UserCard } from './components/UserCard'
import { type User } from './types'
import { Box } from '@mui/material'

function App(): JSX.Element {
    const [users, setUsers] = useState([])

    const fetchUsers = async (): Promise<void> => {
        const res = await fetch('/api/users')
        const data = await res.json()
        setUsers(data)
    }

    useEffect(() => {
        void fetchUsers()
    })

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2em',
                mt: '1em',
            }}
        >
            {users.map((user: User) => (
                <UserCard key={user.id} user={user} />
            ))}
        </Box>
    )
}

export default App
