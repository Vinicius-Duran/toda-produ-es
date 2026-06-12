import { useEffect, useRef, useState } from "react";

const CROSSFADE_MS = 700;
const CROSSFADE_LEAD = 0.5;

function getYoutubeId(url) {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]+)/);
  return match ? match[1] : null;
}

function isDirectVideo(url) {
  return Boolean(url) && !getYoutubeId(url);
}

function DirectLoopVideo({ src, poster }) {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster || undefined}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function loadYoutubeApi() {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  return new Promise((resolve) => {
    const finish = () => resolve(window.YT);

    if (document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const wait = window.setInterval(() => {
        if (window.YT?.Player) {
          window.clearInterval(wait);
          finish();
        }
      }, 50);
      return;
    }

    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      finish();
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });
}

function YoutubeSegment({ videoId, start = 0, end, onComplete, onNearEnd, onReady }) {
  const hostRef = useRef(null);
  const playerRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const onNearEndRef = useRef(onNearEnd);
  const onReadyRef = useRef(onReady);
  const nearEndFiredRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onNearEndRef.current = onNearEnd;
    onReadyRef.current = onReady;
  }, [onComplete, onNearEnd, onReady]);

  useEffect(() => {
    nearEndFiredRef.current = false;
    let intervalId = null;
    let destroyed = false;

    loadYoutubeApi().then((YT) => {
      if (destroyed || !hostRef.current) return;

      playerRef.current = new YT.Player(hostRef.current, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          start: Math.floor(start),
          end: end != null ? Math.ceil(end) : undefined,
        },
        events: {
          onReady: (event) => {
            event.target.seekTo(start, true);
            event.target.playVideo();
            onReadyRef.current?.();
          },
        },
      });

      intervalId = window.setInterval(() => {
        const player = playerRef.current;
        if (!player?.getCurrentTime) return;

        const currentTime = player.getCurrentTime();

        if (
          end != null &&
          !nearEndFiredRef.current &&
          currentTime >= end - CROSSFADE_LEAD
        ) {
          nearEndFiredRef.current = true;
          onNearEndRef.current?.();
        }

        if (end != null && currentTime >= end - 0.05) {
          onCompleteRef.current?.();
        }
      }, 100);
    });

    return () => {
      destroyed = true;
      if (intervalId) window.clearInterval(intervalId);
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [videoId, start, end]);

  return (
    <div className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 [&_iframe]:pointer-events-none">
      <div ref={hostRef} className="h-full w-full" />
    </div>
  );
}

function DirectSegment({ src, start = 0, end, poster, onComplete, onNearEnd, onReady }) {
  const videoRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const onNearEndRef = useRef(onNearEnd);
  const onReadyRef = useRef(onReady);
  const nearEndFiredRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onNearEndRef.current = onNearEnd;
    onReadyRef.current = onReady;
  }, [onComplete, onNearEnd, onReady]);

  useEffect(() => {
    nearEndFiredRef.current = false;
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      video.currentTime = start;
      video.play().catch(() => {});
      onReadyRef.current?.();
    };

    const handleTimeUpdate = () => {
      if (end == null) return;

      if (!nearEndFiredRef.current && video.currentTime >= end - CROSSFADE_LEAD) {
        nearEndFiredRef.current = true;
        onNearEndRef.current?.();
      }

      if (video.currentTime >= end - 0.05) {
        onCompleteRef.current?.();
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (video.readyState >= 1) {
      handleLoaded();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [src, start, end]);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      muted
      playsInline
      poster={poster || undefined}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function VideoSegment({ video, poster, onComplete, onNearEnd, onReady }) {
  const youtubeId = getYoutubeId(video.src);
  const start = video.start ?? 0;
  const end = video.end ?? null;

  if (youtubeId) {
    return (
      <YoutubeSegment
        videoId={youtubeId}
        start={start}
        end={end}
        onComplete={onComplete}
        onNearEnd={onNearEnd}
        onReady={onReady}
      />
    );
  }

  return (
    <DirectSegment
      src={video.src}
      start={start}
      end={end}
      poster={video.poster ?? poster}
      onComplete={onComplete}
      onNearEnd={onNearEnd}
      onReady={onReady}
    />
  );
}

function FallbackBackground() {
  return (
    <div className="h-full w-full bg-ink-950">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-800/80 via-ink-950 to-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(149,82,81,0.18),_transparent_65%)]" />
    </div>
  );
}

function VideoLayer({ video, poster, opacity, zIndex, onComplete, onNearEnd, onReady }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden transition-opacity ease-in-out"
      style={{ opacity, zIndex, transitionDuration: `${CROSSFADE_MS}ms` }}
    >
      <VideoSegment
        video={video}
        poster={poster}
        onComplete={onComplete}
        onNearEnd={onNearEnd}
        onReady={onReady}
      />
    </div>
  );
}

