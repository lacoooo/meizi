
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
                else if (this.url == 'gif2') all = 172
                else if (this.url == 'gif3') all = 365
                else if (this.url == 'pic') all = 1002
                else if (this.url == 'pic2') all = 1169

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
        },
        initImage() {
            var imgs = document.querySelectorAll('.mmgif')
            var len = imgs.length
            var index = 0
            setInterval(function() {
                if (index < len) {
                    imgs[index].src = imgs[index].dataset.src
                }
                index++
            }, 700)
        }
    },
    created() {
        document.querySelector('.to_list').style.display = 'block'
    },
    mounted() {
        this.url = document.getElementById('url').innerHTML
        this.initImage()
    }
})