(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const o=e=>{const i={manufacturing:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V8l5 3V8l5 3V8l6 4v8H4Z" fill="currentColor"/>
        <path d="M6 20v-5h3v5M11 20v-3h3v3M16 20v-4h2v4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    `,strength:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 13.5 11 8l2 3 4-5 0 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 20h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,absorption:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3s5 6 5 10a5 5 0 1 1-10 0c0-4 5-10 5-10Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M7 15c2 2 8 2 10 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    `,brass:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,size:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18V6h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M6 17 17 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,density:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18V6h14v12H5Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M8 14h8M8 10h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,edges:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7h12l-3 3H9L6 7Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M6 17h12l-3-3H9l-3 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      </svg>
    `,shape:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="7" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M7 12h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,color:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M7.5 14.5c1.2-2.3 2.4-3.5 4.5-3.5s3.3 1.2 4.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `,environment:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 4c-6 0-11 4.5-11 10 0 3.3 2.2 5 4.5 5 4.5 0 7.5-3.5 7.5-8.5V4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M7 18c2.5-2 5.5-4.5 10-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `};return i[e]??i.shape},k=[{file:"/1.jpg",label:"1"},{file:"/2.jpg",label:"2"},{file:"/3.heic",label:"3"},{file:"/4.heic",label:"4"},{file:"/5.heic",label:"5"}],w=e=>{const i=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="Ferro Blocks gallery placeholder ${e}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f7efe6"/>
          <stop offset="100%" stop-color="#dfb48c"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" rx="44" fill="url(#bg)"/>
      <rect x="120" y="126" width="960" height="548" rx="36" fill="rgba(255,255,255,0.4)"/>
      <text x="600" y="380" text-anchor="middle" fill="#7c3b1d" font-size="64" font-family="Arial, sans-serif" font-weight="700">Gallery Image ${e}</text>
      <text x="600" y="450" text-anchor="middle" fill="#5f4434" font-size="28" font-family="Arial, sans-serif">Replace this placeholder with your photo</text>
    </svg>
  `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}`},d=document.querySelector("#app"),x=`
  <div class="page-shell">
    <header class="topbar">
      <div class="brand">
        <div>
          <p class="eyebrow">Construction material supply</p>
          <h1>Ferro Blocks</h1>
        </div>
      </div>
      <nav class="nav">
        <a href="#benefits">Benefits</a>
        <a href="#timeline">Timeline</a>
        <a href="#comparison">Comparison</a>
        <a href="/machines" data-route-link>Machines</a>
        <a href="#about">About</a>
        <a href="#enquiry">Enquiry</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="hero-kicker">Manufacturer of CSEB bricks</p>
          <h2>Build stronger, cooler, and greener with Ferro Blocks.</h2>
          <p class="hero-text">
            Ferro Blocks manufactures Compressed Stabilized Earth Blocks for sustainable
            construction. We supply bricks designed for dependable strength, lower energy use,
            and a cleaner building process.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#enquiry">Send enquiry</a>
            <a class="btn secondary" href="#comparison">See comparison</a>
          </div>
          <div class="hero-metrics">
            <article>
              <strong>2021</strong>
              <span>Inception</span>
            </article>
            <article>
              <strong>2024</strong>
              <span>Scaled supply</span>
            </article>
            <article>
              <strong>CSEB</strong>
              <span>Eco brick focus</span>
            </article>
          </div>
        </div>

        <div class="hero-visual">
          <div class="image-card image-card-large">
            <img src="/stack1.png" alt="Stack of Ferro Blocks CSEB bricks on the main page" />
          </div>
          <div class="floating-note">
            <span>Factory-ready production</span>
            <strong>Consistent output. Reliable delivery.</strong>
          </div>
        </div>
      </section>

      <section class="section grid-two" id="factory">
        <div>
          <p class="section-tag">Factory picture</p>
          <h3>Built around disciplined production and consistent quality.</h3>
          <p class="section-text">
            The factory workflow is designed for repeatable brick dimensions, stable curing,
            and dependable batch quality for site execution.
          </p>
        </div>
        <div class="panel">
          <ul class="checklist">
            <li>Controlled mixing for stable block performance</li>
            <li>Uniform compression for accurate dimensions</li>
            <li>Careful curing for dependable strength gain</li>
            <li>Supply support for builders, contractors, and developers</li>
          </ul>
        </div>
      </section>

      <section class="section" id="products">
        <div class="section-heading">
          <p class="section-tag">Brick pictures</p>
          <h3>Product visuals that show the texture and character of CSEB blocks.</h3>
        </div>
        <div class="product-grid">
          <article class="brick-card">
            <div class="brick-visual">
              <img src="/brick1.png" alt="Individual Ferro Blocks CSEB brick" />
            </div>
            <div>
              <h4>Individual brick</h4>
              <p>A close look at the Ferro Blocks CSEB brick, shown as a standalone product image.</p>
            </div>
          </article>
          <article class="brick-card">
            <div class="brick-visual">
              <img src="/stack1.png" alt="Stack of Ferro Blocks CSEB bricks" />
            </div>
            <div>
              <h4>Stacked bricks</h4>
              <p>The stack image highlights product storage, handling, and supply readiness.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="section carousel-section" id="gallery">
        <div class="section-heading">
          <p class="section-tag">Images</p>
          <h3>Images</h3>
        </div>
        <div class="carousel" data-carousel>
          <div class="carousel-viewport">
            <div class="carousel-track">
              ${k.map(e=>{const i=w(e.label);return`
                    <article class="carousel-slide">
                      <div class="carousel-media">
                        <img
                          src="${e.file}"
                          data-fallbacks="${e.file}|${i}"
                          alt="Ferro Blocks gallery image ${e.label}"
                        />
                      </div>
                      <div class="carousel-caption">
                        <span>Image ${e.label}</span>
                        <strong>Ferro Blocks visual ${e.label}</strong>
                      </div>
                    </article>
                  `}).join("")}
            </div>
          </div>
          <div class="carousel-controls">
            <button class="carousel-button" type="button" data-carousel-prev aria-label="Previous image">
              Previous
            </button>
            <div class="carousel-dots" aria-label="Gallery navigation">
              ${k.map((e,i)=>`
                    <button
                      class="carousel-dot ${i===0?"is-active":""}"
                      type="button"
                      data-carousel-dot="${i}"
                      aria-label="Go to image ${e.label}"
                    ></button>
                  `).join("")}
            </div>
            <button class="carousel-button" type="button" data-carousel-next aria-label="Next image">
              Next
            </button>
          </div>
        </div>
      </section>

      <section class="section" id="benefits">
        <div class="section-heading">
          <p class="section-tag">Green product</p>
          <h3>Ferro Blocks - A Green Product.</h3>
        </div>
        <p class="section-text">
          Know the 10 key reasons CSEB bricks outperform traditional burnt bricks in strength,
          water absorption, stability, cost, size uniformity, and environmental impact.
        </p>
        <div class="benefit-grid reason-grid">
          <article>
            <h4>1. Stronger blocks</h4>
            <p>Strength improves from 0.5 MPa in traditional burnt brick to 5.4 MPa in CSEB.</p>
          </article>
          <article>
            <h4>2. Less water absorption</h4>
            <p>Up to 8% absorption only, reducing dampness, leakage risk, and durability issues.</p>
          </article>
          <article>
            <h4>3. Modern stabilization</h4>
            <p>Cement-based, machine-pressed production is a more effective method than kiln firing.</p>
          </article>
          <article>
            <h4>4. Better masonry economy</h4>
            <p>400 bricks per brass can save up to 20% in masonry cost versus 600 burnt bricks with breakage.</p>
          </article>
          <article>
            <h4>5. Uniform size</h4>
            <p>Uniform dimensions like 6×4×9 and 4×3×9 support cleaner, faster construction.</p>
          </article>
          <article>
            <h4>6. Smooth wall finish</h4>
            <p>Uniform blocks help create smooth walls with reduced reliance on plaster.</p>
          </article>
          <article>
            <h4>7. Better aesthetics</h4>
            <p>Sharp edges and an earthy color create a cleaner appearance than blunt, irregular burnt bricks.</p>
          </article>
          <article>
            <h4>8. Cleaner density control</h4>
            <p>Weight density of 18.5 kN/m³ is considered in structural design, typically around 20 kN/m³.</p>
          </article>
          <article>
            <h4>9. Eco-friendly production</h4>
            <p>100% pollution-free output makes CSEB a responsible alternative to fired brick manufacturing.</p>
          </article>
          <article>
            <h4>10. More durable performance</h4>
            <p>Lower dampness, tighter joints, and cleaner brick geometry support long-term durability.</p>
          </article>
        </div>
      </section>

      <section class="section" id="timeline">
        <div class="section-heading">
          <p class="section-tag">Timeline</p>
          <h3>From inception in 2021 to a stronger supply base in 2024.</h3>
        </div>
        <div class="timeline">
          <article>
            <span>2021</span>
            <h4>Inception</h4>
            <p>Ferro Blocks was established with a focus on sustainable brick manufacturing.</p>
          </article>
          <article>
            <span>2022</span>
            <h4>Process refinement</h4>
            <p>Production workflow and curing discipline were strengthened for better consistency.</p>
          </article>
          <article>
            <span>2023</span>
            <h4>Market trust</h4>
            <p>Supply relationships expanded with builders seeking efficient masonry materials.</p>
          </article>
          <article>
            <span>2024</span>
            <h4>Scaled delivery</h4>
            <p>Operations matured into a reliable material supply stream for construction demand.</p>
          </article>
        </div>
      </section>

      <section class="section" id="comparison">
        <div class="section-heading">
          <p class="section-tag">Comparison</p>
          <h3>Normal burnt bricks vs CSEB bricks.</h3>
        </div>
        <p class="section-text">
          Water absorption is up to 8% only in CSEB bricks, helping reduce dampness, prevent
          leakage, and improve durability in masonry work.
        </p>
        <div class="comparison-actions">
          <button class="comparison-toggle" type="button" aria-pressed="true">
            Show balanced view
          </button>
          <span class="comparison-hint">Click to focus the CSEB column and compare side by side.</span>
        </div>
        <div class="comparison-table comparison-table--highlight-cseb">
          <div class="row head">
            <div>Criterion</div>
            <div>Burnt bricks</div>
            <div class="cseb-head">CSEB bricks</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("manufacturing")}</span><span>Manufacturing</span></div>
            <div>Only kiln-fired</div>
            <div>Cement-based, machine-pressed</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("strength")}</span><span>Strength</span></div>
            <div>0.5 MPa</div>
            <div>5.4 MPa</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("absorption")}</span><span>Water absorption</span></div>
            <div>20% to 30%</div>
            <div>Up to 8% only</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("brass")}</span><span>Bricks per brass</span></div>
            <div>600 bricks with breakage</div>
            <div>400 bricks, up to 20% cost saving</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("size")}</span><span>Size in inches</span></div>
            <div>6×3.5×8.5, 4×2.5×9</div>
            <div>6×4×9, 4×3×9</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("density")}</span><span>Density</span></div>
            <div>16.5 kN/m³</div>
            <div>18.5 kN/m³, typically designed at ~20 kN/m³</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("edges")}</span><span>Edges</span></div>
            <div>Blunt</div>
            <div>Sharp, neat finish</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("shape")}</span><span>Shape</span></div>
            <div>Irregular</div>
            <div>Uniform, smooth wall friendly</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("color")}</span><span>Color</span></div>
            <div>Black spots, debris visible</div>
            <div>Clean, attractive earthy color</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${o("environment")}</span><span>Environment</span></div>
            <div>Causes air pollution during firing</div>
            <div>100% pollution-free, eco-friendly</div>
          </div>
        </div>
      </section>

      <section class="section split" id="about">
        <div class="about-card">
          <p class="section-tag">About us</p>
          <h3>Ferro Blocks is a material supply partner for practical, modern construction.</h3>
          <p>
            We manufacture construction-grade CSEB bricks with a focus on quality, delivery,
            and product consistency. Our goal is to support builders with a dependable supply
            option that fits both performance and sustainability goals.
          </p>
          <p>
            From residential projects to larger developments, Ferro Blocks aims to supply a
            brick that helps reduce waste, improve build quality, and support responsible
            construction.
          </p>
        </div>

        <form class="enquiry-card" id="enquiry">
          <p class="section-tag">Enquiry form</p>
          <h3>Request a quote or product details.</h3>
          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Phone number
            <input type="tel" name="phone" placeholder="+91 ..." required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Project details
            <textarea name="message" rows="4" placeholder="Tell us about your site requirement" required></textarea>
          </label>
          <button class="btn primary submit-btn" type="submit">Submit enquiry</button>
          <p class="form-note">We&apos;ll treat this as a front-end enquiry form and route it to your sales channel later.</p>
        </form>
      </section>
    </main>
  </div>
