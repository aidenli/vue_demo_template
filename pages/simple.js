import Vue from 'vue' // 1.0.24
// 异步请求资源组件（json，jsonp等）
import VueResource from 'vue-resource'
import CpTest1 from  '../components/cp-test1'
import CpTest2 from  '../components/cp-test2'

new Vue({
    el: '#app',
    // 初始化业务需要的数据，实际项目可以从pageMess拷贝
    data: {
        msg: 'hello vue',
        names: [{
            id: 1,
            name: '小气包'
        }, {
            id: 2,
            name: '大气包'
        }, {
            id: 3,
            name: '大大气包'
        }]
    },
    components: {
        'cp-test1': CpTest1,
        'cp-test2': CpTest2
    }
});

// 打开调试
Vue.config.devtools = true
