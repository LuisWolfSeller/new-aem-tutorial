export default async function decorate(block) {
  // 1️⃣  Load Splide's CSS dynamically
  if (!document.querySelector('link[href*="splide.min.css"]')) {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
    document.head.appendChild(css);
  }

  // 2️⃣  Load Splide's JS dynamically
  if (!window.Splide) {
    await new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  }

  // 3️⃣  Build minimal Splide HTML (or transform authored markup)
  block.innerHTML = `
    <div class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide"><div class="img-container"><img src="https://picsum.photos/id/1015/800/400" alt=""></div></li>
          <li class="splide__slide"><div class="img-container"><img src="https://picsum.photos/id/1020/800/400" alt=""></div></li>
          <li class="splide__slide"><div class="img-container"><img src="https://picsum.photos/id/1035/800/400" alt=""></div></li>
        </ul>
      </div>
    </div>
  `;

  // 4️⃣  Initialize Splide
  new Splide(block.querySelector('.splide'), {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
  }).mount();

  console.log('despues del mount')
}