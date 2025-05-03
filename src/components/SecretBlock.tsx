interface SecretBlockProps {
  content: string;
}

export default function SecretBlock({ content }: SecretBlockProps) {
  return (
    <div className="p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
      <p className="text-purple-700">{content}</p>
    </div>
  );
}
