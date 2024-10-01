// 監聽所有 nav-link 點擊事件
document.querySelectorAll(".nav-link").forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // 移除所有 nav-link 的 active 類
    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.classList.remove("active");
    });
    // 為點擊的 nav-link 添加 active 類
    navLink.classList.add("active");
  });
});
