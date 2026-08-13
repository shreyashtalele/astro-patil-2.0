// app/components/SocialShare.tsx
"use client";

import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { SITE_CONFIG } from "@/app/data/config";

interface SocialShareProps {
  title: string;
  url?: string;
}

export function SocialShare({ title, url }: SocialShareProps) {
  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = `Check out ${title} - ${SITE_CONFIG.meta.title}`;

  return (
    <div className="flex gap-2">
      <button
        onClick={() =>
          window.open(
            `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
            "_blank",
          )
        }
        aria-label="Share on WhatsApp"
        className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition-opacity"
      >
        <FaWhatsapp size={18} />
      </button>
      <button
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            "_blank",
          )
        }
        aria-label="Share on Twitter"
        className="p-2 rounded-full bg-[#1DA1F2] text-white hover:opacity-80 transition-opacity"
      >
        <FaTwitter size={18} />
      </button>
      <button
        onClick={() =>
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            "_blank",
          )
        }
        aria-label="Share on Facebook"
        className="p-2 rounded-full bg-[#4267B2] text-white hover:opacity-80 transition-opacity"
      >
        <FaFacebook size={18} />
      </button>
    </div>
  );
}
