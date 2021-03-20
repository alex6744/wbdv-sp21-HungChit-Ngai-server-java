package com.example.wbdvsp21HungChitNgaiserverjava.services;
import com.example.wbdvsp21HungChitNgaiserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class WidgetService {
    private List<Widget> widgets=new ArrayList<Widget>();

    public Widget createWidget(String tid, Widget widget){
        widget.setTopicId(tid);
        widget.setId(String.valueOf(new Date().getTime()));
        widgets.add(widget);
        return widget;
    }

    public List<Widget> findWidgetsForTopic(String tid){
        List<Widget> ws=new ArrayList<>();
        for(Widget w:widgets){
            if(w.getTopicId().equals(tid)){
                ws.add(w);
            }
        }
        return ws;

    }

    public int updateWidget(String wid, Widget widget){
        for(int i=0; i<widgets.size();i++) {
            Widget w = widgets.get(i);
            if(w.getId().equals(wid)){
                widgets.set(i,widget);
                return 1;
            }
        }
        return 0;
    }

    public int deleteWidget(String wid){
        int index=-1;
        for(int i=0; i<widgets.size();i++){
            Widget w=widgets.get(i);
            if(w.getId().equals(wid)){
                index=i;
            }
        }
        if(index>=0){
            widgets.remove(index);
            return 1;
        }
        return 0;
    }
    public List<Widget> findAllWidgets(){
        return widgets;
    }
    public Widget findWidgetById(Long wid) {
        for(Widget w: widgets) {
            if(w.getId().equals(wid)) {
                return w;
            }
        }
        return null;
    }
}
