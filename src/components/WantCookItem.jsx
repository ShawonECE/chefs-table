import PropTypes from 'prop-types';

const WantCookItem = ({recipe, idx, handlePrepare}) => {
    const {recipe_name, preparing_time, calories} = recipe;
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} min</td>
            <td>{calories} calories</td>
            <td><button onClick={() => handlePrepare(recipe)} className="btn btn-sm rounded-full bg-[#0BE58A] border-0 mt-4">Prepare</button></td>
        </tr>
    );
};

WantCookItem.propTypes = {
    recipe: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handlePrepare: PropTypes.func.isRequired,
};

export default WantCookItem;