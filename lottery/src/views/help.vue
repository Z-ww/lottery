<template>
    <div id='box'>
        <div id='main'>
            <h2>玩法规则</h2>
            <p>每期开出3个数字作为开奖号码，每个数字取值范围1-6（相当于摇3个骰子）。</p>
            <h2>奖励说明</h2>
            <div id='table-box'>
                <table>
                <tr>
                    <td>玩法</td>
                    <td>中奖条件</td>
                    <td>奖励(积分)</td>
                </tr>
                  <tr>
                    <td>和值</td>
                    <td>猜中开奖号相加的和</td>
                    <td>9-80</td>
                </tr>
                  <tr>
                    <td>三同号<br/>单选</td>
                    <td>猜中111、222、333、444、555、666中指定一个</td>
                    <td>240</td>
                </tr>
                  <tr>
                    <td>三同号<br/>通选</td>
                    <td>111、222、333、444、555、666中任一个开出</td>
                    <td>40</td>
                </tr>
                  <tr>
                    <td>二通号<br/>单选</td>
                    <td>猜中3个号（有2个号相同）</td>
                    <td>80</td>
                </tr>
                  <tr>
                    <td>二同号<br/>复选</td>
                    <td>猜中开奖中相同的2个号</td>
                    <td>15</td>
                </tr>
                  <tr>
                    <td>三不同号</td>
                    <td>猜中3个号（各不相同）</td>
                    <td>40</td>
                </tr>
                  <tr>
                    <td>二不同号</td>
                    <td>猜中开奖中不相同的2个号</td>
                    <td>8</td>
                </tr>
                  <tr>
                    <td>三连号<br/>通选</td>
                    <td>123，234，345，456任意一个开出</td>
                    <td>10</td>
                </tr>
            </table>
            </div>
            <h2>便签返奖</h2>
            <p>奖励自动返还至用户账户中，可继续投注<br/>或者提现!</p>
        </div>
    </div>
</template>
<style>
    *{
        padding:0;
        margin:0;
    }
    #box{
        width:320px;
        height:568px;
    }
    #main{
        width:290px;
        height:568px;
        margin:0 auto;
        margin-top:20px;
        position:relative;
    }
    #main h2:nth-of-type(1){
        color:red;
        font-size:16px;
        position:absolute;
        left:0;   
    }
    #main p:nth-of-type(1){
         position:absolute;
         left:0;
         top:26px; 
         font-size:16px;  
         color:#08533C;
    }
     #main h2:nth-of-type(2){
        color:red;
        font-size:16px;
        position:absolute;
        left:0;
        top:80px;   
    }
    table{
          width: 100%;
          border-spacing: 0;
          border-collapse: collapse;
          border: 1px solid #ddd;
    }
    table > tr {
        vertical-align: middle;
        height:60px;
   }
   tr:nth-of-type(1){
       height:35px;
   }
   tr td{
       border-right:1px solid #ccc;
       font-size:14px;
       padding:5px;
       color:#08533C;
   }
   tr td:nth-of-type(1){
       width:60px;
   }
    tr td:nth-of-type(2){
       width:125px;
   }
    table tr:nth-child(odd) {
    background-color: #eee;
   }
    #table-box{
        width:290px;
        margin:0 auto;
        position:absolute;
        top:105px;
    }
    #main h2:nth-of-type(3){
        position:absolute;
        left:0;
        top:638px;
        color:red;
        font-size:16px;
    }
    #main p:nth-of-type(2){
         position:absolute;
         left:0;
         width:290px;
         top:660px; 
         font-size:16px;  
        color:#08533C;
    }
</style>
<script>


</script>