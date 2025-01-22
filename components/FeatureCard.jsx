export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl font-bold mb-4 text-indigo-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
