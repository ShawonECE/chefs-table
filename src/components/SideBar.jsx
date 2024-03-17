import PropTypes from 'prop-types';

const SideBar = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold">Want to Cook:</h2>
                <div className='px-16'><hr /></div>
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
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td><button className="btn btn-sm rounded-full bg-[#0BE58A] border-0 mt-4">Prepare</button></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <td><button className="btn btn-sm rounded-full bg-[#0BE58A] border-0 mt-4">Prepare</button></td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                                <td><button className="btn btn-sm rounded-full bg-[#0BE58A] border-0 mt-4">Prepare</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    
};

export default SideBar;