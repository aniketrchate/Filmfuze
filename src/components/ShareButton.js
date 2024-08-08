// src/components/ShareButton.js
import React from 'react';

const ShareButton = ({ list }) => {
    const shareUrl = `https://example.com/share?list=${encodeURIComponent(JSON.stringify(list))}`;

    return (
        <a href={shareUrl} className="btn btn-info" target="_blank" rel="noopener noreferrer">
            Share with Friends
        </a>
    );
};

export default ShareButton;
