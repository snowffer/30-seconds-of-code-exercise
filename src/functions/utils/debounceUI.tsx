import React, {useState} from 'react';
import debounce from './debounce';

const DebounceUI = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <input type="text"
                value={count}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount(Number(e.target.value) || 0)}/>
            <button onClick={debounce(() => {setCount(count + 1)}, 500)}>点击增加</button>
        </>
    );
}

export default DebounceUI;
