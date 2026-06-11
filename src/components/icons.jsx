export function InstagramIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.9c0 3.2-2.4 5.6-5.5 5.6S5.4 17.6 5.4 14.5c0-3 2.2-5.3 5.2-5.4v2.7c-.3 0-.6.1-.9.2-1.2.4-1.9 1.5-1.7 2.8.2 1.2 1.3 2 2.5 1.9 1.3-.1 2.2-1.1 2.2-2.5V3h2.8z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.5 9.5l4.5 2.5-4.5 2.5v-5z" fill="currentColor" />
    </svg>
  );
}

export function SpotifyIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7.5 9.7c2.9-.8 6-.5 8.6 1M8 12.6c2.3-.6 4.7-.4 6.8.8M8.4 15.2c1.7-.4 3.5-.3 5 .6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm0 1.8a8.2 8.2 0 016.9 12.6l-.3.5.6 2.3-2.4-.6-.5.3A8.2 8.2 0 1112 3.8zm-3.1 4c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.5.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-1.4-.7c-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.2z" />
    </svg>
  );
}

export function StarIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.6 6 6.4.5-4.9 4.2 1.5 6.3L12 16.9 6.4 19.5l1.5-6.3L3 9l6.4-.5L12 2.5z" />
    </svg>
  );
}

export function socialMeta(key) {
  const map = {
    instagram: { label: "Instagram", Icon: InstagramIcon },
    tiktok: { label: "TikTok", Icon: TikTokIcon },
    youtube: { label: "YouTube", Icon: YouTubeIcon },
    spotify: { label: "Spotify", Icon: SpotifyIcon },
  };
  return map[key];
}
