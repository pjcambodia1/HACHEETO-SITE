export default function App() {
  const siteName = "Hacheeto";
  const heroImg = "https://files.oaiusercontent.com/file-ApNpeHWm5i3VwWGbhhov87/hachito-park.png";
  const gallery = [
    { title: "Park run", src: "https://files.oaiusercontent.com/file_00000000b8a061f5be27a58269b27d58/hachito-run.png", alt: `${siteName} running in the park with a bone` },
    { title: "Cozy nap", src: "https://files.oaiusercontent.com/file_00000000dfe0622fba46c0537e0f0983/hachito-bed.png", alt: `${siteName} sleeping in a cozy dog bed` },
    { title: "Play ball", src: "https://files.oaiusercontent.com/file_0000000076286230bf31af56201df46e/hachito-ball.png", alt: `${siteName} playing with a ball` },
    { title: "Brave bark", src: "https://files.oaiusercontent.com/file_00000000b310622f8f7811ff341c404e/hachito-cat.png", alt: `${siteName} barking at a cat` },
    { title: "Silly jacket", src: "https://files.oaiusercontent.com/file_00000000dc0c61f7bc748b823252ef04/hachito-jacket.png", alt: `${siteName} in his silly brown jacket with wings` },
    { title: "Rocket ride", src: "https://files.oaiusercontent.com/file_00000000fe40622fbfcf9acdd1e8ddf0/hachito-rocket.png", alt: `${siteName} riding a rocket toward the moon` },
  ];
  const downloadHref = "/downloads/Hacheeto_Big_Adventure_PrintReady.pdf";

  return (
    <main className="min-h-screen bg-amber-50 text-stone-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-amber-50/80 border-b border-amber-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-400 shadow-sm">
              <span className="text-2xl" aria-hidden>🐾</span>
            </span>
            <span className="text-xl font-bold tracking-tight">{siteName}</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,#fef3c7,transparent)]" />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-stone-900">
              Meet <span className="text-amber-600">{siteName}</span> — a cheerful pup with outsized adventures
            </h1>
            <p className="mt-4 text-lg text-stone-700">
              Stories and pictures the whole family can enjoy. Follow {siteName} from cozy naps to
              rocket rides — with kindness, courage, and a very silly jacket with tiny wings.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#gallery" className="px-5 py-3 rounded-2xl bg-amber-500 text-white font-semibold shadow hover:bg-amber-600">
                View pictures
              </a>
              <a href="#subscribe" className="px-5 py-3 rounded-2xl bg-white text-amber-700 font-semibold shadow border border-amber-200 hover:bg-amber-100">
                Get updates
              </a>
              <a href={downloadHref} className="px-5 py-3 rounded-2xl bg-amber-700 text-white font-semibold shadow hover:bg-amber-800">
                Download storybook
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden border border-amber-200 shadow-inner bg-amber-100">
              <img src={heroImg} alt={`${siteName} hero`} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Illustration Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <figure key={item.title} className="group rounded-3xl border border-amber-200 bg-white overflow-hidden shadow-sm">
              <div className="aspect-[4/3]">
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-4 flex items-center justify-between">
                <span className="font-medium">{item.title}</span>
                <a className="text-xs text-amber-700 hover:underline" href={item.src} download>download</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
