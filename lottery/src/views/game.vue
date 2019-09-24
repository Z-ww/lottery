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
      <div @click="table=true" :class="[table==true?'firter':'']">选号</div>
      <div @click="table=false" :class="[table==false?'firter':'']">走势图</div>
    </nav>

    <!--                玩法    选项-->

    <div class="content" v-if="table==true">
      <div class="play clearfix">
        <div class="playing" @click="btn2()">玩法： {{lottery}} ✓</div>
        <div class="list" v-show="type==true">
          <div v-for="(i,index) in arr" @mouseover="num=index" :class="[num==index? 'col':'']" @mouseout="num=8"
               @click="btn1(index)">{{i}}
          </div>
        </div>
      </div>

      <div class="game">
        <div class="play_game">

          <!--                                 和值-->
          <div class="showBox" v-if="lottery=='和值'">
            <div class="count clearfix">
              <p>和值</p>
              <div class="jiao"></div>
              <p>猜中奖号码相加的和</p>
            </div>
            <div class="show-game">
              <button v-for="(i,index) in count" @click="btn3(index)" :class="[i.type==true?'btn_game':'']">
                <div>

                  <span> {{i.figure}}<br>奖励{{i.award}}积分</span>
                </div>
              </button>
            </div>
          </div>

          <!--                                三同号-->

          <div class="showBox" v-if="lottery=='三同号'">
            <div class="count clearfix">
              <p>三同号</p>
              <div class="jiao"></div>
              <p>猜中豹子号 (三个响同号)</p>
            </div>
            <div class="show-game">
              <button v-for="(i,index) in threenot" @click="btn3(index)" :class="[i.type==true?'btn_game':'']">
                <div>
                  <span> {{i.figure}}<br>奖励{{i.award}}积分</span>
                </div>
              </button>
            </div>
            <div class="count clearfix">
              <p>三同号通选</p>
              <div class="jiao"></div>
              <p>猜中豹子号 (三个响同号)</p>
            </div>
            <div class="show-game">
              <button v-for="(i,index) in threeall" class="one" @click="btn4(index)" :class="[i.type==true?'btn_game':'one']">
                <div>
                  <span> {{i.figure}}<br>任意一个豹子号开出即中{{i.award}}积分</span>
                </div>
              </button>
            </div>
          </div>

          <!--                          二同号-->

          <div class="showBox" v-if="lottery=='二同号'">
            <div class="count clearfix">
              <p>二同号单选</p>
              <div class="jiao"></div>
              <p>选择同号和不同号的组合，奖励80积分</p>
            </div>
            <div class="show-game">
              <p>同号</p>
              <button v-for="(i,index) in twoRadio" v-if="index<6" @click="btn3(index)" :class="[i.type==true?'btn_game':'']">
                <div>
                  <span> {{i.figure}}</span>
                </div>
              </button>
            </div>
            <div class="show-game">
              <p>不同号</p>
              <button v-for="(i,index) in twoRadio" v-if="index>=6" @click="btn3(index)" :class="[i.type==true?'btn_game':'']">
                <div>
                  <span> {{i.figure}}</span>
                </div>
              </button>
            </div>
            <div class="count clearfix">
              <p>二同号复选</p>
              <div class="jiao"></div>
              <p>猜开奖中的2个指定的相同号码，奖励15积分</p>
            </div>
            <div class="show-game">
              <button v-for="(i,index) in twoall" @click="btn4(index)" :class="[i.type==true?'btn_game':'']">
                <div>
                  <span> {{i.figure}}</span>
                </div>
              </button>
            </div>
          </div>

          <!--                                三不同-->
          <div class="showBox" v-if="lottery=='三不同'">
            <div class="count clearfix">
              <p>三不同号</p>
              <div class="jiao"></div>
              <p>猜开奖的三个不同号码，奖励40积分</p>
            </div>
            <div class="show-game">
              <button v-for="(i,index) in threedifflt" @click="btn3(index)" :class="[i.type==true?'btn_game':'']">
                <div>
                  <span> {{i.figure}}<br></span>
                </div>
              </button>
            </div>
            <div class="count clearfix">
              <p>三连号</p>
              <div class="jiao"></div>
              <p>123,234,345,456，任一开出即中10积分</p>
            </div>
            <div class="show-game">
              <button v-for="(i,index) in threemark" class="one" @click="btn4(index)" :class="[i.type==true?'btn_game':'one']">
                <div>
                  <span> {{i.figure}}<br>任意一个豹子号开出即中{{i.award}}积分</span>
                </div>
              </button>
            </div>
          </div>
          <!--                                  二不同-->

          <div class="showBox" v-if="lottery=='二不同'">
            <div class="count clearfix">
              <p>二不同号</p>
              <div class="jiao"></div>
              <p>猜开奖中的2个指定的不同号码，奖励8积分</p>
            </div>
            <div class="show-game">
              <button v-for="(i,index) in twodifilt" @click="btn3(index)" :class="[i.type==true?'btn_game':'']">
                <div>

                  <span> {{i.figure}}</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

