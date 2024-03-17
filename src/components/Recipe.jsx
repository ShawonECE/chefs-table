import PropTypes from 'prop-types';

const Recipe = ({recipe, handleCook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='px-8 pt-8'><img className='rounded-xl' src={recipe_image} alt="recipe" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p className='font-light text-sm my-4'>{short_description}</p>
                <hr />
                <p className='mt-4 mb-1 font-bold'>Ingredients: {ingredients?.length}</p>
                <ul className='list-disc ml-4 mb-4 font-light text-sm'>
                    {
                        ingredients && ingredients.map((ingredient, idx) => <li className='mb-1' key={idx}>{ingredient}</li>)
                    }
                </ul>
                <hr />
                <div className='flex gap-7 mt-4'>
                    <div className='flex gap-2'>
                        <span className="material-symbols-outlined">
                            schedule
                        </span>
                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className='flex gap-2'>
                        <span className="material-symbols-outlined">
                            local_fire_department
                        </span>
                        <p>{calories} calories</p>
                    </div>
                </div>
                <button onClick={() => handleCook(recipe)} className="btn rounded-full bg-[#0BE58A] lg:text-lg border-0 mt-4 max-w-40">Want to Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired,
};

export default Recipe;