`,C=[{id:1,title:"Hydraulic Press",description:"Core machine for compressing stabilized earth blocks with consistent pressure.",specs:["Block compression","Uniform density","High output stability"]},{id:2,title:"Pan Mixer",description:"Blends soil, sand, and cement to prepare a consistent mix for pressing.",specs:["Material mixing","Batch consistency","Low wastage"]},{id:3,title:"Soil Crusher",description:"Breaks down raw material to create the right particle size for production.",specs:["Raw soil prep","Crushing stage","Finer feed quality"]},{id:4,title:"Pallet Trolley",description:"Moves freshly pressed bricks safely for drying, stacking, and dispatch.",specs:["Brick handling","Site movement","Safer logistics"]},{id:5,title:"Curing Rack",description:"Holds blocks during curing so strength and finish develop correctly.",specs:["Controlled curing","Stack storage","Quality support"]},{id:6,title:"Demoulding Setup",description:"Helps release finished bricks cleanly without damaging edges or shape.",specs:["Clean release","Sharp edges","Shape retention"]}],S=(e,i)=>{const s=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720" role="img" aria-label="${e}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f5e8db"/>
          <stop offset="100%" stop-color="#dfb18a"/>
        </linearGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#334155"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="960" height="720" rx="36" fill="url(#bg)"/>
      <rect x="92" y="108" width="776" height="456" rx="28" fill="rgba(255,255,255,0.42)"/>
      <g transform="translate(170 164)">
        <rect x="36" y="240" width="544" height="40" rx="20" fill="#8b5e3c"/>
        <rect x="86" y="92" width="168" height="156" rx="18" fill="url(#metal)"/>
        <rect x="286" y="64" width="118" height="184" rx="18" fill="#b65a31"/>
        <rect x="428" y="108" width="126" height="140" rx="18" fill="url(#metal)"/>
        <rect x="324" y="10" width="28" height="72" rx="14" fill="#64748b"/>
        <circle cx="145" cy="146" r="28" fill="#f59e0b"/>
        <circle cx="488" cy="178" r="26" fill="#f59e0b"/>
        <path d="M160 92h62v58h-62z" fill="#f8fafc" opacity="0.22"/>
        <path d="M312 104h58v22h-58z" fill="#f8fafc" opacity="0.24"/>
        <path d="M454 150h54v22h-54z" fill="#f8fafc" opacity="0.24"/>
      </g>
      <text x="88" y="76" fill="#7c3b1d" font-size="30" font-family="Arial, sans-serif" font-weight="700">${e}</text>
      <text x="88" y="620" fill="#5f4434" font-size="22" font-family="Arial, sans-serif" font-weight="600">${i}</text>
    </svg>
  `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(s)}`},B=e=>[`/machines/${e}.png`,`/machines/${e}.jpg`,`/machines/${e}.jpeg`,`/machines/${e}.webp`],M=`
  <a href="/" data-route-link>Home</a>
  <a href="/machines" data-route-link>Machines</a>
