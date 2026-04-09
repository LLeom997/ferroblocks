import './style.css';

const brickIllustration = (label, accent = '#b65a31') => `
  <svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f6ede6"/>
        <stop offset="100%" stop-color="#ecd4c2"/>
      </linearGradient>
      <linearGradient id="brick" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${accent}"/>
        <stop offset="100%" stop-color="#8d3718"/>
      </linearGradient>
    </defs>
    <rect width="520" height="360" rx="28" fill="url(#bg)"/>
    <rect x="42" y="76" width="436" height="214" rx="24" fill="#fff9f4" opacity="0.74"/>
    <g transform="translate(84 96)">
      <rect x="0" y="54" width="128" height="54" rx="14" fill="url(#brick)"/>
      <rect x="144" y="54" width="128" height="54" rx="14" fill="url(#brick)" opacity="0.9"/>
      <rect x="288" y="54" width="128" height="54" rx="14" fill="url(#brick)" opacity="0.82"/>
      <rect x="72" y="114" width="128" height="54" rx="14" fill="url(#brick)" opacity="0.88"/>
      <rect x="216" y="114" width="128" height="54" rx="14" fill="url(#brick)" opacity="0.96"/>
      <rect x="0" y="174" width="128" height="54" rx="14" fill="url(#brick)" opacity="0.92"/>
      <rect x="144" y="174" width="128" height="54" rx="14" fill="url(#brick)" opacity="0.84"/>
      <rect x="288" y="174" width="128" height="54" rx="14" fill="url(#brick)" opacity="0.78"/>
    </g>
    <text x="38" y="48" fill="#6f351a" font-size="22" font-family="Arial, sans-serif" font-weight="700">${label}</text>
  </svg>
`;

