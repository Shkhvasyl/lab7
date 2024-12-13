import React from 'react';
import Header from './Header';
import Content from './Content';
import Image from './Image';

const App = () => {
    return (
        <div>
            <Header />
            <Content />
            <Image src="Kyiv.jpg" alt="Фото Києва" />
        </div>
    );
};

export default App;
