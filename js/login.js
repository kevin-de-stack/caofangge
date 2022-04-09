(function () {
	// 文档加载到页面完毕就会触发
	document.addEventListener('DOMContentLoaded', function () {
		// 写功能模块，尽量都写在立即调用函数里
		var qianbaoBtn = document.querySelector('.icon-qianbao')
		// console.log(chooseBtn)
		var zhezhao = document.querySelector('.zhezhao')
		var content = document.querySelector('.loginContent')
		var isShow = false;
		qianbaoBtn.addEventListener('click', function (event) {
			// 阻止冒泡
			isShow = true;
			zhezhao.classList.add('active')
			setTimeout(function () {
				content.style.transform = 'translateX(0)'
			}, 0)

			// debugger
		})

		var close = document.querySelector('.loginContent')
		close.addEventListener('click', function () {
			isShow = false;
			content.style.transform = 'translateX(200px)'


		})
		content.addEventListener('transitionend', function () {
			if (!isShow) {
				zhezhao.classList.remove('active')
			}

		})

	})
})()