<template>
  <div class='nav'>
      <nav class="navbar navbar-inversem">
          <ul class='fl'>
            <li>豆瓣</li>
            <li>读书</li>
            <li>电影</li>
            <li>音乐</li>
            <li>同城</li>
            <li>小组</li>
            <li>阅读</li>
            <li>FM</li>  
            <li>时间</li>  
            <li>市集</li>  
            <li>更多</li>  
          </ul>
          <ul class='fr'>
            <li>下载豆瓣客户端</li>
            <li>登录</li>
            <li>注册</li>
          </ul>
      </nav>       
    <div class="content">
      <div class="header">
         <div class="col-lg-6">
            <div class="input-group">
               <h2>豆瓣读书</h2>
                <input type="text" class="form-control" placeholder="书名,作者,ISBN">
              <span class="input-group-btn">
                  <button class="btn btn-default" type="button">Search</button>
              </span>
            </div>
        </div>
        <ul class='bm'>
          <li><a href="#">购书单</a></li>
          <li><a href="#">电子图书</a></li>
          <li><a href="#">豆瓣书店</a></li>
          <li><a href="#">2017年度榜单</a></li>
          <li><a href="#">2017读书报告</a></li>
          <li><a href="#">购物车</a></li>
        </ul>
      </div>

    <router-view/>

    <div class="botm">
        <div class="co-info">
          <span>© 2005－2018 douban.com, all rights reserved 北京豆网科技有限公司
          </span>
        </div>
        <ul class="botm-info">
          <li><a href="#">关于豆瓣</a></li>
          <li><a href="#">在豆瓣工作</a></li>
          <li><a href="#">联系我们</a></li>
          <li><a href="#">免费声明</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">移动应用</a></li>
          <li><a href="#">豆瓣广告</a></li>          
        </ul>
    </div>
  </div>
</div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    export default {
      name: 'App'
    }
</script>

<style>
.nav{
  width:100%;
  height:30px;
  background-color:black;
  line-height:30px;
} 
.navbar{
  width:100%;
}
ul{
  list-style: none;
  color:#545652;
}
  .fl>li{
    float:left;
    margin-left: 10px;
    color:white;
    font-size: 10px;
    font-weight:normal;
  }
  .fr>li{
    float:right;
    margin-right: 10px;
    color:white;
    font-size: 10px;
    font-weight:normal;
  }
  h2{
    color:#553B23;
  }
  .co-info{
    margin:0 auto;
    float:left;
  }
  .botm{
    width:100%;
    margin:0 auto;
  }
  .botm-info{
    margin-right:20px; 
    float:right;  
  }
  .botm-info>li{
    margin-left:5px;
    list-style:none;
    float: right;
  }
  .box1{
    width:100px;
    height:100px;
    border:1px solid blue;
    margin-left: 10px;
  }
  .content{
    border:1px solid blue;
    width:1200px;
    height:1200px;
    margin:0 auto;
  }
  h2{
    color:#4D3218;
  }
  .header{
    width:100%;
    height:115px;
    background-color:#F6F6F1; 
    margin:0 auto;
  }
  .bm{
    float:left;
  }
  .bm>li{
    margin-left:10px;
    font-size: 15px;
    float:left;
    width:100px;
    height:8px;
    color:#614E3C;
    margin-top: 10px;
  }
   a hover:{
    text-decoration: none;
    color:#333;
  }
  .botm-info li a hover:{
    text-orientation:none;
    background-color:#614E3C; 
  }
  h4{
    font-family:  SimSun
  }
  .bk-info{
    border:1px solid red;
    margin-top: 50px;
  }
</style>

