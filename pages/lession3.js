/**
 * Created by lill12 on 2016-7-26.
 */
import Vue from 'vue';

// Vue.extend() 组件构造器
var MyComponent = Vue.extend({
    name: 'my-component',
    template: '<div>全局注册组件</div>'
});

var Child = Vue.extend({
    name: 'child-component',
    template: '<div>局部注册组件</div>'
});

//全局注册组件 注册组件必须写在new Vue前面
Vue.component('my-component', MyComponent);

new Vue({
    el: '#app',
    // 初始化数据
    data: {
        gg: '你好，我是变量',
        styleObj : {
            width : '100px',
            height: '200px',
            fontSize: '16px'
        }
    },
    components: {
        'child-component': Child,
        'quick-component': {
            name: 'quick-component',
            template: '<div>不用Vue.component也可以注册组件</div>'
        },
        'prop-component': {
            props: ['msg', 'msg2'],
            template: '<div>从父元素中传递msg的值：{{msg}}，也可以是一个变量: {{msg2}}</div>'
        },
        'prop2-component': {
            props: ['style'],
            template: '<div><div v-bind:style="style">我是接收复杂类型参数的组件</div><div><input v-model="style.width" /></div></div>'
        }
    },
    // 计算属性定义
    computed: {

    },
    // 方法定义
    methods: {

    }
});

Vue.config.devtools = true;
