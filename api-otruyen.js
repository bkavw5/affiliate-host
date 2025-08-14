(function() {
    const adUrl = "https://s.shopee.vn/4VJb58jLIX";
    const delayFirstClick = 5000; // 5 giây
    const repeatInterval = 30000; // 30 giây để test lại nhanh
    const storageKey = "lastPopunderTime";

    let startTime = Date.now();

    document.addEventListener("click", function() {
        let now = Date.now();

        // Chưa đủ 5 giây thì bỏ qua
        if (now - startTime < delayFirstClick) return;

        // Kiểm tra thời gian lần mở gần nhất
        let lastTime = parseInt(localStorage.getItem(storageKey) || "0");
        if (now - lastTime < repeatInterval) return;

        // Mở popunder ngay trong click → ít bị chặn hơn
        let win = window.open(adUrl, "_blank");
        if (win) {
            try {
                win.blur();
                window.focus();
            } catch (e) {}
        }

        localStorage.setItem(storageKey, now.toString());
    });
})();
