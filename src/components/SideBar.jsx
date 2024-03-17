import PropTypes from 'prop-types';
import WantCookItem from './WantCookItem';
import { useState } from 'react';
import CookingItem from './CookingItem';

const SideBar = ({wantCook, setWantCook}) => {
    const [cooking, setCooking] = useState([]);
    const handlePrepare = (item) => {
        const sameItem = wantCook.find(recipe => recipe.recipe_id === item.recipe_id);
        const others = wantCook.filter(recipe => recipe.recipe_id !== item.recipe_id);
        setWantCook(others);
        setCooking([...cooking, sameItem]);
    };
    const total = (prop) => {
        let sum = 0;
        for (const item of cooking) {
            sum = sum + item[prop];
        }
        return sum;
    };
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold">Want to Cook: {wantCook.length}</h2>
                <div className='px-16'><hr /></div>
                {
                    wantCook.length ?
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wantCook.map((item, idx) => <WantCookItem key={item.recipe_id} idx={idx} recipe={item} handlePrepare={handlePrepare} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    : <></>
                }
                <h2 className="text-center text-2xl font-semibold mt-5">Currently Cooking: {cooking.length}</h2>
                <div className='px-16'><hr /></div>
                {
                    cooking.length? 
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cooking.map((item, idx) => <CookingItem key={item.recipe_id} idx={idx} recipe={item} />)
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Total time:<br /> {total("preparing_time")} minutes</strong></td>
                                        <td><strong>Total Calories:<br /> {total("calories")} calories</strong></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    : <></>
                }
            </div>
        </div>
    );
};

SideBar.propTypes = {
    wantCook: PropTypes.array.isRequired,
    setWantCook: PropTypes.func.isRequired,
};

export default SideBar;