
var app = new Vue({
    el: '#app',
    data: {
        toPageNum: '',
        imgFilter: true,
        menuFlag: false
    },
    methods: {
        toPage() {
            if (this.toPageNum < 1) return
            if (location.pathname == '/') {
                this.toPageNum = '/gif/' + this.toPageNum
            }
            location.replace(this.toPageNum)
        },
        showMenu() {
            this.menuFlag = ! this.menuFlag
        },
        cancel() {
            this.menuFlag = false
        }
    },
    created() {
        document.querySelector('.to_list').style.display = 'block'
    }
})