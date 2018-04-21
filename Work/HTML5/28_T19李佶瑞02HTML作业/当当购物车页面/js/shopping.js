function close_plan() {
    window.close();
}
function add(num) {//商品数量加
    var mon=document.getElementsByName("price")[num].value;
    if(document.getElementsByName("amount")[num].value<1){
        reduction(num,mon);
    }else{
        var num01=document.getElementsByName("amount")[num].value++;//库存++
        ++num01;
        change(num,num01);//调用增删金额方法
    }
}
function del(num) {//商品数量减
    var mon=document.getElementsByName("price")[num].value;
    var num1=document.getElementsByName("amount")[num].value;//获取库存数量
    if(num1>=1){
        var num01=document.getElementsByName("amount")[num].value--;//库存--
        --num01;
        change(num,num01);//调用增删金额方法
    }else {//如果库存等于一，再减一就提示不能再减
        reduction(num,mon);
    }
}
function change(num,num01) {//增减金额方法
    var num1=document.getElementsByName("price")[num].value;
    document.getElementById("price"+num).innerHTML="¥"+(num01*num1).toFixed(2);
    total();
}
function reduction(num,mon) {//还原方法
    document.getElementsByName("amount")[num].value=1;
    document.getElementById("price"+num).innerHTML="¥"+mon;
    // document.getElementById('totalPrice').innerHTML='¥'+(num*mon).toFixed(2);
    alert("商品数量不能小于1！");
    total();
}
function total() {//总计
    var prices =document.getElementsByName("price");
    var count = document.getElementsByName("amount");
    var zong=0;
    for(var i=0;i<count.length;i++){
        var a=parseFloat(prices[i].value);
        var b=parseFloat(count[i].value);
        zong+=a*b;
    }
    document.getElementById('totalPrice').innerHTML='¥'+zong.toFixed(2);
}
function accounts() {//结算方法
    var number=document.getElementsByName('amount');
    var d=document.getElementById('totalPrice').textContent.substring(1);
    var c=0;
    var m="";
    if(number.length>=1){
        for(var i=0;i<number.length;i++){
            var g= document.getElementById('price'+i).textContent.substring(1);
            c+=parseInt(number[i].value);
            var f="第"+(i+1)+"本书数量为："+number[i].value+"\n"+"金额为："+g+"\n";
            m+=f;
        }
        confirm(m+"\n总数量"+c+"\n总金额："+'¥'+d+"\n\n请确认以上信息无误！");
    }else{
        reduction();
    }

}
function del1() {//删除提示
    confirm("确认要删除此订单吗？");
}
function collection() {
    confirm("收藏商品成功！");
}
function dian(num) {
    var h=document.getElementsByName('amount');
    var mon=document.getElementsByName("price")[num].value;
    if(h<1){
        alert("商品数量不能小于1！");
        reduction(num,mon);
    }
}