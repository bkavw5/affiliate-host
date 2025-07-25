// Hiển thị affiliate box
document.write(`
  <div id='vuukle-wrapper'></div>  
  <div class='vuukle-affiliate-box mobile-only' style='margin:16px 0;'>
    <a href='https://shorten.asia/PV7J8kXk' rel='nofollow' target='_blank'>
      <img alt='Shopee Banner' src='https://img.pikbest.com/templates/20240717/latest-product-catalog-banners-decorate-shopee_10672816.jpg!w700wp' style='width:100%; border-radius:6px;'/>
      <p style='font-size:13px;margin:6px 0 0;'>🛒 Ưu đãi độc quyền cho người dùng Shopee!</p>
    </a>
  </div>
  <style>@media(min-width:768px){.mobile-only{display:none!important}}</style>
`);

// Cấu hình Vuukle nếu đúng hostname và path
(function () {
  const hostnameOK = location.hostname === "www.animet.click";
  const pathOK = location.pathname.includes("xem-phim");

  if (hostnameOK && pathOK) {
    const wrapper = document.getElementById("vuukle-wrapper");
    if (!wrapper) return;

    // Tạo các thẻ Vuukle
    const sharebar = document.createElement("div");
    sharebar.className = "vuukle-sharebar";

    const emote = document.createElement("div");
    emote.id = "vuukle-emote";

    const comments = document.createElement("div");
    comments.id = "vuukle-comments";

    // Chèn vào wrapper
    wrapper.appendChild(sharebar);
    wrapper.appendChild(emote);
    wrapper.appendChild(comments);

    // Cấu hình Vuukle
    window.VUUKLE_CONFIG = {
      apiKey: "7962e11f-971d-4456-be50-32e9c9d6546c",
      host: "anim2t.blogspot.com",
      articleId: location.pathname,
      img: "",
      tags: "",
      url: location.href,
      title: document.title,
      author: "string",
      language: "en",
      recommendedArticles: false,
      globalRecommendations: false,
      wideImages: false,
      comments: {
        enabled: true,
        editorOptions: [
          "bold", "italic", "underline", "url",
          "blockquote", "code", "list", "image", "gif"
        ],
        transliteration: {
          language: "vn",
          enabledByDefault: false
        },
        commentingClosed: false,
        countToLoad: 5
      },
      emotes: {
        enabled: true,
        disable: [5, 6]
      },
      sharebar: {
        enabled: true,
        verticalPosition: "10px",
        mode: "horizontal"
      }
    };

    // Nạp Vuukle script
    const s = document.createElement("script");
    s.src = "https://cdn.vuukle.com/platform.js";
    (document.head || document.body).appendChild(s);
  }
})();
