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
//    @PutMapping("/api/001501828/users/id")
//    public void updateUser(User user,String ID) {
//        //return users;
//    }
    @DeleteMapping("/api/001501828/users/{userId}")
    public void deleteUser(@PathVariable("userId") int userId) {
        User u=null;
        for(User user:users){
            if(user.getID()==userId){
                u=user;
            }
        }
        users.remove(u);

    }

}
