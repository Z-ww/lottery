<template>

	<div class="application">
		<router-link to='game'>
			<button class="btn1" @click="btn1"><div class="btn"> + 继续选号</div></button>
		</router-link>
		<div class="printer"></div>
		<div class="paper" v-for="i,index in xiazhu">
			<div style="width:10%;text-align: center;" @click="btn(index)">删除</div>
			<div>
				<div id="shuzi"><span style="margin-left:5px;" v-for="a,index in i">{{a.figure}}</span></div>
				<div>{{i.title}}{{i.figure}}注{{len*2}}模拟金</div>
				<div id="">
					{{i.length}}
				</div>
			</div>
		</div>
			<div class="side"></div>
			
		<div class="foor">
			<div class="foor-left">共计{{bt1/2}}注</div>
			<div class="foor-rigth" @click="btt()">投注</div>
		</div>
		<div v-if="a" class="tan" @click="bt">
			<div class="sss" :style="{'transform':'scale('+as+')'}" >
				<div style="height: 60px;">
					 共选中{{bt1/2}}注，合计{{bt1}}模拟金，确认支付吗？
				</div>
					<button class="btn1 b" @click="a=!a"><div>取消</div></button>
					<button class="btn1 b" @click="a=!a"><div>确定</div></button>
					
			</div>
		</div>
	</div>

</template>
<script>

	export default {
		name: 'help',
		data() {
			return {
				a:false,
				ddd:true,
				s:1,
				ss:1.2,
				as:[],
				xiazhu:'',
				len:','
			}
		},
		created(){
			this.xiazhu = this.$store.state.setcount_num
			this.len=this.xiazhu.length
			console.log(this.xiazhu)
		},
		computed:{
			bt1(){
				var a = '';
				this.xiazhu.forEach((a1,b)=>{
					a =a1.length + Number(a)
				})
				return a * 2
			}
		},
		methods: {
			btn(i) {
				this.xiazhu.splice(i,1)
				
				this.ddd=!this.ddd
			},
			btn1() {
				console.log(1) //跳回前一页
			},
			btt(){
				this.a=!this.a
				this.as = this.s
			},
			bt(){
				this.as = this.ss
				setTimeout(()=>{
					this.as = this.s
				},100)
			}

		}

	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}

	.sss{
		position:absolute;
		top:50%;
		left:50%;
		width:300px;
		height: 160px;
		margin-left:-100px;
		margin-top:-100px;
		text-align:center;
		background:#fff;
		color: #000;
		box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
	}
	.tan{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 999;
		top:0px;
		left: 0px;
		background:rgba(0,0,0,.5);
	}

	.foor{
		width:100%;
		position: fixed;
		z-index: 44;
		bottom:0px;
		left: 0px;
		background:#000000;
		text-align: center;
	}
	.foor-left{
		float: left;
		width: 75%;
		padding:20px;
		box-sizing: border-box;
		color: #fff;
	}
	.foor-rigth{
		float: right;
		width: 25%;
		background: #EE9900;
		padding:20px;
		box-sizing: border-box;
	}

	.application {
		text-align: left;
		margin: 0 auto;
		min-height: 100vh;
		max-width: 900px;
		background-color: #FFECEC;
		padding: 5px 10px;
		position: relative;
	}

	.btn {
		padding:5px;
		color: #3190E8;
		border: 1px solid #3190E8;
		background: #FFECEC;
		font-size:24px;
		border-radius:0;
	}

	.btn1 {
		border-style: none;
		margin-bottom: 10px;
	}

	.printer {
		height: 16px;
		width: 100%;
		background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAoAAMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9yP8AhXlmP+Wf6mihvi/oe7/j6/8AHTRQB5T/AMI1cr/yxaivWZNLXeflX8qKAN99N3NRRRQB/9k=);
		background-size: auto 100%;
		position: relative;
		background-repeat: repeat-x;
	}

	:after,
	:before {
		text-decoration: inherit;
		vertical-align: inherit;
		box-sizing: inherit
	}

	.printer:after,
	.printer:before {
		content: "";
		display: inline-block;
		width: 16px;
		height: 100%;
		position: absolute;
		top: 0;
		background-size: auto 100%;
		background-repeat: no-repeat;
	}

	.printer:before {
		left: 0;
		background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAoABIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9wNRvGRliiG6V+ntUlt4MF6u66/eM3fpUnhSz+33s1w3zbmwv0rrFRbaPJwFA5NAHK/8ACurT/nn+tFaz+MNNRypuI8qcHmigDhNO+J3/AAitusf2TzNvfdjNSav8YLjxHo00Nva+RJJ+7Uhs8msDxhpjQXsi44z8v0qn4bh3XEaH/norflQBTbwpqTNkxyZPJ5or26GyUwr8q9B2ooA5nxFoa6tb5X/WL0965i00prDVI/MXa28CiigD12CAeQn+6KKKKAP/2Q==);
	}

	.printer:after {
		right: 0;
		background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAoABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9xbjwWtiu61HlsPxzUWnXjNI0MwxKn61taN4z03xK/l2s6yNjoRis3xXZ/Y7qG4T5drfN9KAPKbGebw7q0cyFleFwSAa7bVfiK2vW5tza7Sy/e3Vyl9am51WRAP4+a09CsTd6soXlQQD9BQBYltGnvpo4I/nZjk5610PhzQ/7Jh3NjzG6+1FFAH//2Q==);
		background-position: 100%;
	}
	/*.paper{border-top:1px solid;margin: 0 6px;background:#fff;box-sizing:border-box;line-height: 24px;}*/

	.paper {
		display: flex;
		margin: 0 6px;
		background: #fff;
		box-sizing: border-box;
		line-height: 40px;
	}

	.side {
		margin: 0 6px;
		height: 5px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALtJREFUeNqs0jEKwjAYBeDXCuqg6CYeQ2/giTyAi57GzVEcnFx17KxLwUEEG0VElPj+mmCIFdT2wQdpSV7TtIHWOgZQwzMh1c14RXOK6Epl6lCPumaOIo1XTtDv2VGfWoQMbRrQMWNtOiFxrsdU+VDka9LM61NwnjT5ssi3cAuDdJvAmRp0w++RdfY7qNDcHP1ZJkloaMYl2fLGnAdyqNJd3lZ2OKUD8uVCS/vfRSgma1u4L6hwK+f5EGAAL9kqUo/kzGYAAAAASUVORK5CYII=);
		background-size: auto 148%;
		background-repeat: repeat-x;
	}
	.b{
		color: #008000;
		background: #fff;
		border-style: none;
		text-align: center;
		margin-left:20px;
		padding: 5px;
		box-sizing: border-box;
	}
	.active{
		background:orange;
	}
</style>
