<template>
  <div class="home clearfix">
    <div class="ho_header clearfix">
        <div class="hd_top">
           <div v-show="log_ty">
              <h2 class="hd_hello">{{tim_txt}} 朋友</h2>
            <div>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540139703196&di=e4cd33a4c426a158199be6b7b9ece9ac&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F31%2F87%2F96573b585a7c9c4.jpg" alt="">
              <p>用户名</p>
            </div>
           </div>
           <div v-show="!log_ty" class="log_int">
              <p>您还未 <router-link to="/login">注册/登陆！</router-link> </p>
           </div>
        </div>
        <div class="hd_bo clearfix">
            <div class="bo_money"> <span>{{bo_money}}</span> 模拟金</div>
            <div class="bo_inte"> <span>{{bo_inte}}</span> 兑换</div>
        </div>
    </div>
    
    <div class="ho_three">
        <div v-for="(i,index) in three" :key="i+index">
              <div class="ho_in">
                <img :src="i.icon" alt="">
                <p>{{i.name}}</p>
              </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data(){
    return {
      bo_money:0, //模拟金
      bo_inte:0, //兑换
      tim_num:0, //事件
      tim_txt:'', //早中晚
      log_ty:false, 
      three:[
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
          {icon:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',name:'河北快3'},
      ]
    }
  },
  created(){
    this.timer()
  },
  methods:{
    timer(){
        var date=new Date();
        this.tim_num = date.getHours();
        console.log(this.tim_num)
        if(this.tim_num >=6 && this.tim_num<= 8){
            this.tim_txt = '早上好!'
        }else if(this.tim_num >=8 && this.tim_num<= 11){
          this.tim_txt = '上午好'
        }else if(this.tim_num>=11 && this.tim_num <=12){
          this.tim_txt = '中午好!'
        }else if(this.tim_num <=13 && this.tim_num >=18){
          this.tim_txt = '下午好!'
        }else{
          this.tim_txt = 'hei~啦!'
        }
    }
  }
}
</script>
<style scoped>
*{margin:0;padding:0;}

.home{
      height: 100%;
     background-color: #077552;
}
.hd_top{
  min-height: 200px;
}
.ho_header{
  text-align: center;
  background-color: rgb(8, 83, 60);
  }
.ho_header .hd_hello{
    caret-color: #f5f5f5;
    color: #f5f5f5;
    margin:16px 0;
    font-size: 36px;
  }
.ho_header img{
    height: 90px;
    width: 90px;
    border-radius: 50%;
}
.hd_top p{
  font-size:26px;
  margin-bottom:6px;
  color:#fff;
}
.hd_bo{
  color:#fff;
  font-size:25px;
      background-color: rgb(7, 74, 53);
}
.hd_bo span{
  color: #ffab00
}
.bo_money,.bo_inte{
  float:left;
  width:50%;
  text-align: center;
  line-height: 86px;
}
.ho_three{
  margin-top:20px;
}
.ho_three img{
  width:110px;
  height:110px;
  border-radius: 50%;
 
}
.ho_three .ho_in{
 width:25%;
 float:left;
 text-align: center;
 color: #48b892;
 font-size: 28px;

}
.ho_in p{
  margin: 10px 0;
}
.log_int p{
  line-height: 100px;
  font-size: 30px;
}
a{
  color:rgb(47, 144, 255);
}
</style>
