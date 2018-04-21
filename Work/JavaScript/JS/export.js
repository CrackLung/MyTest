/**
 * Created by Administrator on 2018/2/23.
 */
// 1.简介
//      W3C规定javascript是行为标准语言

// 2.特点
//      0.1 属于弱语言 编写 ==> 编译和运行在一起
//      0.2 描述性的脚本语言
//      0.3 基于对象和事件驱动的
//      0.4 javascript代码都在客户端进行运行,从而减轻服务器压力
//      0.5 用来给HTML网页中添加动态交互行为

// 3.组成
//      0.1 ECMAScript 描述了语言的基本语法和基本对象
//      0.2 BOM 描述与浏览器进行交互的方法和接口
//      0.3 DOM 描述处理网页内容的方法和接口

// 4.注意事项
//      0.1 <script>标签可以放在<head>和<body>标签中
//      0.2 最好放在<body>标签的末尾,如果没有用到标签下的代码,也可以放在<head>标签中

// 5.js的引入方式
//      0.1 行内样式例如
//                <input type="button" value="按钮" onclick="alert("嘿嘿")"/>
//      0.2 内部样式例如
//                 <script type="text/javascript">
//                      alert("哈哈");
//                 </script>
//      0.3 外部样式例如
//                  <script type="text/javascript" src="js文件所在的路径"><script/>

// 6.伪协议
//      0.1 在程序运行到javascript:伪协议先会执行相对应的js代码,在进行后续的操作!
//      0.2 例如
//                  <form method="post" action="error.html">
//                       <input type="text" onblur="javascript:alert('失去焦点')"/>
//                       <input type="text" onfocus="javascript:prompt('获取焦点?','我会循环')"/>
//                       <input type="submit" onfocus="javascript:alert('我还是会循环')"/>
//                   </form>

// 7.数据类型
//      0.1 undefined ==> 未定义的,只声明了变量,但是没有赋予初始值或者没有声明的变量
//                  var num;
//                  document.write("我的名字是"+num);//undefined
//      0.2 null ==> 空值,不存在的对象,等于undefined,null属于object类型
//                  alert(null==undefined); //true
//      0.3 number ==> 数值类型(byte short long int float double整数和浮点数)
//                  alert('20的数据类型是:'+typeof(20)); //number
//                  alert('20.5的数据类型是:'+typeof(20.5)); //number
//      0.4 string ==> 字符类型('',"")
//                  alert(typeof('true')); //string
//                  alert(typeof("true")); //string
//      0.5 boolean ==> 布尔类型
//                  alert(typeof(TRUE)); //undefined
//                  alert(typeof(true)); //boolean
//                  alert(typeof('true')); //string
//                  在js中,"",null,undefined,NaN,false,0在做判断的时候都是false!

//      0.6 object ==> 数组,对象和null
//                  var num = [];//定义一个数组
//                      num[0] = 1;
//                      num[1] = 1.5;
//                      num[2] = "哈哈哈";
//                  alter(typeof(null));
//                  alter(typeof(num));
//                  alter(typeof(new Date));

// 8.输入和确认框
//      0.1 alert:提示框,只有一个确定按钮
//              alert('只有一个确定');
//      0.2 prompt:对话框,有两个参数
//          0.2.1 提示语句
//          0.2.2 文本框的默认值
//          0.2.3 用户在文本框输入的数据,会返回
//      0.3 confirm:是一个提示框,有确定和取消按钮
//          0.3.1 用户点击确定,返回true
//          0.3.2 用户点击取消或者X,返回false
//      0.4 模态窗口
//          0.4.1 模态窗口光标只能停留在窗口内,只能在当前窗口中进行操作
//          0.4.2 非模态窗口随便操作切换

// 9.运算符
//      0.1 ++在变量前,先自身加1,在运算
//      0.2 ++在变量后,先参与运算,在自身加1

// 10.类型转换
//       0.1 使用parseXXX方法,从前到后
//              var num = "12.5a";
//              var num2 = "a12.5";
//              var num3 = "12.5a";
//              num = parseInt(num);
//              alert(num); //12
//              num1 = parseFloat(num1);
//              alert(num3); //12.5
//              num2 = parseInt(num2);
//              alert(num2); //NaN //not a number 不是一个数值
//      0.2 使用number,string,boolean方法,看整体
//              alert(Number("20a"));
//              alert(String(22.2));
//              alert(Boolean(20));
//                     在JS中做判断 null,"",NaN,false,0,undefined 都为false!

// 11.==和===的区别
//      0.1 ==相对于===宽松一些,在做判断时,复杂的数据类型会进行数据转换,在比较
//      0.2 ===是恒等的意思,必须类型相同,内容相同才返回true

// 12.函数(方法)
//      0.1 function 方法名(){
//              方法体
//          }
//      0.2 var answer= function(){
//              方法体
//          }

// 13.异常
//      0.1 使用try{
//                 可能发成异常的代码
//                 }catch(ex){
//                 ex.name; //异常名字
//                 ex.message; //异常信息
//                 }

// 14.数组
//      0.1 定义数组的方式
//              0.1.1 var num = new Array[];
//              0.1.2 var num = [];
//              0.1.3 var num = new Array[10];
//      0.2 数组长度可变,可以存储数据类型不相同的数据
//      0.3 常用方法
//
//              var num = "10,25,8552,1";
//              var nums=num.split(",");//把有规律的字符串转换成数组
//              alert(nums.length); //4
//              nums.push('你好'); //像数组末尾增加一个新的元素
//              alert(nums);
//              num=nums.join('++'); //把一个数组转换成字符串
//              alert(num);,

// 15.for in
//      0.1 遍历数组
//              var num = [1,2,3];
//                  for(var i in num){
//                      alert(num[i]); //i代表的数组下标
//                  }