<!-- 走势图-->
    <div class="thred" v-if="table==false">
      <div class="thead">
        <ul class="clearfix">
          <li class="max">期次</li>
          <li class="max">开奖号</li>
          <li class="max">大小</li>
          <li class="max">单双</li>
          <li class="min">1</li>
          <li class="min">2</li>
          <li class="min">3</li>
          <li class="min">4</li>
          <li class="min">5</li>
          <li class="min">6</li>
        </ul>
      </div>

      <div class="trend">
        <ul v-for="(i,index) in trend" class="clearfix head">
          <li class="max">{{index+1}}期</li>
          <li class="max">{{i.for_no.split(',')[0]+i.for_no.split(',')[1]+i.for_no.split(',')[2]}}</li>
          <li class="max">{{Number(i.for_no.split(',')[0])+Number(i.for_no.split(',')[1])+Number(i.for_no.split(',')[2])>9?'大':'小'}}</li>
          <li class="max">{{(Number(i.for_no.split(',')[0])+Number(i.for_no.split(',')[1])+Number(i.for_no.split(',')[2]))%2==0?'双':'单'}}</li>
          <li class="min" v-for="a in 6" :class="[Number(i.for_no.split(',')[0])==a? Number(i.for_no.split(',')[0])==Number(i.for_no.split(',')[1])?Number(i.for_no.split(',')[0])==Number(i.for_no.split(',')[2])?'three':'two':'art':'',Number(i.for_no.split(',')[1])==a?Number(i.for_no.split(',')[1])==Number(i.for_no.split(',')[2])?'two':'art':'',Number(i.for_no.split(',')[2])==a?'art':'']"><span>{{a}}</span></li>

        </ul>
      </div>
    </div>

    <div style="height:39px;"></div>
    <footer class="clearfix">
      <div class="left">
        <p>共{{fuch}}注 <span>{{integral}}模拟金</span></p>
      </div>
      <div class="right" @click="btn5()">
        确定
      </div>
    </footer>
  </div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld"

    export default {
        components: {
            HelloWorld
        },
        data() {
            return {
                arr: ['和值', '三同号', '二同号', '三不同', '二不同'],
                num: 8,
                lottery: '和值',
                type: false,
                table: true,
                trend: '',//走势图信息
                // 和值
                count: [
                    {title: '和值', figure: 4, award: '40',type:false,},
                    {title: '和值', figure: 5, award: '40',type:false,},
                    {title: '和值', figure: 6, award: '40',type:false,},
                    {title: '和值', figure: 7, award: '40',type:false,},
                    {title: '和值', figure: 8, award: '40',type:false,},
                    {title: '和值', figure: 9, award: '40',type:false,},
                    {title: '和值', figure: 10, award: '80',type: false,},
                    {title: '和值', figure: 11, award: '80',type: false,},
                    {title: '和值', figure: 12, award: '80',type: false,},
                    {title: '和值', figure: 13, award: '80',type: false,},
                    {title: '和值', figure: 14, award: '80',type: false,},
                    {title: '和值', figure: 15, award: '80',type: false,},
                    {title: '和值', figure: 16, award: '80',type: false,},
                    {title: '和值', figure: 17, award: '80',type: false,},
                ],
                // 三同号
                threenot: [
                    {title: '三同号单选' ,figure: 111, award: '240',type: false,},
                    {title: '三同号单选' ,figure: 222, award: '240',type: false,},
                    {title: '三同号单选' ,figure: 333, award: '240',type: false,},
                    {title: '三同号单选' ,figure: 444, award: '240',type: false,},
                    {title: '三同号单选' ,figure: 555, award: '240',type: false,},
                    {title: '三同号单选' ,figure: 666, award: '240',type: false,},
                ],
                threeall: [
                    {title: '三同号通选', figure: '三同号通选', award: '40',type:false,},
                ],

                // 二同号
                twoRadio:[
                    {title: '二同号单选', figure: 11, award: '80',type: false, place: 1,},
                    {title: '二同号单选', figure: 22, award: '80',type: false, place: 2,},
                    {title: '二同号单选', figure: 33, award: '80',type: false, place: 3,},
                    {title: '二同号单选', figure: 44, award: '80',type: false, place: 4,},
                    {title: '二同号单选', figure: 55, award: '80',type: false, place: 5,},
                    {title: '二同号单选', figure: 66, award: '80',type: false, place: 6,},
                    {title: '二同号单选', figure: 1, award: '80',type: false, place: 1,},
                    {title: '二同号单选', figure: 2, award: '80',type: false, place: 2,},
                    {title: '二同号单选', figure: 3, award: '80',type: false, place: 3,},
                    {title: '二同号单选', figure: 4, award: '80',type: false, place: 4,},
                    {title: '二同号单选', figure: 5, award: '80',type: false, place: 5,},
                    {title: '二同号单选', figure: 6, award: '80',type: false, place: 6,},
                ],
                twoall: [
                {title: '二同号复选', figure: '11*', award: '15',type: false,},
                {title: '二同号复选', figure: '22*', award: '15',type: false,},
                {title: '二同号复选', figure: '33*', award: '15',type: false,},
                {title: '二同号复选', figure: '44*', award: '15',type: false,},
                {title: '二同号复选', figure: '55*', award: '15',type: false,},
                {title: '二同号复选', figure: '66*', award: '15',type: false,},
                ],
                // 三不同
                threedifflt: [
                    {title: '三不同号', figure: 1, award: '80',type:false,},
                    {title: '三不同号', figure: 2, award: '80',type:false,},
                    {title: '三不同号', figure: 3, award: '80',type:false,},
                    {title: '三不同号', figure: 4, award: '80',type:false,},
                    {title: '三不同号', figure: 5, award: '80',type:false,},
                    {title: '三不同号', figure: 6, award: '80',type:false,},
                ],
                threemark: [
                    {title: '三连号通选', figure: '三连号通选', award: '10',type:false,},
                ],

                // 二不同

                twodifilt: [
                    {title: '二不同号' ,figure: 1, award: '8',type:false,},
                    {title: '二不同号' ,figure: 2, award: '8',type:false,},
                    {title: '二不同号' ,figure: 3, award: '8',type:false,},
                    {title: '二不同号' ,figure: 4, award: '8',type:false,},
                    {title: '二不同号' ,figure: 5, award: '8',type:false,},
                    {title: '二不同号' ,figure: 6, award: '8',type:false,},
                ],

                count_num: [],
                up_num:[],
            }
        },
        methods: {
            btn1(a) {
                this.lottery = this.arr[a]
                this.type = false
                this.count_num=[]
                this.up_num=[]
                this.count=[
                    {title: '和值', figure: 4, award: '40',type:false,},
                    {title: '和值', figure: 5, award: '40',type:false,},
                    {title: '和值', figure: 6, award: '40',type:false,},
                    {title: '和值', figure: 7, award: '40',type:false,},
                    {title: '和值', figure: 8, award: '40',type:false,},
                    {title: '和值', figure: 9, award: '40',type:false,},
                    {title: '和值', figure: 10, award: '80',type: false,},
                    {title: '和值', figure: 11, award: '80',type: false,},
                    {title: '和值', figure: 12, award: '80',type: false,},
                    {title: '和值', figure: 13, award: '80',type: false,},
                    {title: '和值', figure: 14, award: '80',type: false,},
                    {title: '和值', figure: 15, award: '80',type: false,},
                    {title: '和值', figure: 16, award: '80',type: false,},
                    {title: '和值', figure: 17, award: '80',type: false,},
                ]//和值
                this.threenot=[
                    {title: '三同号单选', figure: 111, award: '240',type: false,},
                    {title: '三同号单选', figure: 222, award: '240',type: false,},
                    {title: '三同号单选', figure: 333, award: '240',type: false,},
                    {title: '三同号单选', figure: 444, award: '240',type: false,},
                    {title: '三同号单选', figure: 555, award: '240',type: false,},
                    {title: '三同号单选', figure: 666, award: '240',type: false,},
                ]//三同号
                this.threeall=[
                    {title: '三同号通选', figure: '三同号通选', award: '40',type:false,},
                ]//三同号通选
                this.twoRadio=[
                    {title: '二同号单选', figure: 11, award: '80',type: false, place: 1,},
                    {title: '二同号单选', figure: 22, award: '80',type: false, place: 2,},
                    {title: '二同号单选', figure: 33, award: '80',type: false, place: 3,},
                    {title: '二同号单选', figure: 44, award: '80',type: false, place: 4,},
                    {title: '二同号单选', figure: 55, award: '80',type: false, place: 5,},
                    {title: '二同号单选', figure: 66, award: '80',type: false, place: 6,},
                    {title: '二同号单选', figure: 1, award: '80',type: false, place: 1,},
                    {title: '二同号单选', figure: 2, award: '80',type: false, place: 2,},
                    {title: '二同号单选', figure: 3, award: '80',type: false, place: 3,},
                    {title: '二同号单选', figure: 4, award: '80',type: false, place: 4,},
                    {title: '二同号单选', figure: 5, award: '80',type: false, place: 5,},
                    {title: '二同号单选', figure: 6, award: '80',type: false, place: 6,},
                ]//二同号 上
                this.twoall=[
                    {title: '二同号复选', figure: '11*', award: '15',type: false,},
                    {title: '二同号复选', figure: '22*', award: '15',type: false,},
                    {title: '二同号复选', figure: '33*', award: '15',type: false,},
                    {title: '二同号复选', figure: '44*', award: '15',type: false,},
                    {title: '二同号复选', figure: '55*', award: '15',type: false,},
                    {title: '二同号复选', figure: '66*', award: '15',type: false,},
                ]//二同号  下
                this.threedifflt=[
                    {title: '三不同号', figure: 1, award: '80',type:false,},
                    {title: '三不同号', figure: 2, award: '80',type:false,},
                    {title: '三不同号', figure: 3, award: '80',type:false,},
                    {title: '三不同号', figure: 4, award: '80',type:false,},
                    {title: '三不同号', figure: 5, award: '80',type:false,},
                    {title: '三不同号', figure: 6, award: '80',type:false,},
                ]// 三不同
                this.threemark=[
                    {title: '三连号通选', figure: '三连号通选', award: '10',type:false,},
                ]//三不同通选
                this.twodifilt=[
                    {title: '二不同号' ,figure: 1, award: '8',type:false,},
                    {title: '二不同号' ,figure: 2, award: '8',type:false,},
                    {title: '二不同号' ,figure: 3, award: '8',type:false,},
                    {title: '二不同号' ,figure: 4, award: '8',type:false,},
                    {title: '二不同号' ,figure: 5, award: '8',type:false,},
                    {title: '二不同号' ,figure: 6, award: '8',type:false,},
                ]//二不同
            },
            btn2() {
                this.type = true
            },
            btn3(a){
                if(this.lottery=='和值'){
                    if(this.count[a].type==false){
                        this.count[a].type=true
                        this.$set(this.count_num,this.count_num.length,this.count[a])
                    }else{
                        this.count_num.splice(this.count_num.length-1,1)
                        this.count[a].type=false

                    }
                }else if(this.lottery=='三同号'){
                    if(this.threenot[a].type==false){
                        this.threenot[a].type=true
                        this.$set(this.count_num,this.count_num.length,this.threenot[a])
                    }else{
                        this.count_num.splice(this.count_num.length-1,1)
                        this.threenot[a].type=false
                    }
                }else if(this.lottery=='二同号'){

                    if(this.twoRadio[a].type==false){
                        if(this.count_num.length==0){
                            this.twoRadio[a].type=true
                            this.$set(this.count_num,this.count_num.length,this.twoRadio[a])
                        }else{
                            for(let j=0;j<this.count_num.length;j++){
                                if(this.twoRadio[a].place==this.count_num[j].place){
                                    this.count_num[j].type=false
                                    this.count_num.splice(this.count_num[j],1)

                                    this.twoRadio[a].type=true
                                    this.$set(this.count_num,this.count_num.length,this.twoRadio[a])
                                }else{
                                    this.twoRadio[a].type=true
                                    this.$set(this.count_num,this.count_num.length,this.twoRadio[a])
                                }
                            }
                        }
                    }else{
                        this.count_num.splice(this.count_num.length-1,1)
                        this.twoRadio[a].type=false
                    }

                }else if(this.lottery=='三不同'){
                    if(this.threedifflt[a].type==false){
                        this.threedifflt[a].type=true
                        this.$set(this.count_num,this.count_num.length,this.threedifflt[a])
                    }else{
                        this.count_num.splice(this.count_num.length-1,1)
                        this.threedifflt[a].type=false
                    }
                }else if(this.lottery=='二不同'){
                    if(this.twodifilt[a].type==false){
                        this.twodifilt[a].type=true
                        this.$set(this.count_num,this.count_num.length,this.twodifilt[a])
                    }else{
                        this.count_num.splice(this.count_num.length-1,1)
                        this.twodifilt[a].type=false
                    }
                }
            },
            btn4(a){
                if(this.lottery=='三同号'){
                    if(this.threeall[a].type==false){
                        this.threeall[a].type=true
                        this.$set(this.up_num,this.up_num.length,this.threeall[a])
                    }else{
                        this.up_num.splice(this.up_num.length-1,1)
                        this.threeall[a].type=false
                    }
                }else if(this.lottery=='三不同'){
                    if(this.threemark[a].type==false){
                        this.threemark[a].type=true
                        this.$set(this.up_num,this.up_num.length,this.threemark[a])
                    }else{
                        this.up_num.splice(this.up_num.length-1,1)
                        this.threemark[a].type=false
                    }
                }else if(this.lottery=='二同号'){
                    if(this.twoall[a].type==false){
                        this.twoall[a].type=true
                        this.$set(this.up_num,this.up_num.length,this.twoall[a])
                    }else{
                        this.up_num.splice(this.up_num.length-1,1)
                        this.twoall[a].type=false
                    }
                }

            },
            btn5(){

                if(this.lottery=='和值'){
                    if(this.count_num.length!=0||this.up_num.length!=0){
                        this.store()
                        this.$router.push('/he')
                        console.log(this.$store)
                    }else{
                        alert('至少选择一注选号')
                    }
                }else if(this.lottery=='三同号'){
                    if(this.count_num.length!=0||this.up_num.length!=0){
                        this.store()
                        this.$router.push('/he')
                        console.log(this.$store)
                    }else{
                        alert('至少选择一注选号')
                    }
                }else if(this.lottery=='三不同'){
                    if(this.count_num.length>=3||this.up_num.length!=0){
                        this.store()
                        this.$router.push('/he')
                        console.log(this.$store)
                    }else{
                        alert('至少选择一注选号')
                    }
                }else if(this.lottery=='二不同'){
                    if(this.count_num.length>=2||this.up_num.length!=0){
                        this.store()
                        this.$router.push('/he')
                        console.log(this.$store)
                    }else{
                        alert('至少选择一注选号')
                    }
                }
            },
            store(){
                this.$store.commit('getcount_num',this.count_num)
                this.$store.commit('getup_num',this.up_num)
            }
        },
        mounted(){
            this.$http.get('txtss/textt').then((data)=>{
                this.trend=data.data
                console.log(data)
            })
        },
        computed:{
            //几注
            fuch(){
                if(this.lottery=='和值'){
                    return this.count_num.length
                }else if(this.lottery=='三同号'){
                    return this.count_num.length+this.up_num.length
                }else if(this.lottery=='三不同'){

                    if(this.count_num.length<3){
                        return this.up_num.length
                    }else if(this.count_num.length==3){
                        return 1+this.up_num.length
                    }else if(this.count_num.length==4){
                        return 4+this.up_num.length
                    }else if(this.count_num.length==5){
                        return 10+this.up_num.length
                    }else if(this.count_num.length==6){
                        return 20+this.up_num.length
                    }
                }else if(this.lottery=='二不同'){
                    if(this.count_num.length<2){
                        return 0;
                    }else if(this.count_num.length==2){
                        return 1
                    }else if(this.count_num.length==3){
                        return 3
                    }else if(this.count_num.length==4){
                        return 6
                    }else if(this.count_num.length==5){
                        return 10
                    }else if(this.count_num.length==6){
                        return 15
                    }
                }

            },
            integral(){
                if(this.lottery=='和值'){
                    return this.count_num.length*2
                }else if(this.lottery=='三同号'){
                    return (this.count_num.length+this.up_num.length)*2
                }else if(this.lottery=='三不同'){
                    return this.fuch*2
                }else if(this.lottery=='二不同'){
                    return this.fuch*2
                }

            }
        }
  }
