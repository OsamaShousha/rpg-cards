import "./App.css";

// 1. KORT-MALLEN (Komponenten)
function calculatePower(level, hp) {
  return level * 10 + hp;
}

function CharacterCard(props) {
  const hero = props.character;
  if (hero.hp <= 0) {
  return (
    <article className="card fallen">
      <h2>{hero.name}</h2>
      <p>FALLEN I STRID</p>
    </article>
  );
}
  const power = calculatePower(hero.level, hero.hp);
let veteranText = "";

  if (hero.level >= 10) {
    veteranText = " ★ Veteran";
  }

  return (
    <article className="card">
      <h2>{hero.name}{veteranText}</h2>
      <p>Roll: {hero.role}</p>
      <p>HP: {hero.hp}</p>
      <p>Level: {hero.level}</p>
       <p>Attackstyrka: {power}</p>
    </article>
  );
}

// 2. HUVUDSIDAN
export default function App() {
  const guild = [
    { name: "Nova", role: "Mage", hp: 80, level: 5 },
    { name: "Kael", role: "Warrior", hp: 140, level: 12 },
    { name: "Lyra", role: "Rogue", hp: 0, level: 4 },
    { name: "Theron", role: "Paladin", hp: 110, level: 3 }
  ];

  return (
    <main>
      <h1>RPG Guild Dashboard</h1>



<div className="guild-grid">
  <CharacterCard character={guild[0]} />
  <CharacterCard character={guild[1]} />
  <CharacterCard character={guild[2]} />
  <CharacterCard character={guild[3]} />
</div>

    </main>
  );
}