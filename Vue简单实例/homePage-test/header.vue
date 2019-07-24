<template>
    <div id="header">
        <div style="text-align: center;width:20%">
            <img src="logo.png">
            <span>易评</span>
        </div>
        <div id="menu">
            <a href="#">首页</a>
            <a href="#">步骤指引</a>
            <a href="#">联系我们</a>
            <button>登录</button>
            <button>注册</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:'header'
    }
</script>
<style>
    #header{
        width:100%;
        top:0;
        position:sticky;
    }
    #menu{
        margin:10px;
        display: inline-block;
        background-color: rgb(137, 164, 214);
        box-shadow:0 1px 1px #ccc;
        border-radius: 2px;
    }
    #menu a{
        display: block;
        padding:18px 30px;
        float: left;
        color:#fff;
        font-weight: bold;
        font-size:20px;
        text-decoration: none !important;
        line-height: 1;
    }
</style>