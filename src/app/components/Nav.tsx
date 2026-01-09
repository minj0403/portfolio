export function Nav() {
  return (
    <nav className="w-full bg-transparent">
      <div className="flex w-full items-center justify-end px-8 py-4">
        <div className="flex gap-8 text-sm text-zinc-700">
          <a href="#projects" className="hover:text-zinc-900">
            Projects
          </a>
          <a href="#experience" className="hover:text-zinc-900">
            Experience
          </a>
        </div>
      </div>
    </nav>
  );
}