"use client";

export default function Video() {
  return (
    <section className="relative w-full py-8 lg:py-16 bg-white">
      {/* Video Container - with padding on all sizes */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[170px] lg:h-[600px] object-cover"
        >
          <source src="/vedio/icedale.mp4" type="video/mp4" />
          <source src="/vedio/icedale.mov" type="video/quicktime" />
          <source src="/vedio/icedale.webm" type="video/webm" />
          {/* Fallback if video doesn't load */}
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

