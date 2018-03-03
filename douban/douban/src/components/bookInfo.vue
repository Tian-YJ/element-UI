<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <div class="menu">{{book2}}
      <ul>
        <li><img id="bookPic" v-bind:src="book2.image"></li>
      </ul>
     <!--  <img src="../assets/bk.jpg"> -->  
        <ul class="b-info">
       <!--    <li>作者:<a v-on:click='booklist(book2.author)'><span>{{book2.author[0]}}</span></a></li> -->
          <li>出版社：<span>{{book2.publisher}}</span></li>
          <li>出版年：<span>{{book2.pubdate}}</span></li>
          <li>定价：<span>{{book2.price}}</span></li>
          <li>页数：<span>{{book2.pages}}</span></li>
          <li>装帧：<span>{{book2.binding}}</span></li>
          <li>ISBN:<span>isbn</span></li>
        </ul> 
        <div class="intro">
           <h2>内容简介------</h2>
           <div>
             <pre>{{book2.summary}}</pre>
           </div>
           <h2>作者简介</h2>
           <div>
             <!-- <pre>{{book2.author-intro}}</pre> -->
           </div> 
            <h2>目录</h2>
            <div>
              <pre>{{book2.catalog}}</pre>
            </div>
           <h2>豆瓣成员常用的标签(共22个)</h2> 
           <div>
              <ul>
                <li class="paddin_3" v-for="i in book2.tags" >
                  <a class="backColor"v-on:click="booklist(i.title)">{{i.title}}</a>
                </li>
              </ul>
          </div>
        </div> 
    </div>     
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueJsonp from 'Vue-jsonp'
  Vue.use(VueJsonp)

  export default {
    name: 'HelloWorld',
    data () {
      return {
       msg:'手把手教你玩脱口秀',
       param:"",
       book2:''
      }
    },
    beforeCreated:function(){
      var _this = this;
      setInterval(function(){
        _this.param = _this.$route.params.id;
      },20);
    },
    methords:{
      booklist(par){
      this.$router.push({path:'/bookinfo/'+par});
    }
  },
  watch:{
    param(){
      let _this = this;
      _this.param = _this.$route.params.id;
      Vue.jsonp('https://api.douban.com/v2/book/'+_this.param)
      .then(res => {
        _this.book2 = res;
        return;
      }).catch(err => {
        Vue.jsonp('https://api.douban.com/v2/book/isbn/'+_this.param)
        .then(res => {
          _this.book2 = res;
          return;
        }).catch(err => {
          _this.$router.push({path:'/bookinfo/'+_this.param});
          return;  
        });

       });
    }
  }









      /*let id = this.$router.params.id;
      this.$jsonp("https://api.douban.com/v2/book/27622006").then(info => //jsonp跨域
      { 
        _this.param = info;
      })*/
    
  }
</script>


<style scoped>
h1{
  font-weight: normal;
}
.menu{
  border:1px solid green;
}
.b-info{
  float:right;
  margin-right: 870px;
}
h2{
  color:blue;
  font-size: 6px;
}
.intro{
  border:1px solid blue;
}
</style>
