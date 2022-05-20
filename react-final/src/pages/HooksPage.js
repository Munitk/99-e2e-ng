import React, { useState } from 'react';
import AddUserForm from '../forms/AddUserForm';
import EditUserForm from '../forms/EditUserForm';
import userList from './Data';
import UserTable from '../tables/UserTable';

const HooksPage = () => {

    const [users, setUsers] = useState(userList);

    const addUser = (user) => {

        user.id = users.length + 1;

        setUsers([...users, user]);

    };



    //Delete operation

    const deleteUser = id => setUsers(users.filter(user => user.id !== id));

    <UserTable users={users} deleteUser={deleteUser} />




    //Edit operation

    const [editing, setEditing] = useState(false);

    const initialUser = { id: null, name: '', username: '' };

    const [currentUser, setCurrentUser] = useState(initialUser);



    const editUser = (id, user) => {

        setEditing(true);

        setCurrentUser(user);

    }

    const updateUser = (newUser) => {

        setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))

    }
    return (

        <div className="container">

            <h4>React CRUD App with Hooks</h4>

            <div className="row">

                <div className="five columns">

                    {editing ? (

                        <div>

                            <h3>Edit user</h3>

                            <EditUserForm

                                currentUser={currentUser}

                                setEditing={setEditing}

                                updateUser={updateUser}

                            />

                        </div>

                    ) : (

                        <div>

                            <h3>Add user</h3>

                            <AddUserForm addUser={addUser} />

                        </div>

                    )}
                </div>
                <br></br>
                <div className="three columns">
                    <h3>View users</h3>
                    <UserTable
                        users={users}
                        deleteUser={deleteUser}
                        editUser={editUser}
                    />

                </div>

            </div>

        </div>
    );
};
export default HooksPage;