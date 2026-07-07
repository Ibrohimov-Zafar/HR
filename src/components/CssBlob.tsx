export function CssBlob() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        aria-hidden
        className="blob-morph h-[72%] w-[72%] bg-[radial-gradient(circle_at_35%_32%,#4a4a4a_0%,#111_42%,#000_78%)] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
      />
    </div>
  );
}
