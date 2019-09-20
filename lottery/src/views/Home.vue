<template>
  <div class="home clearfix">
    <div class="ho_header clearfix">
        <div class="hd_top">
           <div v-show="log_ty">
              <h2 class="hd_hello">{{tim_txt}} 朋友 </h2>
            <div>
              <div class="hd_img">
                <img :src="log.img" alt="" @click="show_hide=!show_hide">
                <div class="show_hide" v-show="show_hide">
                  <div class="trian"></div>
                  <div @click="out_lo">
                    退出登录
                  </div>
                  <div data-toggle="modal" data-target=".bs-example-modal-sm">
                      修改个人信息
                  </div>
                </div>
              </div>
              <p>{{log.name}}</p>
            </div>
           </div>
           <div v-show="!log_ty" class="log_int">
              <p style="line-height: 128px;">您还未 <router-link to="/login">注册/登陆！</router-link> </p>
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
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="login clearfix">
        <h2>修改个人信息!</h2>
        <div class="lo_big">
            <div class="lo_hed">
              <img :src="mo_log.img" alt="">
                
                <input type="file" class="fils" @change="filee($event)">
            </div>
             
           <div class="div1">
                用户名：<input type="text" v-model="mo_log.name">
           </div>
            <div class="div1">
                密码：<input type="text" v-model="mo_log.pass">
            </div>
           
        </div>
        <div class="lo_but" @click="lo_btn">
                确认修改
        </div>
    </div>
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
      //显示隐藏退出登录
      show_hide:false,
      log:{
        img:'',
        name:''
      },
      mo_log:{
        img:'',
        name:'',
        pass:'',
        user:''
      },
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
            if(localStorage.uid){
              this.log.img = JSON.parse(localStorage.uid).img
              this.log.name = JSON.parse(localStorage.uid).name
              this.log_ty = true;
              this.mo_log.user = JSON.parse(localStorage.uid).user
            }else{
              this.log_ty = false;
            }
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
    },
    out_lo(){
      this.$router.push({path:'/login'})
      // localStorage.uid = ''
    },
    //头像上传
     filee(ev){
                var f = ev.target.files[0]
                var d = new FormData();
                d.append('img',f);
                this.$http.post('fileee/file',d,{emulateJSON:true}).then((data)=>{
                    console.log(data)
                    this.mo_log.img = 'http://localhost:8000/images/'+data.data
                })
            },
            lo_btn(){
                this.$http.post('logg/modu',this.mo_log,{emulateJSON:true}).then((data)=>{
                      console.log(data)
                      localStorage.uid = JSON.stringify(data.data.data)
                      console.log(data.data.data.name)
                      this.mo_log.img = data.data.data.img;
                      this.mo_log.name = data.data.data.name;
                      this.mo_log.user = data.data.data.user
                      console.log(this.mo_log.name);
                      window.location.reload()
                })
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
  position: relative;
  background-color: rgb(8, 83, 60);
  }
.ho_header .hd_hello{
    caret-color: #f5f5f5;
    color: #f5f5f5;
    margin:26px 0;
    font-size: 36px;
  }
.ho_header img{
    height: inherit;
    width: inherit;
    background: white;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 10px;
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
.ho_log{
  float:right;
  font-size:30px;
  color:#fff;
  font-weight: bold
}
a{
  color:rgb(47, 144, 255);
}
.show_hide{
  top:-10px;
  position: absolute;
  left:110px;
  font-size: 30px;
  color:#fff;
  background: rgb(177, 177, 177);
  padding: 50px 20px;
  border-radius: 10px;
  width:230px;
}
.show_hide div:last-of-type{
  margin-top:20px;
}
.trian{
  border-style: solid;
  border-width:20px;
  border-color: transparent rgb(177, 177, 177) transparent transparent ;
  position: absolute;
  left: -40px;
  top:20px;
}
.login{
    height:100%;
    background-color: #077552;
    padding-left:10px;
    border-radius: 10px;
    width:100%;
}
.login h2{
    text-align: center;
    margin-top:20px;
}
.lo_big{
    margin-top:20px;
}
.lo_big .div1{
    font-size: 30px;
    margin:20px; 
    color:#ccc;
}
.lo_big input{
    width:60%;
    height: 60px;
    border-radius: 10px;
    border:0;
    border-bottom:2px solid #c8c8c8;
    margin:10px 20px;
    background: rgba(0, 0, 0,0)
}
.lo_hed{
    width:100px;
    height:100px;
    border-radius: 50%;
    background: #fff;
    margin:20px auto;
    position: relative;
}
.lo_hed img{
    width:inherit;
    height:inherit;
    border-radius: 50%;
}
.fils{
    opacity: 0;
    width:50px;
    height:50px;
    border-radius: 50%;
    position: absolute;
    top:0;
    left:0;
}
.lo_but{
    width:300px;
    height:60px;
    background: #4f9c5d;
    border-radius: 20px;
    margin: 20px auto;
    line-height: 60px;
    color:#fff;
    text-align: center
}
.hd_img{
  position: relative;
      height: 1.40625rem;
    width: 1.40625rem;
    margin:0 auto
}

</style>
