import { useState } from "react";
function Customhooks() {
    const [count, setCount] = useState(100);
    const [count1, setCount1] = useState(1000);

    const handleIncrement = () => {
        setCount(count + 5);
    }
    const handleDecrement = () => {
        setCount1(count1 - 3);
    }
    return {count, count1, handleIncrement, handleDecrement};
}
export default Customhooks;