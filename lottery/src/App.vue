<template>
  <div id="app">
  	<router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<style>
.clearfix::after,
.clearfix::before{
content:'';
display:table;
}
.clearfix::after{
clear:both;
}
.clearfix{
zoom:1;
}
*{margin:0;padding:0;}
html,body{
  height:100%;
}
#app{
  height:100%;
}
a{
  text-decoration: none
}
</style>
