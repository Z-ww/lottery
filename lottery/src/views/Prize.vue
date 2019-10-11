<template>
    <div class="prize">
        <div class="zezo" :style="{'opacity': !display?'0':'1','z-index':!display?'-1':'10'}">
            <div :style="{'transform': !display?'scale(0.5)':''}">
                <p class="zezo_py">该商品用{{prize}}积分兑换,<span>在购物区购买商品可获赠相应模拟金</span></p>
                <p class="zezo_pe"><span style="margin-left: 20px;">确定</span><span @click="btn">取消</span></p>
            </div>
        </div>
        <div class="banner">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544695339701&di=e614a2ae7b5d3fd39738839e46e534ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8415a77c3a4a80120a12372925c.jpg%402o.jpg">
            <span class="information">恭喜用户123****321，购买32个烟斗，获赠999模拟金</span>
        </div>
        <div class="exchange">
            <div class="top_switch">
                <p @click="left = 0">兑换区</p>
                <p @click="left = 1">购物区</p>
                <span class="fale" :style="{'left':!left?'0':'50%'}"></span>
            </div>
            <div class="btm_switch" :style="{'left':!left?'0':'-100%'}">
                <div>
                    <div @click="dsply(999)">
                        <div>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077945538&di=003d3de1479ae95ab6131ca11d042c4a&imgtype=0&src=http%3A%2F%2Fa.vpimg3.com%2Fupload%2Fmerchandise%2Fpdcvis%2F146767%2F2017%2F1104%2F115%2F88257c95-7205-4390-8eab-635fc8384069_t.jpg">
                        </div>
                        <p>iphoneX (尊贵铂金)</p>
                        <p>积分：999</p>
                        <p><span style="font-size: 80%;">市场参考价：9999.00</span></p>
                    </div>
                    <div @click="dsply(100)">
                        <div>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077790483&di=716de166c55fe352462ca970809e926f&imgtype=0&src=http%3A%2F%2Fi1.hexunimg.cn%2F2016-03-15%2F182772684.jpg">
                        </div>
                        <p>话费充值卡</p>
                        <p>积分：100.00</p>
                        <p><span style="font-size: 80%;">市场参考价：9999.00</span></p>
                    </div>
                </div>
                <div>
                    <div @click="dsply(9999)">
                        <div>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg">
                        </div>
                        <p>烟斗 (小号)</p>
                        <p>积分：9999</p>
                        <p><span style="font-size: 80%;">市场参考价：9999.00</span></p>
                    </div>
                    <div @click="dsply(9999)">
                        <div>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg">
                        </div>
                        <p>烟斗 (中号)</p>
                        <p>积分：9999</p>
                        <p><span style="font-size: 80%;">市场参考价：9999.00</span></p>
                    </div>
                    <div @click="dsply(9999)">
                        <div>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg">
                        </div>
                        <p>烟斗 (大号)</p>
                        <p>积分：9999</p>
                        <p><span style="font-size: 80%;">市场参考价：9999.00</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            left:0,
            prize:'',
            display: 0,
        }
    },
    methods: {
        btn(){
            this.display = 0
        },
        dsply(i){
            this.display = 1
            this.prize = i
        }
    },
}
</script>
<style>
    p{
        margin: 0;
    }
    .prize{
        width: 100%;
        height: 100%;
    }
    .banner{
        width: 100%;
        height: auto;
        position: relative;
    }
    .banner>img{
        width: 100%;
        height: auto;
    }
    .information{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        color: red;
        background: rgba(0,0,0,.5);
        text-align: left;
        text-indent: 10px;
    }
    .exchange{
        width: 100%;
        height: auto;
        position: relative;
    }
    .top_switch{
        display: flex;
        background-color: #eee;
        position: relative;
        font-size: 20px;    
    }
    .top_switch>p{
        flex: 1 1 auto;
        text-align: center;
        line-height: 60px;
    }
    .fale{
        position: absolute;
        bottom: 0;
        width: 50%;
        height: 2px;
        background-color: red;
        transition: .35s;
    }
    .btm_switch{
        width: 200%;
        overflow: hidden;
        padding: 20xp;
        position: absolute;
        transition: .35s;
        box-sizing: border-box;
    }
    .btm_switch>div{
        width: 50%;
        background-color: #fff;
        float: left;
    }
    .btm_switch>div>div{
        width: 50%;
        float: left;
        text-align: center;
        line-height: 60px;
        color: #08533c;
    }
    .btm_switch>div>div>div{
        height: 220px;
        line-height: 220px;
    }
    .btm_switch>div>div>div>img{
        display: inline-block;
        max-height: 200px;
        max-width: 180px;
        vertical-align: middle;
    }
    .btm_switch>div>div>p{
        width: 100%;
        line-height: 1.5;
        font-size: 22px;
        text-align: center;
     }
     .zezo{
         position: absolute;
         top: 0;
         left: 0;
         background: rgba(0,0,0,.4);
         width: 100%;
         height: 160%;
         transition: .35s;
     }
     .zezo>div{
         width: 420px;
         height: 180px;
         border-radius: 4px;
         background: #fff;
         position: relative;
         left: 50%;
         top: 50%;
         margin-left: -210px;
         margin-top: -290px;
         font-size: 20px;
         transition: .35s;
     }
     .zezo_py{
         padding: 20px;
         line-height: 30px;
     }
    .zezo_py>span{
        color: red;
        
    }
    .zezo_pe{
        padding: 16px;
        overflow: hidden;
    }
    .zezo_pe>span{
        float: right;
        width: 100px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        color: #4caf50;
    }
</style>