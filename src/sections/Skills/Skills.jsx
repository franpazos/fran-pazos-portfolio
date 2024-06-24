import styles from "./SkillsStyles.module.css";
import checkmarkIcon from "../../assets/BytesizeCheckmark.svg";
import loading from "../../assets/EosIconsBubbleLoading.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="HTML" />
        <SkillList src={checkmarkIcon} skill="CSS" />
        <SkillList src={checkmarkIcon} skill="JavaScript" />
        <SkillList src={checkmarkIcon} skill="TypeScript" />
        <SkillList src={checkmarkIcon} skill="Node.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="React" />
        <SkillList src={checkmarkIcon} skill="Express.js" />
        <SkillList src={checkmarkIcon} skill="Tailwind" />
        <SkillList src={checkmarkIcon} skill="Bootsrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="MongoDB" />
        <SkillList src={checkmarkIcon} skill="Git" />
        <SkillList src={loading} skill="Angular" />
        <SkillList src={loading} skill="Java" />
        <SkillList src={loading} skill="Golang" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
