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
    }
})