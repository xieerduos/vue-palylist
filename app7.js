// 实例化vue对象

new Vue({
    el: "#vue-app",
    data: {
        changeColor: false,
        changeLength:false
    },
    computed:{
        compClasses:function(){
            return {
                changeColor:this.changeColor,
                changeLength:this.changeLength
            }
        }
    }
});

/**
 * el: element 需要获取有的元素，一定是html中的根容器元素
 * data: 用于存储数据
 * methods: 用户存储各种方法。
 * data-bind: 给属性绑定对应的值
 */