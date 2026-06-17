import { useEffect, useState } from "react";
import { LuLanguages } from "react-icons/lu";

const GoogleTranslate = () => {
  const [open, setOpen] = useState(false);

  const languages = [
    { id: 1, code: "hi", label: "हिन्दी 🇮🇳" },
    { id: 2, code: "en", label: "English 🇬🇧" },
    { id: 3, code: "bn", label: "বাংলা 🇧🇩" },
    { id: 4, code: "ta", label: "தமிழ் 🇮🇳" },
    { id: 5, code: "te", label: "తెలుగు 🇮🇳" },
    { id: 6, code: "gu", label: "ગુજરાતી 🇮🇳" },
    { id: 7, code: "mr", label: "मराठी 🇮🇳" },
  ];

  useEffect(() => {
    const addScript = () => {
      if (document.querySelector("#google-translate-script")) return;

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element",
        );
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      document.body.appendChild(script);
    };

    addScript();
  }, []);

  const changeLanguage = (lang) => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 500);

    setOpen(false);
  };

  return (
    <div className="flex justify-center items-center w-fit relative">
      {/* Hidden Google Translate */}
      <div id="google_translate_element" />

      <div className="">
        {/* Trigger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E7DCC8] bg-[#FFFDF9] hover:border-[#D9B26F] hover:shadow-md transition-all duration-300"
        >
          {/* <Languages size={18} /> */}
          <LuLanguages />
        </button>

        {/* Dropdown */}
      </div>
      {open && (
        <div className="fixed left-0 top-0 w-full h-screen border border-[#E7DCC8] shadow-xl overflow-hidden flex justify-center items-center z-50">
          <div
            onClick={() => setOpen(false)}
            className="bg-black/70 w-3/4 h-full"
          ></div>
          <div className="bg-white w-1/4 h-full z-50">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => {
                  console.log("Click worked");
                  changeLanguage(lang.code);
                }}
                className=" w-full text-left px-4 py-3 text-sm hover:bg-[#F8F4EC] transition "
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleTranslate;
