import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, BarChart3, Database, Mail, MapPin, Moon, Sparkles, Sun } from "lucide-react";
import CBALogo from "./assets/CBA.png";
import PrezzeeLogo from "./assets/Prezzee.png";
import TASGovLogo from "./assets/TAS_GOV.png";
import HuonLogo from "./assets/HUON.png";
import UTASLogo from "./assets/UTAS.png";
import ZJGSULogo from "./assets/ZJGSU.png";

const experience = [
  {
    company: "Commonwealth Bank of Australia",
    role: "Senior Insight Analyst",
    location: "Melbourne",
    period: "2024 — Now",
    logo: CBALogo,
    summary: "Leading strategic analytics products across Credit Cards, Dining, SurePay and Yello, partnering with Product, Strategy and Marketing to improve portfolio performance and executive decisions.",
    highlights: ["AI-powered executive health metrics", "RBA Cards Review analytics", "GitHub Actions self-service automation", "97-user award-winning AI Insights Hub"],
  },
  {
    company: "Prezzee",
    role: "Data Analyst / Analytics Engineer",
    location: "Melbourne",
    period: "2022 — 2024",
    logo: PrezzeeLogo,
    summary: "Owned reusable dbt models, partner analytics and product experimentation for a fast-moving fintech, making trusted insight easier to access and reuse.",
    highlights: ["50% faster Orders ELT", "30% more insight reuse", "80% lift in feature adoption", "10% signup conversion uplift"],
  },
  {
    company: "Department of Treasury and Finance",
    role: "Data Analyst",
    location: "Hobart",
    period: "2021 — 2022",
    logo: TASGovLogo,
    summary: "Analysed taxation data and taxpayer behaviour, automated regulatory reporting, and built self-service tools for evidence-based revenue assurance.",
    highlights: ["20% better audit targeting", "Automated SQL & SSRS pipelines", "Reporting governance", "Cross-agency collaboration"],
  },
  {
    company: "Huon Aquaculture",
    role: "Data Analyst / BI Developer",
    location: "Hobart",
    period: "2020 — 2021",
    logo: HuonLogo,
    summary: "Designed SQL-powered BI solutions for operations, workforce and sales, replacing manual reporting with accessible decision tools.",
    highlights: ["HR data migration", "CMMS implementation", "Power BI & SSRS", "Production and sales automation"],
  },
];

const education = [
  { school: "University of Tasmania", degree: "Master of Information Technology and Systems", period: "2020 — 2021", logo: UTASLogo },
  { school: "Zhejiang Gongshang University", degree: "Bachelor of Business", period: "2011 — 2015", logo: ZJGSULogo },
];

const toolkit = [
  { title: "Data engineering", items: ["SQL", "dbt", "Jinja", "Data modelling", "ETL / ELT"] },
  { title: "Business intelligence", items: ["Power BI", "DAX", "Looker", "LookML", "SSRS"] },
  { title: "Programming & AI", items: ["Python", "React", "Generative AI", "Prompt engineering"] },
  { title: "Cloud & automation", items: ["AWS", "GitHub Actions", "Git", "Bitbucket", "Power Automate"] },
];

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Jack Zhou, home">JZ<span>.</span></a>
          <div className="nav-links">
            <a href="#about">Approach</a>
            <a href="#toolkit">Toolkit</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="theme-button" onClick={() => setDark((value) => !value)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="eyebrow"><span className="status-dot" /> Senior insights analyst · Melbourne</div>
          <h1 id="hero-title">Data is only useful when it <em>moves</em> people.</h1>
          <div className="hero-bottom">
            <p>I’m Jack Zhou. I turn complex customer behaviour into clear decisions, focused experiences, and measurable growth.</p>
            <a className="round-link" href="#experience" aria-label="Explore my experience"><ArrowDownRight /></a>
          </div>
          <div className="signal-grid" aria-label="Career overview">
              <div><strong>6+</strong><span>Years in data</span></div>
            <div><strong>04</strong><span>Industries explored</span></div>
            <div><strong>03</strong><span>Australian cities</span></div>
            <div className="signal-note"><Sparkles size={20} /><span>Curious by default.<br />Commercial by design.</span></div>
          </div>
        </section>

        <section className="marquee" aria-label="Core capabilities">
          <div>Customer insight <span>✦</span> Analytics engineering <span>✦</span> Experimentation <span>✦</span> Data storytelling <span>✦</span> Customer insight <span>✦</span></div>
        </section>

        <section className="section shell" id="about">
          <div className="section-label">01 — Approach</div>
          <div className="approach-grid">
            <h2>From signal<br />to <em>strategy.</em></h2>
            <div className="approach-copy">
              <p>I work where data, customers, and commercial decisions meet. My job is to make the complicated feel obvious—and the next move feel actionable.</p>
              <div className="principles">
                <article><Database /><h3>Build the truth</h3><p>Reliable models and clear definitions before the dashboard.</p></article>
                <article><BarChart3 /><h3>Find the signal</h3><p>Patterns that explain what happened and what to do next.</p></article>
                <article><Sparkles /><h3>Make it land</h3><p>A sharp narrative stakeholders can understand and use.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section toolkit-section shell" id="toolkit">
          <div className="section-label">02 — Toolkit</div>
          <div className="toolkit-heading">
            <h2>Technical depth.<br /><em>Commercial focus.</em></h2>
            <p>I build the data foundation, find the insight, and automate the path from question to decision.</p>
          </div>
          <div className="toolkit-grid">
            {toolkit.map((group, index) => (
              <article key={group.title}>
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="shell">
            <div className="section-heading">
              <div className="section-label">03 — Experience</div>
              <h2>A career built around<br /><em>better questions.</em></h2>
            </div>
            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-card" key={item.company}>
                  <div className="card-number">0{index + 1}</div>
                  <img src={item.logo} alt="" className="company-logo" />
                  <div className="card-main">
                    <div className="card-meta"><span>{item.period}</span><span><MapPin size={14} />{item.location}</span></div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.summary}</p>
                    <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell education-section" id="education">
          <div className="section-label">04 — Education</div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.school}>
                <img src={item.logo} alt="" />
                <div><span>{item.period}</span><h3>{item.degree}</h3><p>{item.school}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="shell contact-inner">
            <div className="section-label">05 — Contact</div>
            <p>Have a good question?</p>
            <h2>Let’s turn it into<br /><em>something useful.</em></h2>
            <div className="contact-links">
              <a href="mailto:jackmkj@gmail.com"><Mail size={18} /> Email me <ArrowUpRight size={18} /></a>
              <a href="https://www.linkedin.com/in/jzhou-da/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell"><span>© {new Date().getFullYear()} Jack Zhou</span><span>Insights with intent.</span></footer>
    </>
  );
}

export default App;
