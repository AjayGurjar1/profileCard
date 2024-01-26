import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="pt" src="Ajayp.jpg" alt="Ajay" />
    </div>
  );
}

function Intro() {
  return (
    <>
      <h1> Ajay Gurjar</h1>
      <p>
        {" "}
        Student Of MITS Gwalior With Computer Science Stream . I Am Currently
        Pursuing My Bachelor's Degree In May 2024. My Area Of Interest Is
        Software Development.{" "}
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="React 💪" color="blue" />
      <Skill name="Html/Css 💪" color="red" />
      <Skill name="JavaScript 💪" color="green" />
      <Skill name="NodeJs 👶" color="yellow" />
      <Skill name="MongoDb 👼🏻" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}
