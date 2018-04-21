function close_plan() {
    window.close();
}
document.getElementsByTagName('body')[0].setAttribute('onload','total()');//body加载事件
document.getElementsByName('jue')[0].setAttribute('onclick','accounts()');//结算点击事件
var minus= document.getElementsByName('minus');//商品减
var plus=document.getElementsByName('plus');//商品加
var amount=document.getElementsByName('amount');//商品数量
var prics=document.getElementsByName('price');//单价
function refresh() {//刷新方法
    for(var i=0;i<amount.length;i++){
        minus[i].index=i;
        plus[i].index=i;
        amount[i].index=i;
        prics[i].index=i;
    }
}
function one() {
    for(var i=0;i<minus.length;i++){//初始化循环
        minus[i].onclick=function () {//减按钮点击事件
            refresh();
            var negative =amount[this.index].value--;
            if (negative<=1){
                alert("商品数量不能小于1！")
                amount[this.index].value=1;
            }
            money(amount[this.index].value,this.index);
            total();
        }
        plus[i].onclick=function () {//加按钮点击事件
            refresh();
            var negative =amount[this.index].value++;
            if (negative<1){
                alert("商品数量不能小于1！")
                amount[this.index].value=1;
            }
            money(amount[this.index].value,this.index);
            total();
        }
        document.getElementsByName('del')[i].setAttribute('onclick','rem(this)');//删除
        document.getElementsByName('ad')[i].setAttribute('onclick','add(this)');//增加
        document.getElementsByName('amount')[i].setAttribute('onmouseout','onm()');//输入框鼠标离开事件
    }
}
function money(amount,num) {//总价
    var price=parseFloat(prics[num].value);//单价
    document.getElementsByName('price')[num].parentNode.nextSibling.nextSibling.innerHTML="￥"+(price*amount).toFixed(2);
}
function total() {//商品总计
    one();
    var sum=0;
    for(var i=0;i<amount.length;i++){
        sum+=(amount[i].value*prics[i].value);
    }
    document.getElementById('totalPrice').firstElementChild.innerHTML="￥"+sum.toFixed(2);
}
function rem(th) {//删除
   var yes= confirm("确认要删除吗？");
   if(yes){
       alert("删除成功！")
       var remo=th.parentNode.parentNode;
       remo.parentNode.removeChild(remo).nodeName;
       refresh();
       total();
   }
}
function add(th) {//增加
    var ol=document.getElementsByTagName('ol')[0];
    var fathar=th.parentNode.parentNode;//获取ul
    var newUl=fathar.cloneNode(true);
    var mon=fathar.childNodes[2].childNodes[1].value;//获取单价
    newUl.lastChild.previousSibling.innerHTML='￥'+mon;//总价还原
    newUl.childNodes[3].childNodes[1].value=1;//商品数量还原
    ol.parentNode.insertBefore(newUl,ol);//克隆在ol标签的前面
    total();//调用商品总计方法
}
function accounts() {//结算方法
    var d=document.getElementById('totalPrice').lastChild.textContent.substring(1);
    var c=0;
    var m="";
    if(amount.length>=1){
        for(var i=0;i<amount.length;i++){
            c+=parseInt(amount[i].value);
            var g= (document.getElementsByName('price')[i].value*amount[i].value).toFixed(2);
            var f="第"+(i+1)+"本书数量为："+amount[i].value+"\n"+"金额为："+g+"\n";
            m+=f;
        }
        confirm(m+"\n总数量："+c+"\n总金额："+'¥'+d+"\n\n请确认以上信息无误！");
    }else {
        confirm("目前无商品结算，请添加商品！")
    }
}
function onm() {//鼠标离开事件
   for (var i=0;i<amount.length;i++){
       if(parseInt(amount[i].value)<1){
           alert("商品数量不能小于1！")
           amount[i].value=1;
           money(amount[i].value,i);
           total();
       }
   }

}

