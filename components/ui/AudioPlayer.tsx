"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";

export function AudioPlayer({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      void el.play().catch(() => setPlaying(false));
    }
  }

  return (
    <div className="inline-flex items-center gap-3.5 rounded-full border border-border bg-bg-elevated py-2 pl-2 pr-5">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause audio" : "Play audio"}
        className="grid h-11 w-11 place-items-center rounded-full bg-accent text-on-accent transition-transform active:scale-95"
      >
        {playing ? (
          <Pause size={18} weight="fill" />
        ) : (
          <Play size={18} weight="fill" className="ml-0.5" />
        )}
      </button>
      <span className="text-[0.92rem] text-text-muted">{label}</span>
      <audio
        ref={ref}
        src={src}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