`,E=`
  <div class="page-shell">
    <header class="topbar">
      <div class="brand">
        <div>
          <p class="eyebrow">Machine line-up</p>
          <h1>Ferro Blocks Machines</h1>
        </div>
      </div>
      <nav class="nav">
        ${M}
      </nav>
    </header>

    <main>
      <section class="section" id="machines-grid">
        <div class="section-heading">
          <p class="section-tag">Machines</p>
          <h3>Available equipment for CSEB production and handling.</h3>
        </div>
        <div class="machine-grid">
          ${C.map(e=>{const i=B(e.id).join("|"),s=S(e.title,e.specs.join(" · "));return`
                <article class="machine-card">
                  <div class="machine-visual">
                    <img
                      src="/machines/${e.id}.png"
                      data-fallbacks="${i}|${s}"
                      alt="${e.title}"
                    />
                  </div>
                  <div class="machine-copy">
                    <p class="machine-kicker">Machine ${e.id}</p>
                    <h4>${e.title}</h4>
                    <p>${e.description}</p>
                    <ul class="machine-specs">
                      ${e.specs.map(r=>`<li>${r}</li>`).join("")}
                    </ul>
                  </div>
                </article>
              `}).join("")}
        </div>
      </section>
    </main>
  </div>
`;function $(e=d){e.querySelectorAll("[data-route-link]").forEach(i=>{i.addEventListener("click",s=>{const r=new URL(i.href,window.location.origin);r.origin===window.location.origin&&(s.preventDefault(),window.history.pushState({},"",r.pathname),m())})})}function q(e=d){e.querySelectorAll("[data-fallbacks]").forEach(i=>{const s=i.dataset.fallbacks.split("|");let r=0;i.addEventListener("error",()=>{r+=1,r<s.length&&(i.src=s[r])})})}function F(e=d){const i=Array.from(e.querySelectorAll(".topbar, .hero, .section, .split, .machine-card, .brick-card, .hero-metrics article, .benefit-grid article, .timeline article, .about-card, .enquiry-card, .carousel-viewport"));if(i.forEach((r,t)=>{r.classList.add("reveal"),r.style.setProperty("--reveal-delay",`${Math.min(t*70,420)}ms`)}),!("IntersectionObserver"in window)){i.forEach(r=>r.classList.add("is-visible"));return}const s=new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),s.unobserve(t.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"});i.forEach(r=>s.observe(r))}function L(e=d){const i=e.querySelector("#enquiry");i==null||i.addEventListener("submit",a=>{a.preventDefault();const p=new FormData(i).get("name")||"there",n=i.querySelector(".submit-btn"),v=n.textContent;n.textContent=`Thanks, ${p}. Enquiry captured.`,n.disabled=!0,window.setTimeout(()=>{n.textContent=v,n.disabled=!1,i.reset()},2400)});const s=e.querySelector(".comparison-table"),r=e.querySelector(".comparison-toggle");r==null||r.addEventListener("click",()=>{const a=(s==null?void 0:s.classList.toggle("comparison-table--highlight-cseb"))??!1;r.setAttribute("aria-pressed",String(a)),r.textContent=a?"Show balanced view":"Highlight CSEB"});const t=e.querySelector("[data-carousel]");if(t){const a=t.querySelector(".carousel-track"),l=Array.from(t.querySelectorAll(".carousel-slide")),p=t.querySelector("[data-carousel-prev]"),n=t.querySelector("[data-carousel-next]"),v=Array.from(t.querySelectorAll("[data-carousel-dot]"));let c=0,g;const u=f=>{c=(f+l.length)%l.length,a.style.transform=`translateX(-${c*100}%)`,v.forEach((b,y)=>{b.classList.toggle("is-active",y===c)})},h=()=>{window.clearInterval(g),g=window.setInterval(()=>u(c+1),4500)};p==null||p.addEventListener("click",()=>{u(c-1),h()}),n==null||n.addEventListener("click",()=>{u(c+1),h()}),v.forEach(f=>{f.addEventListener("click",()=>{const b=Number(f.dataset.carouselDot);u(b),h()})}),t.addEventListener("mouseenter",()=>window.clearInterval(g)),t.addEventListener("mouseleave",h),u(0),h()}}function m(){const e=window.location.pathname==="/machines";d.innerHTML=e?E:x,document.title=e?"Ferro Blocks | Machines":"Ferro Blocks | CSEB Brick Manufacturer",d.querySelectorAll("[data-route-link]").forEach(i=>{new URL(i.getAttribute("href"),window.location.origin).pathname===window.location.pathname?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")}),$(),q(),F(),e||L()}window.addEventListener("popstate",m);m();
