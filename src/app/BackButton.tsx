import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-cyan-400 hover:bg-white/10 transition"
    >
      ← Back
    </Link>
  );
}
