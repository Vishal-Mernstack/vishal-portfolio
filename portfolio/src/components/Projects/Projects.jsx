import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import './Projects.css';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.div className="section-tag" variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Projects
        </motion.div>
        <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Things I've built
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          A selection of projects spanning product engineering, open-source, and creative experiments.
        </motion.p>

        {/* Filter */}
        <motion.div className="projects__filters" variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          {['all', 'featured'].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Projects' : '⭐ Featured'}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }) {
  return (
    <motion.article
      className="project-card glass-card"
      custom={index + 4}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: (i) => ({
          opacity: 1, y: 0,
          transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }),
      }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {/* Project image placeholder with gradient */}
      <div
        className="project-card__image"
        style={{ background: project.gradient }}
      >
        <div className="project-card__image-inner" style={{ '--project-accent': project.accent }}>
          <div className="project-img-geo project-img-geo--1" />
          <div className="project-img-geo project-img-geo--2" />
          <span className="project-img-title">{project.title[0]}</span>
        </div>
        {project.featured && <span className="project-card__featured">Featured</span>}
      </div>

      {/* Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Tags */}
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card__actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-btn project-btn--ghost">
            <GithubIcon /> Code
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="project-btn project-btn--accent">
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
