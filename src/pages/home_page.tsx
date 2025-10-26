import NiceLink from "@/components/ui/nice_link";

export default function HomePage() {
  return (
    <div className="text-xl text-justify homepage">
      <img
        src="/pfp_github.png"
        className="max-w-[250px] mx-auto rounded-full"
      />
      <h1 className="py-4 text-center text-accent">Hi, I'm Igor</h1>
      <p>
        I am a computational biologist at the Institute for Research in
        Biomedicine in Barcelona. I currently work on as a technician in Toni
        Gabaldon's lab. I work on analyzing metagenomics results with machine
        learning with the objective of early colorectal cancer detection.
      </p>
      <p>
        I also do game development in the startup Vistula Development. I'm
        working on an arcade racing video game called Track Racer. I focus on
        the game's user interface, visual effects, and visual assets.
      </p>
      <p>
        In my free time, I study web development. I also do vocal performance
        (mainly choral), vocal composition, and marine sailing.
      </p>
      <p>
        <strong>Want to explore my work?</strong> See{" "}
        <NiceLink to="/projects">Projects</NiceLink>.
      </p>
      <p>
        <strong>Want to know more about me?</strong> See my{" "}
        <NiceLink to="/cv">CV</NiceLink>.
      </p>
    </div>
  );
}
