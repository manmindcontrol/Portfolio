"use client";

import FallingStars from "../FallingStars";

const about = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-[#0f172a] to-[#334155] p-8 md:p-16 gap-32">
      <FallingStars />
      <h1 className="text-white font-semibold text-4xl md:text-6xl">
        About me
      </h1>
      <div className="flex flex-col items-center max-w-4xl justify-between gap-10 text-gray-400 text-2xl text-justify px-4">
        <p>Ahoj, volám sa Samuel Rychvalský</p>
        <p>
          Už viac ako rok sa aktívne venujem vývoju webových aplikácií ako
          frontend developer. Počas tohto obdobia som získal hlboké skúsenosti s
          Reactom, kde som si osvojil prácu s JavaScriptom, TypeScriptom a
          efektívne využívanie Tailwind CSS na rýchle a elegantné riešenie UI
          komponentov. Mal som príležitosť podieľať sa aj na tvorbe backendových
          riešení, konkrétne pri návrhu a implementácii API, čo mi poskytlo
          cenný pohľad na celkovú architektúru aplikácií.
        </p>
      </div>
    </div>
  );
};
export default about;
