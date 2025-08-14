(function() {
    // ====== Cấu hình ======
    const adUrl = "https://s.shopee.vn/4VJb58jLIX"; // Link QC
    const delayFirstClick = 5 * 1000; // 5 phút tính bằng ms
    const repeatInterval = 30 * 60 * 1000; // 30 phút tính bằng ms
    const storageKey = "lastPopunderTime"; // LocalStorage key

    let readyToOpen = false;

    // Sau 5 phút kể từ khi vào trang → bật trạng thái sẵn sàng
    setTimeout(() => {
        readyToOpen = true;
    }, delayFirstClick);

    // Lắng nghe click trên trang
    document.addEventListener("click", function() {
        if (!readyToOpen) return; // chưa đủ 5 phút

        let lastTime = localStorage.getItem(storageKey);
        let now = Date.now();

        // Nếu chưa từng mở hoặc đã đủ 30 phút
        if (!lastTime || now - parseInt(lastTime) >= repeatInterval) {
            openPopunder(adUrl);
            localStorage.setItem(storageKey, now.toString());
            readyToOpen = false; // tắt cờ cho tới lần sau
            setTimeout(() => readyToOpen = true, repeatInterval); // bật lại sau 30 phút
        }
    });

    function openPopunder(url) {
        // Tạo popunder (tab mới nhưng đẩy ra sau)
        let win = window.open(url, "_blank");
        if (win) {
            win.blur();
            window.focus();
        }
    }
})();

