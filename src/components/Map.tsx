import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

type MapProps = Readonly<{
    latitude: string;
    longitude: string;
    image: string;
    fullName: string;
}>

export default function Map({latitude, longitude, image, fullName}: MapProps) {
    const ZOOM_LEVEL= 3
    return (
        <MapContainer className={'w-full h-96'} center={[+latitude, +longitude]} zoom={ZOOM_LEVEL} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[+latitude, +longitude]}
                                    icon={L.divIcon({
                                        iconSize: [16, 16],
                                        iconAnchor: [16 / 2, 16 + 9],
                                        className: 'bg-transparent',
                                        html: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                `
                                    })}
            >
                <Popup>
                    <div className={'flex gap-2'}>
                        <Image src={image} alt={'user picture'} width={32} height={32} className={'w-8 h-8 rounded-full'}/>
                        <span className={'font-semibold'}>{fullName}</span>
                    </div>

                </Popup>
            </Marker>

        </MapContainer>
    );
}
