
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $removeBtn, $editBtn, $createBtn;
    var $tablebody;
    var userService = new AdminUserServiceClient();
    var users=[{username: 'CS5610', password:20, firstname:'Spring',lastname:'Spring',role:'Spring'}];


    function createUser(user) {
        userService.createUser(user)
            .then(function (actualUser){
                users.push(actualUser)
                renderUsers(users)
            })

    }
    function deleteUser() {

    }
    function selectUser() {

    }
    function updateUser() {

    }
    function renderUsers(users) {
        $tablebody.empty()
        for(var i=0;i<users.length;i++){
            var user=users[i]
            $tablebody.prepend(`
                    <tr>
                        <td>${user.username}</td>
                        <td>${user.password}</td>
                        <td>${user.firstname}</td>
                        <td>${user.lastname}</td>
                        <td>${user.role}</td>
                        <td>
                            <i class="fa fa-trash wbdv-delete" id="${i}"></i>
                            <i class="fa fa-pencil wbdv-edit" id="${i}"></i>
                            
                        </td>
                    </tr>
            `)
        }
    }
    function findAllUsers() {

    } // optional - might not need this
    function findUserById() {

    } // optional - might not need this
    function main() {
        $usernameFld=$(".usernameFld")
        $passwordFld=$(".passwordFld")
        $firstNameFld=$(".firstnameFld")
        $lastNameFld=$(".lastNameFld")
        $roleFld=$(".roleFld")
      //  $removeBtn=jQuery("#wbdv-create")
        //$editBtn=jQuery("#wbdv-create")
        $createBtn=jQuery("#wbdv-create")
        $tablebody=jQuery("tbody")
        $createBtn.click(()=>
            createUser({username:$usernameFld.val(),
                             password: $passwordFld.val(),
                             firstname: $firstNameFld.val(),
                             lastname: $lastNameFld.val(),
                              role: $roleFld.val()
            })
        )
        userService.findAllUsers()
            .then(function (actualUsersFromServer){
                users=actualUsersFromServer
                renderUsers(users)
            })

    }
jQuery(main)
