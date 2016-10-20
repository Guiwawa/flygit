/**
 * Created by hp on 2016/9/15.
 */
/**
 * 封装      找第一个子元素
 * @param element
 * @returns {*}
 */
function   getFirstELement(element){
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        var el=element.firstChild;
        while(el&&1!==el.nodeType){
            el=el.nextSibling;
        }
        return el;
    }
}
/**
 * 封装          获取最后一个子元素的方法
 * @param element
 * @returns {*}
 */
 function    getLastElement(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var pro=element.lastChild;
        while(pro&&1!==pro.nodeType){
            pro=pro.previousSibling;
        }
        return pro;
    }
}
/**
 * 定义一个函数，返回指定的日期格式
 * @param date
 * @returns {string}
 */
function getDate(date){
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var h=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    month=month<10?"0"+month:month;
    day=day<10?"0"+day:day;
    h=h<10?"0"+h:h;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    return year+"-"+month+"-"+day+" "+h+":"+min+":"+sec;
}