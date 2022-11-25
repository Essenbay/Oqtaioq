const userBase = new Set();
const checkPassword = () => {

}
const getUser = (username, password) => {
    for (const elem of userBase) {
        if (elem.username === username && elem.password === password) {
          return true
        }
    }
    return false;
      
}
const addUser = (username, password) => {
    userBase.add({
        username: username,
        password: password
    })
}
addUser('admin', 'admin');

export {getUser, addUser}