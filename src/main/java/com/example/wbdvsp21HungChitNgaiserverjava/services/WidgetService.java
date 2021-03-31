package com.example.wbdvsp21HungChitNgaiserverjava.services;
import com.example.wbdvsp21HungChitNgaiserverjava.models.Widget;
import com.example.wbdvsp21HungChitNgaiserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

    //private List<Widget> widgets=new ArrayList<Widget>();

    public Widget createWidget(String tid, Widget widget){
        widget.setTopicId(tid);
        return repository.save(widget);
//        widget.setTopicId(tid);
//        widget.setId((new Date().getTime()));
//        widgets.add(widget);
//        return widget;
    }

    public List<Widget> findWidgetsForTopic(String tid){
        return repository.findWidgetsForTopic(tid);
//        List<Widget> ws=new ArrayList<>();
//        for(Widget w:widgets){
//            if(w.getTopicId().equals(tid)){
//                ws.add(w);
//            }
//        }
//        return ws;

    }

    public int updateWidget(Long wid, Widget widget){
        Widget originalWidget=findWidgetById(wid);
        originalWidget.setText(widget.getText());
        originalWidget.setSrc(widget.getSrc());
        originalWidget.setType(widget.getType());
        originalWidget.setWidgetOrder(widget.getWidgetOrder());
        originalWidget.setSize(widget.getSize());
        originalWidget.setWidth(widget.getWidth());
        originalWidget.setHeight(widget.getHeight());
        repository.save(originalWidget);
        return 1;
//        for(int i=0; i<widgets.size();i++) {
//            Widget w = widgets.get(i);
//            if(w.getId().equals(wid)){
//                widgets.set(i,widget);
//                return 1;
//            }
//        }
//        return 0;
    }

    public int deleteWidget(Long wid){
        repository.deleteById(wid);
        return 1;
//        int index=-1;
//        for(int i=0; i<widgets.size();i++){
//            Widget w=widgets.get(i);
//            if(w.getId().equals(wid)){
//                index=i;
//            }
//        }
//        if(index>=0){
//            widgets.remove(index);
//            return 1;
//        }
//        return 0;
    }
    public List<Widget> findAllWidgets(){
        return repository.findAllWidgets();
       // return widgets;
    }
    public Widget findWidgetById(Long wid) {
        return repository.findWidgetById(wid);
//        for(Widget w: widgets) {
//            if(w.getId().equals(wid)) {
//                return w;
//            }
//        }
//        return null;
    }
}
