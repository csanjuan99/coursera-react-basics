import { getImageUrl } from '../utils';
import { ImageSizeContext } from '../Context';
import { useContext } from 'react';

const PlaceImage = ({ place }) => {

    const imageSize = useContext(ImageSizeContext);

    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
};

export default PlaceImage;