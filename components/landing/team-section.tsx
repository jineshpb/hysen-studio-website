export function TeamSection() {
  return (
    <section className="mt-[48px] text-center">
      <div className="mb-[12px] text-[14px] leading-none text-[#888f96]">. . .</div>
      <div className="flex justify-center gap-[16px]">
        {["A", "B", "C"].map((person) => (
          <div
            key={person}
            className="h-[64px] w-[64px] rounded-[999px] bg-gradient-to-b from-[#e9e9ea] to-[#263e63]"
          />
        ))}
      </div>
    </section>
  );
}
