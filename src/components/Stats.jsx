export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-600/10 blur-[120px]" />
      </div>
      <div className="container-page relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Dezenas de eventos realizados{" "}<br />
            <span className="gold-text">todos os anos</span>
          </p>
          <p className="mt-7 text-lg text-cream/70">
            A música tem o poder de conectar pessoas e transformar ambientes. Por
            isso, cada contratação é conduzida com excelência, buscando proporcionar
            uma experiência marcante para organizadores, igrejas e público.
          </p>
        </div>
      </div>
    </section>
  );
}
