let btnHome = document.querySelector("#btnHome")
btnHome.onclick = function () {
    console.log("首页导航被点击")
}

let searchWord = document.querySelector("#searchWord")
searchWord.onkeyup = function () {
    console.log("已经改变" + searchWord.value)
}


window.onload = function () {
    console.log("页面已经加载完成")
}


document.onreadystatechange = function () {
    let loading = document.querySelector("#loading")
    if (document.readyState == "complete") {
        loading.style.display = "none"
        console.log("加载完成")
    } else {
        loading.style.display = "block"
    }
}