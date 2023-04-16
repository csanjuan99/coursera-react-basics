import { useState } from 'react';
import List from './components/List';
import { ImageSizeContext } from './Context';

const App = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <>
            <ImageSizeContext.Provider value={imageSize}>
                <label>
                    <input
                        type="checkbox"
                        checked={isLarge}
                        onChange={e => {
                            setIsLarge(e.target.checked);
                        }}
                    />
                    Use large images
                </label>
                <hr />
                <List imageSize={imageSize} />
            </ImageSizeContext.Provider>
        </>
    )
}

export default App