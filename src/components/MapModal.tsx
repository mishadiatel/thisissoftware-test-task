import ModalOverlay from './ModalOverlay';
import {MouseEvent} from 'react';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/Map'), {ssr: false});


type MapModalProps = Readonly<{
    latitude: string;
    longitude: string;
    image: string;
    onClose: () => void;
    fullName: string;
}>

export default function MapModal({latitude, longitude, image, fullName, onClose}: MapModalProps) {
    const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <ModalOverlay onClose={onClose} handleModalClick={handleModalClick}>
            <MapComponent latitude={latitude} longitude={longitude} image={image} fullName={fullName} />
        </ModalOverlay>
    );

}
