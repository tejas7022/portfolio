(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function f(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=f(e);fetch(e.href,a)}})();document.querySelector("#app").innerHTML=`
  <div class="hero-bg"></div>
  <canvas id="bg-canvas"></canvas>
  
  <nav class="navbar">
    <div class="container nav-content">
      <div class="logo">TEJESWAR<span>.</span>SAI</div>
      <ul class="nav-links">
        <li><a href="#about">Profile</a></li>
        <li><a href="#experience">Career</a></li>
        <li><a href="#expertise">Tech Stack</a></li>
        <li><a href="#work">Key Projects</a></li>
        <li><a href="#contact" class="btn btn-sm">Contact</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <section id="about" class="hero-section">
      <div class="container hero-content">
        <div class="profile-container match-fade">
          <img src="/profile.jpg" alt="Tejeswar Sai M" class="profile-image" />
        </div>
        <span class="subtitle match-fade delay-100">Big Data Developer | Cloud Engineer</span>
        <h1 class="match-fade delay-200">Engineering Scalable<br>Data Solutions.</h1>
        <p class="hero-description match-fade delay-300">
          I am Tejeswar Sai M, a passionate Data Engineer with 4+ years of experience designing robust architectures using Azure Data Factory, Databricks, and Synapse Analytics. I specialize in building high-efficiency ETL pipelines that drive critical business insights.
        </p>
        <div class="match-fade delay-300">
          <a href="#work" class="btn btn-fill">View Projects</a>
          <a href="mailto:tTejeswarsaim1997@gmail.com" class="btn" style="margin-left: 1rem;">Download CV</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <span style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;">Scroll</span>
        <div class="line"></div>
      </div>
    </section>

    <section id="experience" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Professional Journey</h2>
        </div>
        
        <div class="experience-list">
          <div class="experience-item">
            <div class="year-stamp">2023 <span>Present</span></div>
            <div class="exp-content">
              <h3>IQVIA</h3>
              <h4>Big Data Developer | SDE 2</h4>
              <p>Leading data engineering initiatives focusing on large-scale migrations and pipeline optimizations. Successfully migrated 600GB datasets from SQL to Spark, achieving an 80% efficiency gain (45h to 9h). Orchestrated reliable ETL workflows using Apache Airflow and Cloudera Data Platform.</p>
            </div>
          </div>

          <div class="experience-item">
            <div class="year-stamp">2021 <span>2022</span></div>
            <div class="exp-content">
              <h3>Attra InfoTech</h3>
              <h4>Big Data Engineer</h4>
              <p>Re-engineered data warehouse solutions to transition from batch to real-time ingestion using Apache Kafka and Spark Streaming. Designed scalable pipelines for Westpac to process multi-source data into Spark RDDs, handling complex JSON parsing and DB2 mapping.</p>
            </div>
          </div>

          <div class="experience-item">
            <div class="year-stamp">2016 <span>2020</span></div>
            <div class="exp-content">
              <h3>GITAM University</h3>
              <h4>B.E. Computer Science</h4>
              <p>Foundation in Computer Science and Engineering. Certified in Big Data technologies from Trendy Tech.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="expertise" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Technical Expertise</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-box">
            <h3>Cloud & Storage</h3>
            <ul class="skill-list">
              <li>Azure Data Factory</li>
              <li>Azure Databricks</li>
              <li>Azure Synapse & SQL DB</li>
              <li>Azure Gen2 & Blob Storage</li>
            </ul>
          </div>
          <div class="skill-box">
            <h3>Big Data Core</h3>
            <ul class="skill-list">
              <li>Apache Spark & PySpark</li>
              <li>Apache Kafka & Hive</li>
              <li>HBase & Sqoop</li>
              <li>Airflow Orchestration</li>
            </ul>
          </div>
          <div class="skill-box">
            <h3>Languages & Tools</h3>
            <ul class="skill-list">
              <li>Python & Scala</li>
              <li>Advanced SQL</li>
              <li>Git / Azure DevOps / Jira</li>
              <li>Power BI Visualization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Key Projects</h2>
        </div>

        <div class="project-showcase">
          <!-- Project 1 -->
          <div class="project-row">
            <div class="project-visual">
              <img src="/project-migration.png" alt="SQL to Spark Migration" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="project-info">
              <div class="subtitle">Migration & Optimization</div>
              <h3>SQL to Spark Migration</h3>
              <div class="tech-stack">
                <span>Spark</span> / <span>Scala</span> / <span>Airflow</span> / <span>Python</span>
              </div>
              <p>Architected a critical migration for a Life Sciences client, moving a massive 600GB dataset from legacy SQL systems to a modernized Spark cluster. This optimized the processing window from 45 hours down to just 9 hours. Implemented automated Python/Scala validation checks to ensure zero data loss.</p>
              <span class="btn" style="cursor: default; opacity: 0.7;">Efficiency Gain: 80%</span>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="project-row reverse">
            <div class="project-visual">
              <img src="/project-analytics.png" alt="Azure Analytics" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="project-info">
              <div class="subtitle">Cloud Analytics</div>
              <h3>Multi-Channel Sales Analytics</h3>
              <div class="tech-stack">
                <span>Azure Data Factory</span> / <span>Databricks</span> / <span>PySpark</span>
              </div>
              <p>Designed production-grade pipelines on Azure to integrate multi-source sales data. Used parameterized ADF pipelines and PySpark transformations in Databricks to handle Star Schema and SCD modeling. Enabled seamless analytic reporting for cross-functional teams.</p>
              <span class="btn" style="cursor: default; opacity: 0.7;">Azure Scalability</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="section-header">
          <h2>Get In Touch</h2>
        </div>
        <div class="contact-box">
          <p>I am available for immediate joining to contribute to impactful data engineering projects. Located in Bengaluru, Karnataka.</p>
          <div style="margin-bottom: 3rem; display: flex; flex-direction: column; gap: 1rem; align-items: center; font-family: var(--font-heading); font-size: 1.5rem;">
            <a href="mailto:tTejeswarsaim1997@gmail.com" style="color: var(--accent-gold);">tTejeswarsaim1997@gmail.com</a>
            <span style="font-size: 1.2rem; color: var(--text-secondary);">+91 999999999</span>
          </div>
          <form class="contact-form" onsubmit="event.preventDefault(); alert('Thank you for your inquiry.')">
            <input type="text" class="form-field" placeholder="Your Name" required>
            <textarea class="form-field" rows="1" placeholder="Project Details" required style="resize: none;"></textarea>
            <button type="submit" class="btn btn-fill" style="margin-top: 2rem;">Contact Me</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-content">
      <div>&copy; 2024 Tejeswar Sai M.</div>
      <div style="display: flex; gap: 2rem;">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  </footer>
`;const c=document.getElementById("bg-canvas"),s=c.getContext("2d");let n,r,l=[];function p(){n=c.width=window.innerWidth,r=c.height=window.innerHeight}class m{constructor(){this.x=Math.random()*n,this.y=Math.random()*r,this.vx=(Math.random()-.5)*.1,this.vy=(Math.random()-.5)*.1,this.size=Math.random()*1.5,this.opacity=Math.random()*.5,this.fadeSpeed=Math.random()*.002+.001}update(){this.x+=this.vx,this.y+=this.vy,this.opacity+=Math.sin(Date.now()*this.fadeSpeed)*.005,this.x<0&&(this.x=n),this.x>n&&(this.x=0),this.y<0&&(this.y=r),this.y>r&&(this.y=0)}draw(){s.beginPath(),s.arc(this.x,this.y,this.size,0,Math.PI*2),s.fillStyle=`rgba(212, 175, 55, ${Math.abs(this.opacity)})`,s.fill()}}function u(){l=[];for(let i=0;i<150;i++)l.push(new m)}function h(){s.clearRect(0,0,n,r),l.forEach(i=>{i.update(),i.draw()}),requestAnimationFrame(h)}const g={threshold:.1},y=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.style.opacity="1",t.target.style.transform="translateY(0)")})},g),v=document.createElement("style");v.innerText=`
  .match-fade {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;
  }
`;document.head.appendChild(v);setTimeout(()=>{document.querySelectorAll(".match-fade").forEach(i=>y.observe(i))},100);window.addEventListener("resize",p);p();u();h();
