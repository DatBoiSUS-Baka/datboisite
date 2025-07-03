// DatBoiSUS-Baka
// 03-Jul-2025
// app/page.tsx

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* Main Section */}

        <h1 className="text-7xl font-">DatBoiSite</h1>

        <img
         src="/globe.svg"
         alt="Aphoey's profile photo"
         width={180}
         height={60}
          />

      {/* --Main Section */}

      {/* Footer Section-- */}

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h2>This is a footer</h2>
      </footer>

      {/* --Footer Section */}

    </div>
  );
}
