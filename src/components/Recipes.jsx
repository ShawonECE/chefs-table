import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import SideBar from "./SideBar";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantCook, setWantCook] = useState([]);
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []);

    const handleCook = (item) => {
        const sameItem = wantCook.find(recipe => recipe.recipe_id === item.recipe_id);
        if (!sameItem) {
            setWantCook([...wantCook, item]);
        } else {
            setShowToast(true);
            setTimeout(() => {
            setShowToast(false);
            }, 2500);
        }
    };
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-20">Our Recipes</h1>
            <p className="text-center mt-6 mb-12 px-4 lg:px-24">Explore our restaurant&#39;s diverse array of recipes, crafted with care and passion. From succulent steaks to tantalizing pastas, each dish promises a culinary adventure. Indulge in flavors that will leave you craving for more.</p>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-7">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {
                            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleCook={handleCook} />)
                        }
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5">
                    <SideBar wantCook={wantCook} setWantCook={setWantCook} />
                </div>
            </div>
            {
                showToast && 
                <div className="toast toast-top toast-end">
                    <div className="alert">
                        <span>Item already exists!!</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default Recipes;