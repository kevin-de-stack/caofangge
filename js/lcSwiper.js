function lcSwiper (selector, swiperArr) {
	var selectorDiv = document.querySelector(selector);
	selectorDiv.innerHTML = `
	<div class="imgList"></div>
	<div class="swiperBtn">
		<div class="leftBtn"></div>
		<div class="rightBtn"></div>
	</div>
	<div class="circleList"></div>
	`
	var imgListDiv = document.querySelector(selector + ' .imgList');
	swiperArr.forEach(function (item, i) {
		if (item.type == "image") {
			imgListDiv.innerHTML += `
			<div class="imgItem" data-index="${i}">
				<img src="${item.imgSrc}" alt="">
			</div>
			`
		}
		if (item.type == "video") {
			imgListDiv.innerHTML += `
			<div class="imgItem" data-index="${i}">
				<video src="${item.imgSrc}" alt="" loop="loop" autoplay="autoplay" muted>
			</div>
			`
		}

	})

	var currentPage = 0;
	var beforePage = null;
	var afterPage = null;
	var imgList = document.querySelectorAll(selector + ' .imgItem');
	var leftBtn = document.querySelector(selector + ' .leftBtn')
	var rightBtn = document.querySelector(selector + ' .rightBtn')

	leftBtn.onclick = function () {
		beforePage = currentPage;
		currentPage--;
		if (currentPage < 0) {
			currentPage = imgList.length - 1;
		}
		imgList.forEach(function (item, i) {
			if (item.dataset.index == currentPage) {
				item.className = "imgItem leftActive";
				circleList[i].className = "circle active"

			} else if (item.dataset.index == beforePage) {
				imgList[beforePage].className = 'imgItem leftBefore'
				circleList[i].className = "circle"
			} else {
				item.className = "imgItem"
				circleList[i].className = "circle"
			}

		})

	}

	rightBtn.onclick = function () {
		rightPage = currentPage;
		currentPage++;
		if (currentPage == imgList.length) {
			currentPage = 0;
		}
		imgList.forEach(function (item, i) {
			if (item.dataset.index == currentPage) {
				item.className = "imgItem rightActive";
				circleList[i].className = "circle active"

			} else if (item.dataset.index == rightPage) {
				imgList[rightPage].className = 'imgItem rightBefore'
				circleList[i].className = "circle"
			} else {
				item.className = "imgItem"
				circleList[i].className = "circle"
			}

		})

	}


	var circleListDiv = document.querySelector(selector + ' .circleList');
	imgList.forEach(function (item, i) {
		if (i == 0) {
			circleListDiv.innerHTML += ('<div data-index="' + i + '" class="circle active"></div>')
		} else {
			circleListDiv.innerHTML += ('<div data-index="' + i + '" class="circle"></div>')
		}

	})

	var circleList = document.querySelectorAll(selector + ' .circle');
}