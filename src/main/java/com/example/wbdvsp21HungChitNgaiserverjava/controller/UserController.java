package com.example.wbdvsp21HungChitNgaiserverjava.controller;

import com.example.wbdvsp21HungChitNgaiserverjava.models.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
public class UserController {
    static List<User> users=new ArrayList<>();
    static {
        users.add(new User(123,"alex1","3123","alex","ngai","student"));
        users.add(new User(456,"al231","31efsdf3","ex","ng","student"));

    }
    // POST - Creating
    @PostMapping("/api/001501828/users")
    public List<User> createUser(@RequestBody User user) {
        users.add(user);
        return users;
    }

    // GET - Reading
    @GetMapping("/api/001501828/users")
    public List<User> findAllUsers() {
        return users;
    }
//
//    @GetMapping("/api/001501828/users/od")
//    public List<User> findUserByID(String ID) {
//        return users;
//    }
    @PutMapping("/api/001501828/users/{userId}")
    public List<User>  updateUser(User user,@PathVariable("userId") long userId) {
       for(int i=0;i<users.size();i++){
           if(users.get(i).getID()==userId){
               users.get(i).setUsername(user.getUsername());
               users.get(i).setPassword(user.getPassword());
               users.get(i).setFirstname(user.getFirstname());
               users.get(i).setLastname(user.getLastname());
               users.get(i).setRole(user.getRole());
               break;
           }
       }


        return users;
    }
    @DeleteMapping("/api/001501828/users/{userId}")
    public List<User> deleteUser(@PathVariable("userId") long userId) {
        User u=null;
        for(User user:users){
            if(user.getID()==userId        ){
                u=user;
            }
        }
        users.remove(u);
        return users;
    }

}
