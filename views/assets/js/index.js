
var app = new Vue({
    el: '#app',
    data: {
        toPageNum: '',
        imgFilter: true
    },
    methods: {
        toPage() {
            if (this.toPageNum < 1) return
            if (location.pathname == '/') {
                this.toPageNum = '/mmgif/' + this.toPageNum
            }
            location.replace(this.toPageNum)
        },
    },
    mounted() {

    }
})