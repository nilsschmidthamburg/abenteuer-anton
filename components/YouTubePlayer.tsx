// components/YouTubePlayer.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './YouTubePlayer.module.css';

// Dynamischer Import von ReactPlayer, nur auf dem Client geladen
const ReactPlayer = dynamic(() => import('react-player/youtube'), {ssr: false});

interface YouTubePlayerProps {
    url: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({url}) => {

    return (
        <>
            <div className={styles.playerWrapper} id={'test'}>
                <ReactPlayer
                    className={styles.reactPlayer}
                    url={url}
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </div>
        </>
    );
};

export default YouTubePlayer;
