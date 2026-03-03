import React, { useState } from 'react';

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
            <h1>Минимальный React+TypeScript сайт</h1>
            <p>Нажато {count} раз</p>
            <button
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                onClick={() => setCount(count + 1)}
            >
                Нажми меня
            </button>
        </div>
    );
};

export default App;
