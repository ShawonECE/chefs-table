import PropTypes from 'prop-types';

const CookingItem = ({recipe, idx}) => {
    const {recipe_name, preparing_time, calories} = recipe;
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} min</td>
            <td>{calories} calories</td>
        </tr>
    );
};

CookingItem.propTypes = {
    recipe: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
};

export default CookingItem;