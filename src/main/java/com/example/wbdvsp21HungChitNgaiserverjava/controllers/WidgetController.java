package com.example.wbdvsp21HungChitNgaiserverjava.controllers;
import com.example.wbdvsp21HungChitNgaiserverjava.models.Widget;
import com.example.wbdvsp21HungChitNgaiserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
    @Autowired
    WidgetService service;

    @PostMapping("/api/topics/{tid}/widgets")
    public Widget createWidget (@PathVariable("tid") String tid, @RequestBody Widget widget){
        return service.createWidget(tid,widget);
    }

    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetsForTopic(@PathVariable("tid") String tid){
        return service.findWidgetsForTopic(tid);
    }
    @PutMapping("/api/widgets/{wid}")
    public int updateWidget(@PathVariable("wid") Long wid, @RequestBody Widget widget){
        return service.updateWidget(wid,widget);
    }

    @DeleteMapping("/api/widgets/{wid}")
    public int deleteWidget(@PathVariable("wid") Long wid){
        return service.deleteWidget(wid);
    }

    @GetMapping("/api/widgets")
    public  List<Widget> findAllWidgets(){
        return service.findAllWidgets();
    }
    @GetMapping("/api/widgets/{wid}")
    public Widget findWidgetById(@PathVariable("wid") Long wid){
        return service.findWidgetById(wid);
    }


}
