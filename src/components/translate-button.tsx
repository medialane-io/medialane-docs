"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, X, ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: "", label: "English (original)" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "zh-CN", label: "中文 (简体)" },
  { code: "zh-TW", label: "中文 (繁體)" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "ar", label: "العربية" },
  { code: "hi", label: "हिन्दी" },
  { code: "ru", label: "Русский" },
  { code: "tr", label: "Türkçe" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "vi", label: "Tiếng Việt" },
];

function triggerTranslation(langCode: string) {
  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (!select) return false;
  select.value = langCode;
  select.dispatchEvent(new Event("change"));
  return true;
}

export function TranslateButton() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Poll until Google Translate injects its select element
  useEffect(() => {
    const id = setInterval(() => {
      if (document.querySelector(".goog-te-combo")) {
        setReady(true);
        clearInterval(id);
      }
    }, 300);
    return () => clearInterval(id);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function select(code: string) {
    if (code === "") {
      // Google Translate has no programmatic restore — clear the cookie and reload
      const expiry = "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; ${expiry}`;
      document.cookie = `googtrans=; ${expiry} domain=${window.location.hostname}`;
      document.cookie = `googtrans=; ${expiry} domain=.${window.location.hostname}`;
      window.location.reload();
      return;
    }
    triggerTranslation(code);
    setActive(code);
    setOpen(false);
  }

  const activeLabel = LANGUAGES.find((l) => l.code === active)?.label ?? "Translate";
  const isTranslated = active !== "";

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="mb-1 w-52 rounded-xl border border-border bg-background shadow-xl overflow-hidden">
          <div className="px-3 py-2 border-b border-border/50 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Translate page</span>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="max-h-72 overflow-y-auto py-1">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => select(code)}
                className={`w-full text-left px-3 py-1.5 text-sm transition-colors hover:bg-muted/60 ${
                  active === code ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="px-3 py-2 border-t border-border/50">
            <p className="text-[10px] text-muted-foreground/60">Powered by Google Translate</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        title="Translate this page"
        className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium shadow-lg transition-all hover:scale-105 active:scale-95 ${
          isTranslated
            ? "border-primary/40 bg-primary/10 text-primary"
            : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-border/80"
        } ${!ready ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <Globe className="h-3.5 w-3.5" />
        {isTranslated ? (
          <>
            <span>{activeLabel}</span>
            <ChevronDown className="h-3 w-3" />
          </>
        ) : (
          <span>Translate</span>
        )}
      </button>
    </div>
  );
}
