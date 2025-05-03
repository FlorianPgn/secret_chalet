import SecretBlock from "@/components/SecretBlock";

// Edit these secrets as needed
const secrets = [
  { content: "Secret 1: Add your secret here" },
  { content: "Secret 2: Add your secret here" },
  { content: "Secret 3: Add your secret here" },
  { content: "Secret 4: Add your secret here" },
  { content: "Secret 5: Add your secret here" },
  { content: "Secret 6: Add your secret here" },
  { content: "Secret 7: Add your secret here" },
  { content: "Secret 8: Add your secret here" },
  { content: "Secret 9: Add your secret here" },
  { content: "Secret 10: Add your secret here" },
  { content: "Secret 11: Add your secret here" },
  { content: "Secret 12: Add your secret here" },
  { content: "Secret 13: Add your secret here" },
  { content: "Secret 14: Add your secret here" },
  { content: "Secret 15: Add your secret here" },
  { content: "Secret 16: Add your secret here" },
  { content: "Secret 17: Add your secret here" },
  { content: "Secret 18: Add your secret here" },
  { content: "Secret 19: Add your secret here" },
  { content: "Secret 20: Add your secret here" },
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
