/**
 * Created by lill12 on 2016-7-26.
 */
import Vue from 'vue';

new Vue({
    el: '#app',
    // 初始化数据
    data: {
        blurTime: '',
        text1: 'aiden',
        userNames: ['lord'],
        sex: 'female',
        selected1: 'C',
        selected2: ['B','C'],
        selected3: ['sh', 'sz'],
        citys: [{value:'bj', name: '北京'},{value:'sh', name: '上海'},{value:'gz', name: '广州'}, {value:'sz', name: '深圳'}],
        selected4: '',
        pick: '',
        toggle: ''
    },
    // 计算属性定义
    computed: {
        sexName: function(){
            var name = {
                'male': '男',
                'female': '女',
                'unknown': '未知'
            }

            return name[this.sex];
        }
    },
    // 方法定义
    methods: {
        showHello: function(){
            alert('hello');
        },
        showBlur: function(){
            this.blurTime = (new Date()).getTime() + '焦点消失';
        },
        say: function(msg){
            alert(msg);
        }
    }
});

Vue.config.devtools = true;
