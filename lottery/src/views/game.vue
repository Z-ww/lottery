<template>
  <div id="game">
    <!--          头部-->
    <header class="clearfix">
      <div>
        <p>上期开奖</p>
        <span>136</span>
      </div>
      <div>
        <p>距01期截止</p>
        <hello-world></hello-world>
      </div>
    </header>

    <!--            选号  走势图-->
    <nav class="clearfix">
      <div class="firter">选号</div>
      <div>走势图</div>
    </nav>

    <!--                玩法    选项-->

    <div class="content">
      <div class="play clearfix">
        <div class="playing" @click="btn2()">玩法： {{lottery}} ✓</div>
        <div class="list" v-if="type">
          <div v-for="(i,index) in arr" @mouseover="num=index" :class="[num==index? 'col':'']" @mouseout="num=8"
               @click="btn1(index)" :key="i">{{i}}
          </div>
        </div>
      </div>

      <div class="game">
        <div class="play_game">
          <div class="showBox">
            <div class="count clearfix">
              <p>和值</p>
              <div class="jiao"></div>
              <p>猜中奖号码相加的和</p>
            </div>
            <div class="show-game">
              <button v-for="(i,index) in count" :key="i+index">
                <div>

                  <span> {{i.figure}}<br>奖励{{i.award}}积分</span>
                </div>
              </button>
              {{count_num}}
            </div>
          </div>
        </div>
      </div>
      <footer class="clearfix">
        <div class="left">
          <p>共0注 <span>0模拟金</span></p>
        </div>
        <div class="right">确定</div>
      </footer>
    </div>

  </div>
</template>

<script>
  import HelloWorld from "../components/HelloWorld"
    export default {
      components:{
          HelloWorld
      },
        data() {
            return {
                arr: ['和值', '三同号', '二同号', '三不同', '二不同'],
                num: 8,
                lottery: '和值',
                type: false,
                count: [
                    {figure: 4, award: '40'},
                    {figure: 5, award: '40'},
                    {figure: 6, award: '40'},
                    {figure: 7, award: '40'},
                    {figure: 8, award: '40'},
                    {figure: 9, award: '40'},
                    {figure: 10, award: '80'},
                    {figure: 11, award: '80'},
                    {figure: 12, award: '80'},
                    {figure: 13, award: '80'},
                    {figure: 14, award: '80'},
                    {figure: 15, award: '80'},
                    {figure: 16, award: '80'},
                    {figure: 17, award: '80'},
                ],
                count_num:[],
            }
        },
        methods: {
            btn1(a) {
                this.lottery = this.arr[a]
                this.type = false
            },
            btn2() {
                this.type = true
            },
        }
    }

    var Game=document.querySelectorAll('.show-game button')
  console.log(Game)
  Game.onclick=function(){
        alert('1')
  }
</script>

<style scoped>
  #game {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }

  header {
    width: 100%;
    height: 110px;
    background-color: #08533c;
  }

  header > div {
    width: 50%;
    height: 100%;
    float: left;
    color: #fff;
    text-align: center;
  }

  header > div:nth-of-type(1) {
    box-sizing: border-box;
    border-right: solid 1px #000;
  }

  header > div p {
    font-size: 16px;
    line-height: 45px;
    margin-top: 5px;
  }

  header > div span {
    font-size: 28px;
    letter-spacing: 10px;
    font-weight: 600;
    margin-left: 10px;
  }

  nav {
    width: 100%;
    background-color: #169967;
  }

  nav > div {
    width: 50%;
    float: left;
    font-size: 18px;
    line-height: 35px;
    color: #ffab00;
    text-align: center;
    box-sizing: border-box;
  }

  .firter {
    border-bottom: solid 2px #ffab00;
  }

  .content {
    width: 100%;
    background-color: #077552;
  }

  .play {
    width: 100%;
    padding: 7px 40px 0;
    box-sizing: border-box;
  }

  .playing {
    padding: 14px 30px;
    font-size: 18px;
    color: #fff;
    background-color: #169967;
    float: left;
    border-radius: 3px;
  }

  .list {
    padding: 8px 0;
    background-color: #fff;
    position: absolute;
    width: 200px;
    border-radius: 3px;
    transition: all 1s;
    z-index: 99;
  }

  .list > div {
    padding: 0 16px;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }

  .list .col {
    background-color: red;
  }

  .game {
    width: 100%;
    height: 900px;
  }

  footer {
    width: 100%;
    height: 65px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
  }

  .left {
    width: 70%;
    height: 100%;
    background-color: #212121;
    float: left;
    text-align: center;
    line-height: 60px;
  }

  .left p {
    font-size: 18px;
    color: #fff;
  }

  .left span {
    font-size: 18px;
    color: #ffc107
  }

  .right {
    width: 30%;
    float: left;
    background-color: #b71c1c;
    text-align: center;
    height: 100%;
    color: #fff;
    line-height: 60px;
  }

  .game {
    padding: 0 20px 0;
  }

  .play_game {
    width: 100%;
  }

  .count {
    margin-top: 20px;
    position: relative;
    margin-bottom: 8px;
  }

  .count p:nth-of-type(1) {
    float: left;
    padding: 5px 6px;
    background-color: #169967;
    color: #7bd6b6;
    font-size: 18px;
    border-radius: 3px 0 0 3px;
    margin-right: 30px;
  }

  .jiao {
    width: 0;
    height: 0;
    border-top: 18px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid #169967;
    position: absolute;
    left: 48px;
    top: 0;
  }

  .count p:nth-of-type(2) {
    font-size: 20px;
    line-height: 33px;
    color: #169967;
  }

  .show-game {
    margin: 0 15%;
    text-align: center;
  }
  .show-game button{
    padding: 0 8px;
    height: 50px;
    background-color: #08533c;
    outline: none;
    margin: 10px;
    border: solid 3px #229474;
    color:#fff;
  }
  .show-game button>div{
    margin: 0 3px;
  }
</style>
