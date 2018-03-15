var one = new Vue({
    el:'#app1',
    data:{
        title:"实例1的title"
    },
    methods: {
        greet:function(){
            return 'Hello One!'
        }
    }
});
var two = new Vue({
    el:'#app2',
    data:{
        title:"实例2的title"
    },
    methods: {
        greet: function(){
            one.title = '我已经改名了！'
            return 'hello two !'
        }
    }
});