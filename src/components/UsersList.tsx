import {IUser} from '@/model/iUser';
import UserCard from '@/components/UserCard';

interface UsersListProps {
    users: IUser[],
    isSaved?: boolean
}

export default function UsersList({users, isSaved}: UsersListProps) {
    return (
        <div className={'grid grid-cols-2 gap-8 w-full max-[1030px]:grid-cols-1'}>
            {users.map(user => (
                <UserCard key={`${user.name.last}${user.name.first}${user.location.coordinates.latitude}`} user={user}
                          canBeSaved={!isSaved}/>
            ))}

        </div>
    );
}
