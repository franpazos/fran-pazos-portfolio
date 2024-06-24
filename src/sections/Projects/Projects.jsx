import styles from "./ProjectStyles.module.css";
import mentalia from "../../assets/mentalia-logo.png";
import ironInvaders from "../../assets/iron-invaders-logo.png";
import myBookWishlist from "../../assets/book-wishlist-logo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mentalia}
          link={"https://mentalia.netlify.app/"}
          h3="Mentalia"
          p="Mental wellness app with emotional tracker, psychologist access and a
        community platform. Full-stack MERN application."
        />
        <ProjectCard
          src={ironInvaders}
          link={"https://franpazos.github.io/"}
          h3="Iron Invaders"
          p="An homage to the classic Space Invaders game, built with HTML, CSS and JavaScript."
        />
        <ProjectCard
          src={myBookWishlist}
          link={"https://mybookwishlist.netlify.app/wishlist"}
          h3="My Book Wishlist"
          p="Keep track of the books you want to read, the ones you are currently reading and the ones you have already read. Built with React."
        />
      </div>
    </section>
  );
}

export default Projects;
