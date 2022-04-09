(function () {
	// 文档加载到页面完毕就会触发
	document.addEventListener('DOMContentLoaded', function () {
		// 写功能模块，尽量都写在立即调用函数里
		var chooseBtn = document.querySelector('.searchBtn')
		// console.log(chooseBtn)
		var chooseArr = ['商品', "专辑", "艺术家"]
		var isShow = false;

		var chooseListDiv;
		chooseBtn.addEventListener('click', function (event) {
			// 阻止冒泡
			event.stopPropagation()
			if (!chooseListDiv) {
				var div = document.createElement('div')
				div.className = 'chooseList';
				chooseArr.forEach(function (item, i) {
					var itemDiv = document.createElement('div');
					itemDiv.className = 'chooseItem';
					itemDiv.innerHTML = item
					div.appendChild(itemDiv)
				})
				chooseBtn.appendChild(div)
				chooseListDiv = div;
				chooseListDiv.style.opacity = '0'
				setTimeout(function () {
					chooseListDiv.style.opacity = '1'
				}, 0)
				// 委托父元素完成选择事件
				div.addEventListener('click', function (event) {
					event.stopPropagation()
					var searchBtnText = document.querySelector('.searchBtn .text');
					searchBtnText.innerHTML = event.target.innerHTML;

					chooseListDiv.style.opacity = '0'
					chooseListDiv.addEventListener('transitionend', function () {
						chooseListDiv.style.display = 'none'
					})
					// chooseListDiv.style.display = 'none'

					// div.parentElement.removeChild(div)
					// 每一次都创建删除，比较消耗性能，display:block/none，就可以实现显示和消失
				})
				document.documentElement.addEventListener('click', function () {
					chooseListDiv.style.opacity = '0'
					chooseListDiv.addEventListener('transitionend', function () {
						chooseListDiv.style.display = 'none'
					})
					// chooseListDiv.style.display = 'none'
				})
			} else {
				chooseListDiv.style.display = "block"
				// 先让他显示，然后进入过渡
				chooseListDiv.style.opacity = "0"
				setTimeout(function () {
					chooseListDiv.style.opacity = '1'
				}, 0)
			}




		})


	})
})()