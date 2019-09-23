<template>
    <div class="login clearfix">
        <h2>请您登陆！</h2>
        <div class="lo_big">
            <div class="lo_hed">
                <img :src="log.img" alt="">
                <input type="file" class="fils" @change="filee($event)">
            </div>
             <div class="div1">
                账号：<input type="text" v-model="log.user">
            </div>
           <div class="div1">
                用户名：<input type="text" v-model="log.name">
           </div>
            <div class="div1">
                密码：<input type="text" v-model="log.pass">
            </div>
           
        </div>
        <div class="lo_but" @click="lo_btn">
                点击登陆！
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                log:{
                    name:'22',
                    pass:'22',
                    img:'',
                    user:''
                }
            }
        },
      
        methods:{
            filee(ev){
                var f = ev.target.files[0]
                var d = new FormData();
                d.append('img',f);
                this.$http.post('fileee/file',d,{emulateJSON:true}).then((data)=>{
                    console.log(data)
                    this.log.img = 'http://localhost:3000/images/'+data.data
                })
            },
            lo_btn(){
                this.$http.post('logg/usee',this.log,{emulateJSON:true}).then((data)=>{
                    var datas = data.data
                    if(datas.type == '1' || datas.type == '2'){
                         localStorage.uid = JSON.stringify(datas.data);
                       this.$router.push({path:'/'})
                    }else{
                       alert(datas.data)
                    }
                })
            }
        }
}
</script>
<style scoped>
.login{
    height:100%;
    background-color: #077552;
    padding-left:10px;
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
</style>