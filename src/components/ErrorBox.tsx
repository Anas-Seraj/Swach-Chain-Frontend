export default function ErrorBox({ err = "" }) {
  return (
    <div className="flex-1 p-2 rounded-md text-center bg-red-400 text-red-700 font-bold mb-5">
      {err}
    </div>
  );
}
