// qcsp
(function () {
  function popunder() {
    var lastTime = localStorage.getItem("popunder_time");
    var now = Date.now();
    if (lastTime && now - lastTime < 20 * 60 * 1000) return;

    var links = [
      "https://shorten.asia/PV7J8kXk",
      "https://s.shopee.vn/4VJb58jLIX",
      "https://www.animet.click/",
      "https://doravsub.blogspot.com/",
    ];
    var randomLink = links[Math.floor(Math.random() * links.length)];

    var pop = window.open(randomLink, "_blank");

    if (pop) {
      pop.opener.window.focus(); // Trả lại focus về trang chính
      pop.blur(); // Đẩy cửa sổ popunder xuống dưới
      localStorage.setItem("popunder_time", now);
    }
  }

  function clickHandler() {
    popunder();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.addEventListener("click", clickHandler, true);
    }, 30000);
  });
})();
