import { useMealsListContext } from '../providers/MealsProvider';

const Counter = () => {
    const { meals } = useMealsListContext();

    return (
        <div>
            <p>Count: {meals.length}</p>
        </div>
    );
}

export default Counter;