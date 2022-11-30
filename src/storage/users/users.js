const userBase = new Map();
const checkPassword = (username, password) => {
    if(userBase.get(username) == password) return true;
    else return false;
}

const addUser = (username, password) => {
    userBase.set(username, password);
}

addUser('admin', 'admin');

export {checkPassword, addUser}