<template>
 <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
  <mu-paper :z-depth="1" class="demo-list-wrap">
    <mu-appbar color="primary">
      <mu-button icon slot="left">
        <mu-icon value="person_pin"></mu-icon>
      </mu-button> 
  
       <mu-text-field placeholder="请输入姓名或电话号码"></mu-text-field> 
      <mu-button icon slot="right">
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </mu-appbar>
 
    <mu-list textline="two-line" toggle-nested>
      <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div  v-for="(item, index) in proCopyright">
          <mu-list-item button :ripple="false" nested :open="false" @toggle-nested="open = ''">
            <mu-list-item-content>
              <mu-list-item-title>{{item.platNumber}}</mu-list-item-title>
              <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">{{item.bookerMobile}}</mu-list-item-sub-title>
              <mu-list-item-sub-title>
               物流单号：47834412121
              </mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>已支付</mu-list-item-after-text>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>

            <!-- 子列表，要显示的-->
            <mu-list-item button :ripple="false" slot="nested">
               <mu-list-item-content>

                <mu-list-item-sub-title>SHIJIAN ——> qidjskfnjdjnfdgjnfjgn</mu-list-item-sub-title>
                <mu-list-item-sub-title>SHIJIAN ——> qidjskfnjdjnfdgjnfjgn</mu-list-item-sub-title>
                <mu-list-item-sub-title>SHIJIAN ——> qidjskfnjdjnfdgjnfjgn</mu-list-item-sub-title>

              </mu-list-item-content>
           </mu-list-item>

        </mu-list-item>

        <mu-divider></mu-divider>
      </div>
 
    </v-loadmore>

    </mu-list>
  </mu-paper>
 </div> 
</template>

<script>
  import {Loadmore} from 'mint-ui';
export default {
    components:{
      'v-loadmore':Loadmore,
    },
  data () {
    return {
      pageNo:1,
      pageSize:3,
      proCopyright:[],
      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      totalpage:0,
      loading:false,
      bottomText: '',

      value:""
    }
  },
  mounted(){
    this.loadPageList();  //初次访问查询列表
  },
  methods:{
    loadBottom:function() {
      // 上拉加载
      this.more();// 上拉触发的分页查询
     // this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
    },
    loadPageList:function (){
      // 查询数据
      this.$api.get('/list?pageSize='+this.pageSize+'&currentPage='+this.pageNo , null, r => {
        console.log(r);
         this.proCopyright = r.list;
         this.totalpage = r.pages;
         if(this.totalpage == 1){
            this.allLoaded = true;
        }

          this.$nextTick(function () {
          // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
         this.scrollMode = "touch";
          this.isHaveMore();
        });
        
      })

    },
    more:function (){
      // 分页查询
      if(this.totalpage == 1){
        this.pageNo = 1;
        this.allLoaded = true;
      }else{
        this.pageNo = parseInt(this.pageNo) + 1;
        this.allLoaded = false;
      }

      console.log(this.pageNo);

      this.$api.get('/list?pageSize='+this.pageSize+'&currentPage='+this.pageNo , null, r => {
        console.log(r);
         this.proCopyright =  this.proCopyright.concat(r.list);
    
        console.log(this.proCopyright);
        this.isHaveMore();
        
      })


    },
    isHaveMore:function(){
      // 是否还有下一页，如果没有就禁止上拉刷新
      //this.allLoaded = false; //true是禁止上拉加载
      if(this.pageNo == this.totalpage){
        this.allLoaded = true;
      }
    }
  },
}
</script>

<style scoped>
  @import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';


.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  /*overflow: hidden;*/
}
.mu-input-content{
    width:80%;
}
.mu-text-field-input{
  margin-left: 5px;
  background: #fff;
    border-radius: 9px;
    width: 60%;
   
}
</style>