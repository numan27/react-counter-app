import { useState } from 'react';

function Home() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    const scrollToCounter = () => {
        const counterSection = document.getElementById('counter');

        if (counterSection) {
            counterSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='main-section'>
                <div className="banner-text">
                    <h1>Count effortlessly with our intuitive Counter App. Simple, efficient, and user-friendly counting at your fingertips.</h1>
                    <button onClick={() => scrollToCounter()}>Get Started</button>
                </div>
            </div>

            <div id='counter' className="counter">

                <p>Use the Counter App to effortlessly keep track of numbers, scores, and counts. It's your go-to tool for accurate and efficient counting, making tasks a breeze with its user-friendly interface.</p>

                <div className='count'>
                    <h2>Count: </h2>
                    <span> {count}</span>
                </div>

                <div className='button-container'>
                    <button onClick={decrement}> + Decrement</button>
                    <button onClick={increment}> - Increment</button>
                </div>
                <button className='reset-button' onClick={reset}>Reset</button>
            </div>

        </>
    );
}

export default Home;
