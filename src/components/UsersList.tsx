import {IUser} from '@/model/iUser';
import UserCard from '@/components/UserCard';

interface UsersListProps {
    users: IUser[],
    isSaved?: boolean
}

export default function UsersList ({users, isSaved}: UsersListProps) {
    return (
        <div className={'grid grid-cols-2 gap-8 w-full max-[1030px]:grid-cols-1'}>
            {users.length > 0 ? users.map(user => (
                <UserCard key={`${user.name.last}${user.name.first}${user.location.coordinates.latitude}`} user={user} canBeSaved={!isSaved}/>
            )) :
            [...new Array(20)].map((_, index) => (
                <div key={index} className={'h-400 rounded-lg w-full bg-gray-200'}></div>
            ))}

        </div>
    )
}
