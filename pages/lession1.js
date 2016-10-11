/**
 * Created by lill12 on 2016-7-26.
 */
import Vue from 'vue';

new Vue({
    el: '#app',
    // 初始化数据
    data: {
        msg: 'hello vue',
        x: 5,
        isA: true,
        isB: false,
        classObj: {
            'class-a': true,
            'class-b': false
        },
        activeColor: 'green',
        fontSize: '16',
        styleObject: {
            color: '#666',
            fontSize: '16px',
            margin: '10px'
        },
        showDiv: true,
        users: [{name:'aiden', age:31}, {name:'lord',age:32}, {name:'reeqi',age:18}]
    },
    // 计算属性定义
    computed: {
        y: function(){
            return this.x * 3 + 2
        }
    },
    // 方法定义
    methods: {
        toggleClass: function(){
            if(this.isA){
                this.isA = false;
                this.isB = true;
            } else {
                this.isA = true;
                this.isB = false;
            }
        }
    }
});

Vue.config.devtools = true;
