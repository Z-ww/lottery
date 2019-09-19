<template>
    <div class="login clearfix">
        <h2>登陆</h2>
        <div class="lo_big">
            <div class="lo_hed">
                <!-- <img src="" alt=""> -->
                <input type="file" class="fils" @change="filee($event)">
            </div>
           <div class="div1">
                账号：<input type="text" v-model="log.name">
           </div>
            <div class="div2">
                密码：<input type="text" v-model="log.pass">
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                log:{
                    name:'',
                    pass:''
                }
            }
        },
        methods:{
            filee(ev){
                var f = ev.target.files[0]
                var d = new FormData;
                d.append('img',f);
                this.$http.post('fileee/file',d,{
                    headers:'multipart/form-data'
                }).then((data)=>{
                    console.log(data)
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
.lo_big .div{
    font-size: 30px;
    margin:20px; 
}
.lo_big input{
    width:60%;
    height: 60px;
    background: #c8c8c8;
    border-radius: 10px;
    border:0;
    margin:10px;
}
.lo_hed{
    width:100px;
    height:100px;
    border-radius: 50%;
    background: #fff;
    margin:20px auto;
}
.fils{
    opacity: 0;
    width:50px;
    height:50px;
    border-radius: 50%;
}
</style>