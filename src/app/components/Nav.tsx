export function Nav() {
  return (
    <nav className="w-full bg-transparent">
      <div className="flex w-full items-center justify-end px-8 py-4">
        <div className="flex gap-8 text-sm text-zinc-700">
          <a href="#projects" className="navLink hover:text-zinc-900">
            Projects
            <span className="navUnderline" />
          </a>
          <a href="#experience" className="navLink hover:text-zinc-900">
            Experience
            <span className="navUnderline" />
          </a>
        </div>
      </div>
    </nav>
  );
}