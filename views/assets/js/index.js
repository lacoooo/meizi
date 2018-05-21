
var app = new Vue({
    el: '#app',
    data: {
        toPageNum: '',
        imgFilter: true,
        menuFlag: false,
        url: ''
    },
    methods: {
        toPage(type) {
            if (!type) {
                if (this.toPageNum < 1) return
                if (location.pathname == '/') {
                    this.toPageNum = '/gif/' + this.toPageNum
                }
                location.replace(this.toPageNum)
            } else if (type == 'random') {
                var all
                if (this.url == 'gif') all = 177
                else if (this.url == 'gif2') all = 365
                else if (this.url == 'pic') all = 1002

                var page = Math.floor(Math.random() * all) + 1
                
                if (location.pathname == '/') {
                    page = '/gif/' + page
                }
                
                location.replace(page)
            }
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
    },
    mounted() {
        this.url = document.getElementById('url').innerHTML
    }
})