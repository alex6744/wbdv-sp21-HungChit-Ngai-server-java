function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'http://localhost:8080/api/001501828/users';
    var self = this;
    function createUser(user) {
        user.id=(new Date()).getTime()
        return fetch(self.url,{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)})
            .then(function (response){
            return response.json()
        })
    }
    function findAllUsers() {
        return fetch(self.url).then(function (response){
            return response.json()
        })
    }
    function findUserById(userId) {

    }
    function updateUser(userId, user) {

    }
    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`,{method:'DELETE'})
    }
}
