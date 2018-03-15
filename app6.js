new Vue ({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        // 每一次触发这里面的方法，都会重新执行这里面的方法

        /*
        addToA: function(){
            console.log('Add to A')
            return this.a + this.age;  
        },
        addToB: function(){
            console.log('Add to B')
            return this.b + this.age;
        }
        */
    },
    computed:{

        // 如果当前变化比较大，就用这个属性
        // 比如搜索，这个只有真正，dom改变会才会执行computed，而methods只有触发，就所有的都会执行。
        // 只有耗时，大量搜索的时候使用computed属性。
        addToA: function(){
            console.log('Add to A')
            return this.a + this.age;  
        },
        addToB: function(){
            console.log('Add to B')
            return this.b + this.age;
        }
    }
})