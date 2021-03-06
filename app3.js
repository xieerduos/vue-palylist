// 实例化vue对象

new Vue({
    el: "#vue-app",
    data: {
        age: 30,
        x:0,
        y:0
    },
    methods: {
        logName: function(){
            console.log("你正在输入名字！")
        },
        logAge: function(){
            console.log("你正在输入年龄！")
        },
    }
});

/**
 * el: element 需要获取有的元素，一定是html中的根容器元素
 * data: 用于存储数据
 * methods: 用户存储各种方法。
 * data-bind: 给属性绑定对应的值
 */