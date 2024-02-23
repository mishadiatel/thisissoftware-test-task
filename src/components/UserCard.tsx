import {IUser} from '@/model/iUser';
import Image from 'next/image';
import {useState} from 'react';
import WeatherModal from '@/components/WeatherModal';
import Copy from '@/icons/copy';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic';

const OpenStreetMap = dynamic(() => import('../components/MapModal'), {
    ssr: false
});

interface UserCardProps {
    user: IUser;
    canBeSaved: boolean;
}

const UserCard = ({user, canBeSaved}: UserCardProps) => {
    const [isSaved, setIsSaved] = useState(false);
    const [showWeather, setShowWeather] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const saveUserHandler = () => {
        setIsSaved(true);
        const localStorageArray = JSON.parse(localStorage.getItem('savedUsers') || '[]');
        localStorageArray.unshift(user);
        localStorage.setItem('savedUsers', JSON.stringify(localStorageArray));
    };
    const showWeatherHandler = () => {
        setShowWeather(true);
        document.body.style.overflow = 'hidden';
    };
    const hideWeatherHandler = () => {
        setShowWeather(false);
        document.body.style.overflow = 'auto';
    };

    const showMapHandler = () => {
        setShowMap(true);
        document.body.style.overflow = 'hidden';
    };
    const hideMapHandler = () => {
        setShowMap(false);
        document.body.style.overflow = 'auto';
    };

    const copyEmailHandler = () => {
        navigator.clipboard.writeText(user.email);
        toast('Email copied', {icon: '📋'});
    };


    return (
        <div
            className={'flex gap-4 max-[532px]:flex-col p-4 bg-gray-100 shadow hover:shadow-lg hover:bg-gray-200 transition-all rounded-lg h-full '}>
            <div className={'flex flex-1 gap-4'}>
                <div className={'flex flex-col justify-between'}>
                    <div className={'h-16 w-16 max-[532px]:h-10 max-[532px]:w-10 rounded-full overflow-hidden'}>
                        <Image src={user.picture.medium} alt={'user picture'} width={100} height={100}
                               className={'object-cover'}/>
                    </div>
                </div>
                <div className={'flex-1'}>
                    <h4 className={'font-bold text-xl text-gray-700'}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
                    <div className={'flex gap-4 items-center'}>
                        <p className={'text-gray-500 text-ellipsis overflow-hidden w-48 whitespace-nowrap'}>{user.email}</p>
                        <Copy onClick={copyEmailHandler} className={'w-6 h-6 cursor-pointer'}/>
                    </div>

                    <div className={'flex gap-4 text-gray-800 font-medium'}>
                        <span>Gender: {user.gender}</span>
                        <Image src={`/${user.gender}1.png`} alt={'gender icon'} width={24} height={24}/>
                    </div>
                    <div className={'flex flex-col text-gray-800 font-medium'}>
                        <span>Country: {user.location.country}</span>
                        <span>State: {user.location.state}</span>
                        <span>City: {user.location.city}</span>
                        <span>Coordinates: {user.location.coordinates.latitude},{user.location.coordinates.longitude}</span>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col justify-center gap-3'}>
                {canBeSaved && <button onClick={saveUserHandler}
                                       className={'px-3 py-1 button'}>{isSaved ? 'Saved' : 'Save'}</button>}
                <button onClick={showWeatherHandler} className={'button px-3 py-1'}>Weather</button>
                <button onClick={showMapHandler} className={'button px-3 py-1'}>Map</button>
            </div>
            {showWeather && <WeatherModal latitude={user.location.coordinates.latitude}
                                          longitude={user.location.coordinates.longitude}
                                          onClose={hideWeatherHandler}
                                          addressInfo={{
                                              country: user.location.country,
                                              state: user.location.state,
                                              city: user.location.city
                                          }}
            />
            }
            {showMap &&
                <OpenStreetMap latitude={user.location.coordinates.latitude}
                               longitude={user.location.coordinates.longitude}
                               onClose={hideMapHandler} image={user.picture.medium}
                               fullName={`${user.name.title} ${user.name.first} ${user.name.last}`}/>}

        </div>
    );
};
export default UserCard;
