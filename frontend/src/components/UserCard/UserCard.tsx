import { Card, CardMedia, CardContent } from '@mui/material'
import type { User } from '../../types'
import avatar from '../../assets/avatar.png'

interface UserCardProps {
    user: User
}

function UserCard(props: UserCardProps): JSX.Element {
    const {
        user: { name, age },
    } = props

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={avatar}
                alt="green iguana"
            />
            <CardContent>
                <h1>Name: {name}</h1>
                <h2>Age: {age}</h2>
            </CardContent>
        </Card>
    )
}

export default UserCard
