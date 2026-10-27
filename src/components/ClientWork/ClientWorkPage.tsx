import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { ArrowLeft } from 'lucide-react';

import Navbar from '../Navbar';
import ImageSlider from '../ImageSlider';

const dermyxModules = import.meta.glob('../../assets/DermyxWork/*.jpeg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const novaModules = import.meta.glob('../../assets/NovaWork/*.jpeg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

interface WorkGroup {
  title: string;
  files: string[];
}

// Grouped by matching background colour + product, as sorted from the raw exports.
const dermyxGroups: WorkGroup[] = [
  {
    title: 'Foligrow on Purple',
    files: [
      'WhatsApp Image 2026-10-27 at 12.37.33 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.34 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.35 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.36 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.36 AM.jpeg',
    ],
  },
  {
    title: 'Foligrow on Blue',
    files: [
      'WhatsApp Image 2026-10-27 at 12.37.31 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.32 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.33 AM.jpeg',
    ],
  },
  {
    title: 'Luvanté on Pink',
    files: [
      'WhatsApp Image 2026-10-27 at 12.37.37 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.37 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.38 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.39 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.39 AM.jpeg',
    ],
  },
  {
    title: 'Clenzic on Blue',
    files: [
      'WhatsApp Image 2026-10-27 at 12.37.40 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.41 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.41 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.42 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.38.02 AM.jpeg',
    ],
  },
  {
    title: 'DERMYX Mixed Backdrops',
    files: [
      'WhatsApp Image 2026-10-27 at 12.37.38 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.42 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.42 AM (2).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.43 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.44 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 12.37.54 AM.jpeg',
    ],
  },
];

const neroGroups: WorkGroup[] = [
  {
    title: 'NÉRO on Dark Chocolate',
    files: [
      'WhatsApp Image 2026-10-27 at 1.00.48 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.02.42 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.02.43 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.02.44 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.03.03 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.19 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.34 AM (2).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.35 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.37 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.37 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.38 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.38 AM (2).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.40 AM (2).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.40 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.41 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.43 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.43 AM (2).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.43 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.44 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.45 AM (1).jpeg',
    ],
  },
  {
    title: 'NÉRO on Beige & Gold',
    files: [
      'WhatsApp Image 2026-10-27 at 1.02.46 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.18 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.20 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.34 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.35 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.38 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.39 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.39 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.40 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.41 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.44 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.45 AM.jpeg',
    ],
  },
  {
    title: 'NÉRO on Emerald',
    files: [
      'WhatsApp Image 2026-10-27 at 1.02.43 AM (2).jpeg',
      'WhatsApp Image 2026-10-27 at 1.02.43 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.02.46 AM (1).jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.26 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.46 AM.jpeg',
    ],
  },
  {
    title: 'NÉRO on Maroon',
    files: [
      'WhatsApp Image 2026-10-27 at 1.02.45 AM.jpeg',
      'WhatsApp Image 2026-10-27 at 1.05.20 AM (1).jpeg',
    ],
  },
];

const toGroups = (modules: Record<string, string>, groups: WorkGroup[]) => {
  const keys = Object.keys(modules).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const unmatched = new Set(keys);

  const resolved = groups
    .map((group) => ({
      title: group.title,
      images: group.files
        .map((file) => keys.find((key) => key.endsWith(`/${file}`)))
        .filter((key): key is string => {
          if (!key) return false;
          unmatched.delete(key);
          return true;
        })
        .map((key) => modules[key]),
    }))
    .filter((group) => group.images.length > 0);

  if (unmatched.size > 0) {
    resolved[resolved.length - 1].images.push(...[...unmatched].map((key) => modules[key]));
  }

  return resolved;
};

export type ClientSlug = 'dermyx' | 'nero';

interface ClientWork {
  client: string;
  description: string;
  groups: { title: string; images: string[] }[];
}

export const clientWorks: Record<ClientSlug, ClientWork> = {
  dermyx: {
    client: 'DERMYX Skincare',
    description:
      'Campaign and social creatives for DERMYX — Luvanté, Clenzic, SunBae and Foligrow product stories, seasonal promotions and gifting content.',
    groups: toGroups(dermyxModules, dermyxGroups),
  },
  nero: {
    client: 'NERO',
    description:
      'Packaging-led brand visuals for NERO — product storytelling, gifting guides and seasonal campaign creatives.',
    groups: toGroups(novaModules, neroGroups),
  },
};

const ClientWorkPage: React.FC<{ slug: ClientSlug }> = ({ slug }) => {
  const work = clientWorks[slug];
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [slug, lenis]);

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden relative">
      <Navbar />

      <section className="relative w-full pt-48 pb-8 px-6 flex flex-col items-center text-center z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] md:w-[50%] h-[45vh] bg-[#01C000] blur-[180px] -z-10 rounded-full"
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[13vw] sm:text-[80px] md:text-[110px] lg:text-[140px] font-black leading-[0.85] tracking-tighter italic uppercase"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#01C000] to-white bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_30px_rgba(1,192,0,0.5)]">
            {work.client}
          </span>
          <span className="block text-white/90">Client Work</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-white/60 font-light leading-relaxed mt-10"
        >
          {work.description}
        </motion.p>
      </section>

      <section className="relative w-full px-4 sm:px-12 pb-24 z-10 overflow-hidden">
        {work.groups.map((group) => (
          <ImageSlider key={group.title} title={group.title} images={group.images} />
        ))}

        <div className="max-w-[1400px] mx-auto flex justify-center mt-16">
          <Link
            to="/"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-transparent bg-white text-black uppercase tracking-wide text-sm font-semibold transition-all duration-300 hover:border-[#01C000] hover:shadow-[0_0_60px_rgba(1,192,0,0.6)]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientWorkPage;
