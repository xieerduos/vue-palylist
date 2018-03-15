// 实例化vue对象

new Vue({
    el: "#vue-app",
    data: {
        name: "谢耳朵",
        job: "web开发",
        website: "https://www.baidu.com",
        websiteTag:"<a href='https://www.baidu.com'>websiteTag</a>"
    },
    methods: {
        greet: function(time){
            return 'Good  ' + time + ' ' + this.name + '!';
        }
    }
});

/**
 * el: element 需要获取有的元素，一定是html中的根容器元素
 * data: 用于存储数据
 * methods: 用户存储各种方法。
 * data-bind: 给属性绑定对应的值
 */