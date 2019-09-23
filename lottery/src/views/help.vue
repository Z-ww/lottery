<template>
    <div id='help'>
        <div id='main'>
            <h2>玩法规则</h2>
            <p>每期开出3个数字作为开奖号码，每个数字取值范围1-6（相当于摇3个骰子）。</p>
            <h2>奖励说明</h2>
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
                    <td>三同号<br/>通选</td>
                    <td>猜中111、222、333、444、555、666中指定一个</td>
                    <td>240</td>
                </tr>
                 <tr>
                    <td>二同号<br/>单选</td>
                    <td>猜中3个号（有2个号相同）</td>
                    <td>40</td>
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
                    <td>三连号通选</td>
                    <td>123，234，345，456任意一个开出</td>
                    <td>10</td>
                </tr>
            </table>
            <h2>便签奖励</h2>
            <p>奖励自动返还至用户账户中，可继续投注或者提现!</p>
        </div>
    </div>

</template>
<style scoped>
    #{
        padding:0;
        margin:0;   
    }
    #help{
        width:100%;
    }
    #main{
        margin:20px;
    }
    #main h2:nth-of-type(1){
        color:red;
    }
    #main p{
        padding-top:10px;
        color:#08533C;
        font-size:20px;
    }
     #main h2:nth-of-type(2){
        color:red;
        padding-top:22px;
    }
      #main h2:nth-of-type(3){
        color:red;
        padding-top:22px;
    }
    table{
        width:100%;
        color:#08533C;
        border-spacing: 0;
        border-collapse: collapse;
        border: 1px solid #ddd;
    }
    table tr{
        height:40px;
    }
    table tr:nth-child(odd){
        background:#eee;
    }
    table tr td{
       border-top: 1px solid #ddd;
        border-right: 1px solid #ddd;
        padding: 5px;
        text-align: center;
    }
</style>
<script>
   

</script>