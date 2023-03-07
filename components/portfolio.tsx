import { projects } from './../lib';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((project) => (
          <article className="portfolio__item" key={project.description}>
            <div className="portfolio__item-image">
              <Image src={project.img} width={400} alt="" />
            </div>
            <div className="portfolio__content-wrapper">
              <h3>{project.description}</h3>
              <div className="portfolio__item-cta">
                {project.githubUrl && (
                  <a
                    href={`${project.githubUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Github
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={`${project.demoUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
