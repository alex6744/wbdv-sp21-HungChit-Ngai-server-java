
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $removeBtn, $editBtn, $createBtn;
    var $tablebody;
    var userService = new AdminUserServiceClient();
    var users=[];


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
        var a=users[theIndex-1]
        var c=users[theIndex-1].username
        var b=users[theIndex-1]._id
         var theId=users[theIndex].id
         console.log(theId)
         userService.deleteUser(theId).then(function (status){
             users.splice(theIndex,1)
             renderUsers(users)
        })


    }
    function selectUser() {

    }
    function updateUser() {

    }
    function renderUsers(users) {
        $tablebody.empty()
        for(var i=0;i<users.length;i++){
            var user=users[i]
            //console.log(user)
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
        jQuery(".wbdv-delete").click(deleteUser)
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
        $tablebody=jQuery("tbody")
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
