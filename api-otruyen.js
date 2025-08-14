// === Tạo HTML + CSS ===
document.body.insertAdjacentHTML('beforeend', `
<div id="sp-banner-container">
    <div id="sp-banner">
        <a id="sp-ad-link" href="https://s.shopee.vn/4VJb58jLIX" target="_blank" rel="noopener noreferrer nofollow">
            <div id="sp-banner-img">
                <div id="sp-rotating-image"></div>
            </div>
        </a>
        <button id="sp-close-btn">✖</button>
    </div>
</div>
<style>
:root {
    --sp-banner-size: 80px;
    --sp-banner-top: 20%;
    --sp-banner-right: 20px;
    --sp-shake-speed: 0.8s;
    --sp-change-interval: 10000;
    --sp-close-delay: 15000;
}
#sp-banner-container { position: fixed; top: var(--sp-banner-top); right: var(--sp-banner-right); z-index: 9999; }
#sp-banner { width: var(--sp-banner-size); height: var(--sp-banner-size); animation: shake var(--sp-shake-speed) cubic-bezier(.36,.07,.19,.97) infinite; position: relative; }
#sp-banner-img { width: 100%; height: 100%; overflow: hidden; }
#sp-rotating-image { width: 100%; height: 100%; background-size: contain; background-repeat: no-repeat; background-position: center; }
#sp-close-btn { position: absolute; top: -8px; right: -8px; background: none; border: none; cursor: pointer; display: none; font-size: 12px; padding: 0; }
@keyframes shake { 10%,90% { transform: translate3d(-1px, 0, 0); } 20%,80% { transform: translate3d(2px, 0, 0); } 30%,50%,70% { transform: translate3d(-4px, 0, 0); } 40%,60% { transform: translate3d(4px, 0, 0); } }
</style>
`);

// === JavaScript xử lý banner ===
const spImages = [
    'https://server.zmedia.vn/static/cdn/sale%20off%2050.png',
    'https://server.zmedia.vn/static/cdn/sale%20off%2040.png',
    'https://server.zmedia.vn/static/cdn/voucher_live_snhxhw.png',
    'https://server.zmedia.vn/static/cdn/cuoi_thang_sale_50.png',
    'https://server.zmedia.vn/static/cdn/bannerfly-4-1698381459.png'
];

let spIndex = 0;
const spImageElement = document.getElementById('sp-rotating-image');
const spCloseButton = document.getElementById('sp-close-btn');
const spAdLink = document.getElementById('sp-ad-link');

spImageElement.style.backgroundImage = `url('${spImages[spIndex]}')`;

function spChangeImage() {
    spIndex = (spIndex + 1) % spImages.length;
    spImageElement.style.backgroundImage = `url('${spImages[spIndex]}')`;
}

setTimeout(() => {
    spCloseButton.style.display = 'flex';
}, parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sp-close-delay')));

setInterval(spChangeImage, parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sp-change-interval')));

spCloseButton.addEventListener('click', () => {
    document.getElementById('sp-banner-container').remove();
});

spAdLink.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('sp-banner-container').remove();
    }, 500);
});
