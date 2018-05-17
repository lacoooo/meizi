// ;(
    // function () {
        
        var toPageButton = document.querySelector('.button.confirm')
        toPageButton.addEventListener('click', function() {
            var toPageNum = document.querySelector('.current input').value
            if (!toPageNum) return
            location.replace(toPageNum)
        }, false)

    // })()