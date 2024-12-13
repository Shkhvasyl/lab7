import React, { Component } from 'react';
import Image from './Image'; // Імпортуємо компонент Image
import GoodsCard from './GoodsCard';
import './style.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedIndexes: {}, 
            clickedElementIndex: null, 
            kyivImageVisible: true,
            imageWidth: 600, 
        };

        // Списки хобі та фільмів
        this.hobbies = ['Комп\'ютерні ігри', 'Гра на гітарі', '3D-моделювання'];
        this.movies = [
            'The Lord of the Rings: The Return of the King (2003)',
            'The Matrix (1999)',
            'Fight Club (1999)',
        ];
        this.goods = [
            { image: 'apple.jpg', name: 'Яблуко', price: 30 },
            { image: 'banana.jpg', name: 'Банан', price: 20 },
            { image: 'orange.jpg', name: 'Апельсин', price: 25 },
            { image: 'grape.jpg', name: 'Виноград', price: 50 },
            { image: 'pineapple.jpg', name: 'Ананас', price: 100 },
            { image: 'strawberry.jpg', name: 'Полуниця', price: 80 },
        ];
    }

    toggleHighlight = (index) => {
        this.setState((prevState) => {
            const { clickedElementIndex } = prevState;
            const isHighlighted = prevState.highlightedIndexes[index] || false;

            if (index === 1 || index === 2) {
                const method = index === 1 ? 'getElementById' : 'querySelector';
                const targetElement = method === 'getElementById' ? 
                    document.getElementById(`hobby-${index}`) :
                    document.querySelector(`#hobby-${index}`);
                if (targetElement) {
                    if (isHighlighted) {
                        targetElement.style.backgroundColor = '';
                        targetElement.style.color = '';
                    } else {
                        targetElement.style.backgroundColor = '#4400A3';
                        targetElement.style.color = '#FFC18D';
                    }
                }

                return {
                    highlightedIndexes: {
                        ...prevState.highlightedIndexes,
                        [index]: !isHighlighted,
                    },
                    clickedElementIndex: index,
                };
            }

            return prevState;
        });
    };

    handleImageAction = (action) => {
        this.setState((prevState) => {
            switch (action) {
                case 'add':
                    return { kyivImageVisible: true };
                case 'remove':
                    return { kyivImageVisible: false };
                case 'increase':
                    return { imageWidth: prevState.imageWidth + 50 };
                case 'decrease':
                    return { imageWidth: Math.max(prevState.imageWidth - 50, 50) };
                default:
                    return prevState;
            }
        });
        
    };

    render() {
        const { highlightedIndexes, kyivImageVisible, imageWidth } = this.state;

        return (
            <main>
                <h3>Хобі:</h3>
                <ul>
                    {this.hobbies.map((hobby, index) => {
                        const isHighlighted = highlightedIndexes[index] || false;
                        const colorStyle = isHighlighted
                            ? { backgroundColor: '#4400A3', color: '#FFC18D' }
                            : {};
                        return (
                            <li
                                key={index}
                                id={`hobby-${index}`} 
                                style={colorStyle}
                                onClick={() => this.toggleHighlight(index)}
                            >
                                {hobby}
                            </li>
                        );
                    })}
                </ul>

                <h3>Улюблені фільми:</h3>
                <ol>
                    {this.movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ol>

                <h3>Київ — столиця та найбільше місто України:</h3>
                <p>
                    Київ розташований на півночі України, на межі Полісся і лісостепу по обидва береги Дніпра.
                    Місто є політичним, соціально-економічним, транспортним, освітнім і культурним центром України.
                    Відомий своєю історією та архітектурними пам'ятками.
                </p>
                <div>
                    <button onClick={() => this.handleImageAction('add')}>Додати зображення</button>
                    <button onClick={() => this.handleImageAction('increase')}>Збільшити зображення</button>
                    <button onClick={() => this.handleImageAction('decrease')}>Зменшити зображення</button>
                    <button onClick={() => this.handleImageAction('remove')}>Видалити зображення</button>
                </div>
                <Image
                    isVisible={kyivImageVisible}
                    width={imageWidth}
                />
                 <div className="goods-gallery">
                    {this.goods.map((good, index) => (
                        <GoodsCard key={index} image={good.image} name={good.name} price={good.price} />
                    ))}
                </div>
                
            </main>
        );
    }
}

export default Content;
