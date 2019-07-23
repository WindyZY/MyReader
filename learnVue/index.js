var app=new Vue({
    el:"#app",
    data:{
        message:'<h1>Hello Vue!</h1>',
        msg:'<h1>Hello Vue.js</h1>',
        use:false,
        ok:true,
        id:1,
        seen:true,
        url:'https://github.com',
        sentence:'abcdefg',
        sites:[
            {name:'siteA'},
            {name:'siteB'},
            {name:'sitaC'}
        ],
        object:{
            name:'siteD',
            url:'https://github.com',
            slogan:'github!!!'
        },
        strTest:'Hello World!!!',
        count:1,
        km:0,
        m:0,
        all:false,
        selectedNames:[],
        selectedSources:['A','B','C']
    },
    filters:{
        capitalize:function(value){
            if(!value) return ''
            value=value.toString()
            return value.charAt(0).toUpperCase()+value.slice(1)
        }
    },
    computed:{
        reverseMSG1:function(){
            return this.strTest.split('').reverse().join('');
        }
    },
    methods:{
        reverseMSG:function(){
            this.message=this.message.split('').reverse().join('');
        },
        changeAllSelected:function(){
            if(this.all){
                this.selectedNames=this.selectedSources;
            }else{
                this.selectedNames=[];
            }
        }
    },
    watch:{
        km:function(val){
            this.km=val;
            this.m=this.km*1000;
        },
        m:function(val){
            this.km=val/1000;
            this.m=val;
        },
        "selectedNames":function(){
            if(this.selectedNames.length==this.selectedSources.length){
                this.all=true;
            }else{
                this.all=false;
            }
        }
    }
});

app.$watch('count',function(nval,oval){
    alert("change "+oval+" to "+nval+"!");
});