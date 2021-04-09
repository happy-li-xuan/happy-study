<template>
  <div class="shouye">
    <div class="one">
    <div class="content">
        <div class="l-pic-index"></div>
        <div class="r-pic-index"></div>
        <div class="l-bg-index"></div>
        <div class="r-bg-index"></div>
        <div class="main-index">
            <!-- <h1 class="title"><img src="./img/intro-title.png" alt=""></h1> -->
	            <p class="intro-text">
	                传统文化如民族的灵魂，蕴含着不屈的希望与力量；传统文化是民族发展的原动力，给人勇攀高峰的动力与毅力。
                  而如今，不论是小学还是中学，不论是语文还是历史，都离不开传统文化。
                  每个教材都有与其相关的历史与文化。
                  那么今天就让我们一起学习一下有关于官职的大学问吧！
	            </p>
              <p class="intro-text">
                 <router-link :to="{path:'profitable'}" target="_blank">点击开始学习</router-link>
              </p>
            
        </div>
    </div>
    <div class="ww"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import profitable from '../components/profitable'
 $(document).ready(function(){
        //卷轴展开效果
        $(".l-pic-index").animate({'left':'95px','top':'-4px'},1300);
        $(".r-pic-index").animate({'right':'-23px','top':'-5px'},1450);
        $(".l-bg-index").animate({'width':'433px','left':'73px'},1500);
        $(".r-bg-index").animate({'width':'433px','right':'-38px'},1500,function(){
            $(".main-index").fadeIn(800);
        });
    });
export default {
   components: {
     profitable
   }
}
</script>

<style scoped>
.ww{
    margin-top: -5.25rem;
    width: 6.5rem;
    height: 10rem;
    background-image: url('../assets/ww.gif');
    background-repeat: no-repeat;
}
.shouye{
    position:relative;
    height: 12.5rem;
    background: #6f0b02;
    overflow: hidden;
}
.one,ul,li,p,h1,h2,h3,h4,h5{
    margin:0;
    padding:0;
    font-size:100%;
}
.shouye{
    font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', SimSun, 'Segoe UI', Tahoma, Helvetica, Sans-Serif;
    font-size: 14px;
    background: #6f0b02;
}
button,input,select,textarea{
    font-family: inherit;
    font-size: 100%;
    margin: 0;
}
button,
.shouye input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
}
li{
    list-style: none;
}
a{
    text-decoration:none;
    color:#000;
    background: transparent;
}
a:focus{
    outline: none;
}
img{
    border:0;
}

.fl{
    float: left;
}
.fr{
    float: right;
}
.center{
    width: 1000px;
    margin: 0 auto 0;
}
/*content*/
.content{
    position:relative;
    width: 900px;
    height: 460px;
    margin: 0 auto;
    margin-top: 2.25rem;
}
.l-pic-index{
	/*display:none;*/
    position: absolute;
    left: 400px;
    top: 1px;
    z-index:2;
    width:50px;
    height:460px;
    background: url('../assets/j1.png') no-repeat right 0;
}
.r-pic-index{
	/*display:none;*/
    position: absolute;
    right: 400px;
    top: 0;
    z-index: 2;
    width:50px;
    *width:82px;
    height:460px;
    background: url("../assets/j4.png") no-repeat left 0;
}
.l-bg-index{
    position: absolute;
    top: -3px;
    left: 430px;
    z-index: 1;
    width: 25px;
    height: 459px;
    background: url("../assets/j2.png") right 0 no-repeat;
}
.r-bg-index{
    position: absolute;
    top:-4px;
    right: 430px;
    z-index: 1;
    width: 25px;
    height: 459px;
    background: url("../assets/j3.png") 0 0 no-repeat;
}
.main-index{
    display: none;
    overflow: hidden;
    zoom:1;
    position: absolute;
    z-index: 5;
    width:530px;
    height:280px;
    left:145px;
    top:90px;
    color: #2e2e2e;
}
.intro-text{
    margin: 10px 0 0 44px;
    line-height: 1.8;
    text-indent: 30px;
}
</style>