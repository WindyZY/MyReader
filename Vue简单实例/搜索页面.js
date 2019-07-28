var app=new Vue({
    el:'#search',
    data:{
        searchString:'',
        articles:[
            {
                title:"What You Need To Know About CSS Variables",
                url:"https://www.runoob.com/css/css-tutorial.html",
                image:"https://static.runoob.com/images/icon/css.png"
            },
            {
                title:"Freebie: 4 Great Looking Pricing Tables",
                url:"https://www.runoob.com/html/html-tutorial.html",
                image:"https://static.runoob.com/images/icon/html.png"
            },
            {
                title:"20 Interesting JavaScript and CSS Libraries for February 2016",
                url: "https://www.runoob.com/css3/css3-tutorial.html",
                image:"https://static.runoob.com/images/icon/css3.png"
            },
            {
                title: "Quick Tip: The Easiest Way To Make Responsive Headers",
                url: "https://www.runoob.com/css3/css3-tutorial.html",
                image: "https://static.runoob.com/images/icon/css3.png"
            },
            {
                title: "Learn SQL In 20 Minutes",
                url: "https://www.runoob.com/sql/sql-tutorial.html",
                image: "https://static.runoob.com/images/icon/sql.png"
            },
            {
                title: "Creating Your First Desktop App With HTML, JS and Electron",
                url: "https://www.runoob.com/js/js-tutorial.html",
                image: "https://static.runoob.com/images/icon/html.png"
            }
        ]
    },
    computed:{
        filteredArticles:function(){
            var articleArr=this.articles;
            var searchString=this.searchString;

            if(!searchString){
                return articleArr;
            }

            searchString=searchString.trim().toLowerCase();

            //JS数组的filter函数对数组进行检测筛选。
            articleArr=articleArr.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString)!=-1){
                    return item;//如果title中含有searchString就返回。
                }
            })

            return articleArr;
        }
    }
})