<template>
  <div class="hello">
    <img src="../assets/bg1.jpg">
    <div class='hd'>
        <h5>新书速递</h5>
        <span class="wd">更多</span>
        <span class="arrow">&gt&gt</span>
    </div>
        <ul>
        <li v-for="c in book2">
          <img :src="c.image" v-on:click="tiao(c.id)">
          <p>{{c.title}}</p>
          <p>{{c.author[0]}}</p>
        </li>       
      </ul> 
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '手把手教你玩脱口秀',    
        book2:[],
        datas:''
      }
    },
    methods:{
      tiao:function(bookid){
        this.$router.push({path:'/bookInfo/' + bookid});
      }
    },
    created:function(){
      var _this = this;
          _this.id=_this.$route.params.book_id;
      this.$jsonp('https://api.douban.com/v2/book/search?q='+'南极').then(info => 
      { 
        _this.book2 = info.books;
        console.log(this.$route);
      }).catch(err =>{
        console.log('error...',err);
      })
    },
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
img{
  margin-top: 20px;
  margin-bottom:50px; 
}
h5{
  font-weight:800;
  display: inline;/*块标签设置为行内样式*/
}
.hd{
  border:1px solid pink;
}
.wd{
  font-size: 3px;
  color:blue;
  margin-left:50px;  
}
.arrow{
  font-weight: 800;  
}

ul li{
  float:left;
}
li{
  margin-left: 50px;
}
</style>