const compareIcon = (type) => {
  const icons = {
    manufacturing: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V8l5 3V8l5 3V8l6 4v8H4Z" fill="currentColor"/>
        <path d="M6 20v-5h3v5M11 20v-3h3v3M16 20v-4h2v4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    `,
    strength: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 13.5 11 8l2 3 4-5 0 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 20h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,
    absorption: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3s5 6 5 10a5 5 0 1 1-10 0c0-4 5-10 5-10Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M7 15c2 2 8 2 10 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    `,
    brass: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,
    size: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18V6h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M6 17 17 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,
    density: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18V6h14v12H5Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M8 14h8M8 10h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,
    edges: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7h12l-3 3H9L6 7Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M6 17h12l-3-3H9l-3 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      </svg>
    `,
    shape: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="7" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M7 12h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,
    color: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M7.5 14.5c1.2-2.3 2.4-3.5 4.5-3.5s3.3 1.2 4.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `,
    environment: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 4c-6 0-11 4.5-11 10 0 3.3 2.2 5 4.5 5 4.5 0 7.5-3.5 7.5-8.5V4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M7 18c2.5-2 5.5-4.5 10-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,
  };

  return icons[type] ?? icons.shape;
};

const factoryIllustration = `
  <svg viewBox="0 0 960 720" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ferro Blocks factory illustration">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f7efe8"/>
        <stop offset="100%" stop-color="#ecd4c2"/>
      </linearGradient>
      <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6b452d"/>
        <stop offset="100%" stop-color="#3f2818"/>
      </linearGradient>
      <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f6a56a"/>
        <stop offset="100%" stop-color="#a54928"/>
      </linearGradient>
      <linearGradient id="roof" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#2f3e4d"/>
        <stop offset="100%" stop-color="#151d28"/>
      </linearGradient>
      <linearGradient id="smoke" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.6"/>
      </linearGradient>
    </defs>
    <rect width="960" height="720" rx="36" fill="url(#sky)"/>
    <circle cx="780" cy="132" r="68" fill="#f0c27b" opacity="0.9"/>
    <path d="M0 584C126 520 216 532 300 560C396 592 492 634 608 616C725 597 812 526 960 584V720H0Z" fill="url(#ground)"/>
    <g transform="translate(118 206)">
      <rect x="0" y="156" width="692" height="204" rx="24" fill="#ead1bf"/>
      <path d="M0 156H692L664 60L506 0L360 72L182 0L28 58Z" fill="url(#roof)"/>
      <rect x="70" y="196" width="120" height="120" rx="16" fill="#fff4ea"/>
      <rect x="228" y="196" width="120" height="120" rx="16" fill="#fff4ea"/>
      <rect x="386" y="196" width="120" height="120" rx="16" fill="#fff4ea"/>
      <rect x="544" y="196" width="86" height="120" rx="16" fill="#fff4ea"/>
      <rect x="510" y="72" width="78" height="218" rx="20" fill="url(#wall)"/>
      <rect x="580" y="-54" width="52" height="344" rx="18" fill="#1e2431"/>
      <rect x="644" y="-12" width="40" height="302" rx="14" fill="#2a3444"/>
      <circle cx="610" cy="20" r="18" fill="#ec9960"/>
      <path d="M586 -34c-28-34-32-54-20-84 10-26 32-42 60-40 26 2 44 18 52 42 8 22 0 42-18 62" fill="url(#smoke)" opacity="0.85"/>
      <path d="M-10 344H702" stroke="#b68d72" stroke-width="18" stroke-linecap="round"/>
      <g fill="#3b2b24" opacity="0.35">
        <rect x="94" y="242" width="70" height="12" rx="6"/>
        <rect x="252" y="242" width="70" height="12" rx="6"/>
        <rect x="410" y="242" width="70" height="12" rx="6"/>
      </g>
    </g>
    <g opacity="0.3" fill="#fff">
      <circle cx="184" cy="134" r="16"/>
      <circle cx="218" cy="118" r="10"/>
      <circle cx="250" cy="130" r="12"/>
    </g>
  </svg>
`;

document.querySelector('#app').innerHTML = `
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
            <div class="criterion"><span class="criterion-icon">${compareIcon('manufacturing')}</span><span>Manufacturing</span></div>
            <div>Only kiln-fired</div>
            <div>Cement-based, machine-pressed</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('strength')}</span><span>Strength</span></div>
            <div>0.5 MPa</div>
            <div>5.4 MPa</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('absorption')}</span><span>Water absorption</span></div>
            <div>20% to 30%</div>
            <div>Up to 8% only</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('brass')}</span><span>Bricks per brass</span></div>
            <div>600 bricks with breakage</div>
            <div>400 bricks, up to 20% cost saving</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('size')}</span><span>Size in inches</span></div>
            <div>6×3.5×8.5, 4×2.5×9</div>
            <div>6×4×9, 4×3×9</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('density')}</span><span>Density</span></div>
            <div>16.5 kN/m³</div>
            <div>18.5 kN/m³, typically designed at ~20 kN/m³</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('edges')}</span><span>Edges</span></div>
            <div>Blunt</div>
            <div>Sharp, neat finish</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('shape')}</span><span>Shape</span></div>
            <div>Irregular</div>
            <div>Uniform, smooth wall friendly</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('color')}</span><span>Color</span></div>
            <div>Black spots, debris visible</div>
            <div>Clean, attractive earthy color</div>
          </div>
          <div class="row">
            <div class="criterion"><span class="criterion-icon">${compareIcon('environment')}</span><span>Environment</span></div>
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
`;

const form = document.querySelector('#enquiry');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'there';
  const submitBtn = form.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = `Thanks, ${name}. Enquiry captured.`;
  submitBtn.disabled = true;

  window.setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    form.reset();
  }, 2400);
});

const comparisonTable = document.querySelector('.comparison-table');
const comparisonToggle = document.querySelector('.comparison-toggle');

comparisonToggle?.addEventListener('click', () => {
  const isHighlighted = comparisonTable?.classList.toggle('comparison-table--highlight-cseb') ?? false;
  comparisonToggle.setAttribute('aria-pressed', String(isHighlighted));
  comparisonToggle.textContent = isHighlighted ? 'Show balanced view' : 'Highlight CSEB';
});
