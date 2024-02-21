import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../slices/counterSlices";
import { useState } from "react";

const Home = () => {
    const cpt = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [input, setInput] = useState(0);
    return (
        <div>
            <h1>Mon compteur</h1>
            <p>Mon compteur est à {cpt}</p>
            <button onClick={() => dispatch(increment())}>Ajouter 1</button>
            <button onClick={() => dispatch(decrement())}>Soustraire 1</button>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(input))}>Ajouter</button>
        </div>
    )
}
export default Home;