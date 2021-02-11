
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $createBtn,$updateBtn;
    var $tablebody;
    var userService = new AdminUserServiceClient();
    var users=[];
    var selectedUser=null;

    function createUser(user) {
        userService.createUser(user)
            .then(function (actualUser){
               // console.log(actualUser)
                users.push(actualUser)

                renderUsers(users)
            })


    }
    function deleteUser(event) {
        // console.log(event.target)
         var deleteBtn=jQuery(event.target)
         var theClass =deleteBtn.attr("class")
         var theIndex=deleteBtn.attr("id");
         var theId=users[theIndex]._id
         console.log(theId)
         userService.deleteUser(theId)
             .then(function (status){
                users.splice(theIndex,1)
                renderUsers(users)
             })


    }
    function selectUser(event) {
        var selectBtn=jQuery(event.target)
        var theId=selectBtn.attr("id")
        selectedUser=users.find(user=>user._id===theId)

        $usernameFld.val(selectedUser.username)
        $passwordFld.val(selectedUser.password)
        $firstNameFld.val(selectedUser.firstname)
        $lastNameFld.val(selectedUser.lastname)
        $roleFld.val(selectedUser.role)
    }

    function updateUser() {

        selectedUser.username=$usernameFld.val()
        selectedUser.password=$passwordFld.val()
        selectedUser.firstname=$firstNameFld.val()
        selectedUser.lastname=$lastNameFld.val()
        selectedUser.role=$roleFld.val()
        console.log(selectedUser)
        userService.updateUser(selectedUser._id,selectedUser)
            .then(function (status){
                var index=users.findIndex(user=>user._id===selectedUser._id)
                users[index]=selectedUser
                renderUsers(users)
            })
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
        $roleFld.val("")
    }
    function renderUsers(users) {
        $tablebody.empty()
        for(var i=0;i<users.length;i++){
            var user=users[i]
            //console.log(user)
            $tablebody.prepend(`
                    <tr>
                        
                        <td>${user.username}</td>
                        <td></td>
                        <td>${user.firstname}</td>
                        <td>${user.lastname}</td>
                        <td>${user.role}</td>
                        <td>
                            <i class="fa fa-trash wbdv-delete" id="${i}" 
                                title="Delete User"></i>
                            <i class="fa fa-pencil wbdv-select" id="${user._id}"
                                title="Select User"></i>
                            
                        </td>
                    </tr>
            `)
        }
        jQuery(".wbdv-delete").click(deleteUser)
        jQuery(".wbdv-select").click(selectUser)
    }
    function findAllUsers() {

    } // optional - might not need this
    function findUserById() {

    } // optional - might not need this
    function main() {
        $usernameFld=$(".usernameFld")
        $passwordFld=$(".passwordFld")
        $firstNameFld=$(".firstNameFld")
        $lastNameFld=$(".lastNameFld")
        $roleFld=$(".roleFld")
      //  $removeBtn=jQuery("#wbdv-create")
        //$editBtn=jQuery("#wbdv-create")
        $createBtn=jQuery(".wbdv-create")
        $updateBtn=jQuery(".wbdv-update")
        $tablebody=jQuery("tbody")
        $updateBtn.click(updateUser)
        $createBtn.click(()=> {
                createUser({
                    username: $usernameFld.val(),
                    password: $passwordFld.val(),
                    firstname: $firstNameFld.val(),
                    lastname: $lastNameFld.val(),
                    role: $roleFld.val()
                })
                $usernameFld.val("")
                $passwordFld.val("")
                $firstNameFld.val("")
                $lastNameFld.val("")
                $roleFld.val("")
            }
        )
        userService.findAllUsers()
            .then(function (actualUsersFromServer){
                users=actualUsersFromServer
                renderUsers(users)
            })

    }
jQuery(main)
