var s_Cart=new Vue({
    el:"#shoppingCart",
    data:{
      items:[
        {
          no:1,
          name:'item1',
          pri:6000,
          cnt:1
        },
        {
          no:2,
          name:'item2',
          pri:8050,
          cnt:1
        },
        {
          no:3,
          name:'item3',
          pri:4567,
          cnt:1
        }
      ],
    },
    methods:{
      totalCost:function(){
        var sum=0;
        var len=this.items.length;
        for(var i=0;i<len;i++){
          sum+=this.items[i].pri*this.items[i].cnt;
        }
        return sum;
      }
    }, 
  });