import SecretBlock from "@/components/SecretBlock";

// Edit these secrets as needed
const secrets = [
  { content: "Secret 01: Ma tante est sortie pendant des années avec Marc Dorcel." },
  { content: "Secret 02: J'ai sauté de la terrasse d'un immeuble." },
  { content: "Secret 03: J'ai déjà eu un scorpion sur l'épaule." },
  { content: "Secret 04: Je suis déjà sorti·e avec deux meilleur·e·s potes." },
  { content: "Secret 05: Je me suis déjà fait spermer dans les yeux par un crapaud." },
  { content: "Secret 06: Je suis sorti·e avec mon demi-frère." },
  { content: "Secret 07: J'ai fait un massage cardiaque en pensant sauver quelqu'un, mais ça n'a rien changé." },
  { content: "Secret 08: Je me suis fait droguer en buvant un verre à une soirée et j'ai aimé ça. (ALEX)" },
  { content: "Secret 09: Mon médecin a assassiné toute sa famille." },
  { content: "Secret 10: J'ai déjà incarné une prostituée." },
  { content: "Secret 11: Un pote a eu un enfant avec sa copine alors que j'ai couché avec sans qu'il le sache." },
  { content: "Secret 12: J'ai cambriolé une chambre d'hôtel avant d'aller dîner avec leurs occupants." },
  { content: "Secret 13: Je suis rentré·e par effraction dans un château habité." },
  { content: "Secret 14: Je jouais avec les enfants de Johnny Depp quand j'étais petit·e" },
  { content: "Secret 15: J'ai été expulsé de mon collège." },
  { content: "Secret 16: J'ai volé la brosse à BBQ de Hugo. (JESS)" },
  { content: "Secret 17: Je me suis déjà fait·e casser la gueule par un type dont la mère est escort girl. (HUGO)" },
  { content: "Secret 18: J'ai une tache de naissance juste au dessus de mon organe génital." },
  { content: "Secret 19: J'ai été dans le même lycée qu'Antoine Dupont. (LAURA)" },
  { content: "Secret 20: J'ai une paire de côte en plus que la norme." },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secrets.map((secret, index) => (
            <SecretBlock
              key={index}
              content={secret.content}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
