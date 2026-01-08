export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
      {children}
    </div>
  );
}