import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import './Hero.css';

// Icon SVGs as inline components
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const { name, title, tagline, summary, social, resumeUrl, email } = personalInfo;

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Animated background grid */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Floating accent orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Status badge */}
          <motion.div className="hero__badge" variants={itemVariants}>
            <span className="hero__badge-dot" />
            <span>Available for new opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.div className="hero__name-block" variants={itemVariants}>
            <h1 className="hero__name">
              {name.split(' ')[0]}<br />
              <span className="hero__name-last">{name.split(' ')[1]}</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div className="hero__title-block" variants={itemVariants}>
            <span className="hero__title">{title}</span>
            <span className="hero__tagline">{tagline}</span>
          </motion.div>

          {/* Summary */}
          <motion.p className="hero__summary" variants={itemVariants}>
            {summary}
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero__ctas" variants={itemVariants}>
            <a href={resumeUrl} className="btn-primary" download>
              <DownloadIcon /> Download Resume
            </a>
            <button className="btn-secondary" onClick={handleContactClick}>
              <MailIcon /> Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div className="hero__socials" variants={itemVariants}>
            <a href={social.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={social.twitter} target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href={`mailto:${email}`} className="social-link" aria-label="Email">
              <MailIcon />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero visual — animated terminal card */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="terminal">
            <div className="terminal__header">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__filename">portfolio.ts</span>
            </div>
            <div className="terminal__body">
              <TerminalLine delay={0.6} color="var(--accent)">const <span style={{color:'#7c6fff'}}>developer</span> = {'{'}</TerminalLine>
              <TerminalLine delay={0.75} indent>name: <span className="t-string">"{name}"</span>,</TerminalLine>
              <TerminalLine delay={0.9} indent>role: <span className="t-string">"{title}"</span>,</TerminalLine>
              <TerminalLine delay={1.05} indent>experience: <span className="t-number">1</span>,</TerminalLine>
              <TerminalLine delay={1.2} indent>location: <span className="t-string">"Noida, UP"</span>,</TerminalLine>
              <TerminalLine delay={1.35} indent>
                skills: [<span className="t-string">"React"</span>, <span className="t-string">"Node"</span>, ...]
              </TerminalLine>
              <TerminalLine delay={1.5} indent>open: <span className="t-bool">true</span>,</TerminalLine>
              <TerminalLine delay={1.65} color="var(--accent)">{'}'}</TerminalLine>
              <div className="terminal__cursor" />
            </div>
          </div>

          {/* Stats floating cards */}
          <motion.div
            className="hero__stat hero__stat--1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="stat-num">2+</span>
            <span className="stat-label">Yrs Learning</span>
          </motion.div>

          <motion.div
            className="hero__stat hero__stat--2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="stat-num">36+</span>
            <span className="stat-label">Repos</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}

// Helper component for animated terminal lines
function TerminalLine({ children, delay, indent, color }) {
  return (
    <motion.div
      className={`t-line ${indent ? 't-line--indent' : ''}`}
      style={{ color }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
