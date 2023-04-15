import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
    const { meals } = useMealsListContext();
    return (
        <ul>
            {meals.map((meal) => (
                <li key={meal}>{meal}</li>
            ))}
        </ul>
    );
}

export default MealsList;