</script>

<style>
	p,ul{
		margin-bottom: 0px;
	}
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }
  #app{
    background-color: #077552;
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
    opacity: .7;
  }

  .firter {
    opacity: 1;
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


  .btn_game{
    transition: all .5s !important;
    border: solid 3px #ffab00 !important;
    color: #ffab00 !important;
    background-color: #08533c !important;
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
    line-height: 50px;
    font-size: 20px;
    font-weight: 400;
  }

  .list .col {
    background-color: red;
  }

  .game {
    width: 100%;
    padding: 0 20px 0;
    box-sizing: border-box;
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

  /*.jiao {*/
  /*  width: 0;*/
  /*  height: 0;*/
  /*  border-top: 18px solid transparent;*/
  /*  border-bottom: 15px solid transparent;*/
  /*  border-left: 20px solid #169967;*/
  /*  position: absolute;*/
  /*  left: 48px;*/
  /*  top: 0;*/
  /*}*/

  .count p:nth-of-type(2) {
    font-size: 20px;
    line-height: 33px;
    color: #169967;
    float: left;
  }

  .show-game {
    margin: 0 10%;
    text-align: center;
  }

  .show-game p {
    font-size: 20px;
    color: #7bd6b6;
    margin: 5px 0;
  }

  .show-game button {
    width: 130px;
    height: 80px;
    background-color: #08533c;
    outline: none;
    margin: 10px;
    border: solid 3px #229474;
    color: #fff;
  }

  .show-game button > div {
    margin: 0 3px;
    font-size: 18px;
    font-weight: bold;
  }

  .one {
    width: 100% !important;
  }

              /*走势图*/
  .thred{
    width: 100%;
    overflow: hidden;
  }
  .thead{
    width: 100%;
  }
  .thred ul,.trend ul{
    width: 100%;
  }
  li{
    width: 11.111%;
    box-sizing: border-box;
    border-bottom: solid 1px #00422c;
    border-right: solid 1px #00422c;
    float: left;
    list-style: none;
    text-align: center;
    font-weight: bold;
    font-size: 26px;
    color: #48b892;
    line-height:40px;
  }
  .max{
    width: 13%;
  }
  .min{
    font-weight: normal;
    width: 8%;
    font-size: 20px;
  }
  .trend ul:nth-of-type(odd){
    background: #08533c !important;
  }
  .trend ul:nth-of-type(even){
    background: #0b5f45 !important;
  }
  .thred .trend .three span::before,.trend .two span::before{
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 10px;
    display: inline-block;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    right: -5px;
    text-align: center;
  }
  .thred .trend .three span::before{
    content: "3";
  }
  .trend .two span::before{
    content: "2";
  }
  .art span{
   padding: 4px 12px;
    background: red;
    color: #fff;
    border-radius: 50%;
    position: relative;
  }

</style>
