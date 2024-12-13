import React from 'react';
import './image.css';

const Image = ({ isVisible, width}) => {
    return (
        <div className="image-container">
            {isVisible && (
                <a href = "https://kyivcity.gov.ua/" target="_blank"><img
                    src="Kyiv.jpg"
                    alt="Фото Києва"
                    style={{ width: `${width}px`, maxWidth: '100%' }}
                />
                </a>
            )}
        </div>
        
    );
};

export default Image;
