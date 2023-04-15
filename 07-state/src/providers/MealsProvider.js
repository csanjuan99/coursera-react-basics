import { createContext, useState, useContext } from "react";

export const MealsContext = createContext();

const todayMeals = ['Bakend Beans', 'Bread', 'Milk', 'Eggs', 'Bacon'];


const MealsProvider = ({ children }) => {
    const [meals, setMeals] = useState(todayMeals);

    return (
        <MealsContext.Provider value={{ meals }}>
            {children}
        </MealsContext.Provider>
    );
}

export const useMealsListContext = () => useContext(MealsContext);

export default MealsProvider;