function MultiVideoBackground({ videos, poster }) {
  const activeVideos = videos.filter((video) => video?.src);
  const count = activeVideos.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentKey, setCurrentKey] = useState(0);
  const [currentOpacity, setCurrentOpacity] = useState(1);
  const [incoming, setIncoming] = useState(null);
  const crossfadeStartedRef = useRef(false);

  const nextIndex = (index) => (index + 1) % count;

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentKey(0);
    setCurrentOpacity(1);
    setIncoming(null);
    crossfadeStartedRef.current = false;
  }, [videos]);

  const beginCrossfade = () => {
    if (count <= 1 || crossfadeStartedRef.current || incoming) return;
    crossfadeStartedRef.current = true;

    const targetIndex = nextIndex(currentIndex);
    setIncoming({
      key: Date.now(),
      index: targetIndex,
      opacity: 0,
      ready: false,
    });
  };

  const handleIncomingReady = () => {
    setIncoming((layer) => (layer ? { ...layer, ready: true } : layer));
    requestAnimationFrame(() => {
      setIncoming((layer) => (layer ? { ...layer, opacity: 1 } : layer));
      setCurrentOpacity(0);
    });
  };

  const handleCurrentComplete = () => {
    if (incoming) {
      setCurrentIndex(incoming.index);
      setCurrentKey(incoming.key);
      setCurrentOpacity(1);
      setIncoming(null);
      crossfadeStartedRef.current = false;
      return;
    }

    if (count <= 1) {
      setCurrentKey((value) => value + 1);
      crossfadeStartedRef.current = false;
    }
  };

  if (count === 0) {
    return <FallbackBackground />;
  }

  const currentVideo = activeVideos[currentIndex];

  return (
    <div className="absolute inset-0">
      <VideoLayer
        key={currentKey}
        video={currentVideo}
        poster={poster}
        opacity={currentOpacity}
        zIndex={1}
        onNearEnd={beginCrossfade}
        onComplete={handleCurrentComplete}
      />

      {incoming && (
        <VideoLayer
          key={incoming.key}
          video={activeVideos[incoming.index]}
          poster={poster}
          opacity={incoming.opacity}
          zIndex={2}
          onReady={handleIncomingReady}
          onComplete={() => {}}
        />
      )}
    </div>
  );
}

export default function HeroVideoBackground({ directSrc, videos, poster }) {
  if (isDirectVideo(directSrc)) {
    return <DirectLoopVideo src={directSrc} poster={poster} />;
  }

  return <MultiVideoBackground videos={videos} poster={poster} />;
}

export function normalizeHeroVideos(site) {
  if (isDirectVideo(site.heroVideo?.src)) {
    return [];
  }

  if (Array.isArray(site.heroVideos) && site.heroVideos.length > 0) {
    return site.heroVideos.filter((video) => video?.src);
  }

  if (site.heroVideo?.src) {
    return [
      {
        src: site.heroVideo.src,
        start: site.heroVideo.start ?? 0,
        end: site.heroVideo.end ?? null,
        poster: site.heroVideo.poster ?? "",
      },
    ];
  }

  return [];
}

export function getHeroDirectVideo(site) {
  return isDirectVideo(site.heroVideo?.src) ? site.heroVideo.src : "";
}
