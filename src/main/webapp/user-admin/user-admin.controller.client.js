
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
                users=actualUser
                 console.log(users)
                console.log("usesrasr" +
                    "sddd")
                renderUsers(users)
            })
        console.log("sdsds")

    }
    function deleteUser(event) {
        console.log(event.target)
        var deleteBtn=jQuery(event.target)
         var theClass =deleteBtn.attr("class")
         var theIndex=deleteBtn.attr("id");
        console.log(users)
        console.log(users[theIndex])

         var theId=users[theIndex].id
         console.log(theId)
         userService.deleteUser(theId).then(function (status){
             users.splice(theIndex,1)
             renderUsers(users)
        })


    }
    function selectUser(event) {
        var selectBtn=jQuery(event.target)
        var theId=selectBtn.attr("id")
        var theUser=users.find(function (user){
            return user.id==selectBtn.attr("id")
        })
        selectedUser=theUser
        $usernameFld.val(theUser.username)
        $passwordFld.val(theUser.password)
        $firstNameFld.val(theUser.firstname)
        $lastNameFld.val(theUser.lastname)
        $roleFld.val(theUser.role)
    }

    function updateUser() {
        console.log(selectedUser)
        selectedUser.username=$usernameFld.val()
        selectedUser.password=$passwordFld.val()
        selectedUser.firstname=$firstNameFld.val()
        selectedUser.lastname=$lastNameFld.val()
        selectedUser.role=$roleFld.val()
        userService.updateUser(selectedUser.id,selectedUser)
            .then(function (status){
                var index=users.findIndex(function (user){
                    return user.id==selectedUser.id
                })
                users[index]=selectedUser
                renderUsers(users)
            })
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
                            <i class="fa fa-pencil wbdv-select" id="${user.id}"
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
