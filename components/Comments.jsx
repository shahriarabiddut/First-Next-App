export default async function Comments({ promise }) {
  const comments = await promise;

  return (
    <section className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white shadow-sm border border-gray-200 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold">{comment.name}</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
