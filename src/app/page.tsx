// DatBoiSUS-Baka
// 03-Jul-2025
// app/page.tsx

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* Main Section */}

        <div className="row-start-2 items-center justify-items-center">

          <h2 className="text-2xl text-center">A Personal Portfolio Website</h2>
        <img
          className="rounded-md justify-items-center"
         src="/personal-photo.jpg"
         alt="Aphoey's profile photo"
         width={368}
         height={197}
        />

        </div>

      {/* --Main Section */}

      {/* Footer Section-- */}

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h2>Created by DatBoiSUS-Baka using Next.js</h2>
      </footer>

      {/* --Footer Section */}

    </div>
  );
}
