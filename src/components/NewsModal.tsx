import React, { useEffect } from 'react';
import { X, Calendar, Clock, Tag, ExternalLink, Award } from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!article) return null;

  return (
    <div
      id="news-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="news-modal-dialog"
        className="bg-[#0E0E0E] border border-white/15 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl relative text-white my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121212]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-[#F5A623] text-black text-[10px] font-mono font-bold uppercase rounded">
              {article.tag}
            </span>
            <span className="text-xs font-mono text-[#A0A0A0]">
              {article.source}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-white/10 text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-contain sm:object-cover sm:object-top opacity-95 transition-opacity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center gap-4 text-xs font-mono text-[#E0E0E0] z-10">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>{article.monthYear}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
          <div>
            <span className="text-[11px] font-mono text-[#F5A623] tracking-widest uppercase block mb-1">
              ORISSAPOST &bull; EDITION 832 &bull; PAGE 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-bebas tracking-wide text-white leading-tight">
              {article.title}
            </h2>
          </div>

          {article.festivalLaurels && article.festivalLaurels.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.festivalLaurels.map((laurel, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-mono text-[#F5A623]"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>{laurel}</span>
                </span>
              ))}
            </div>
          )}

          <div className="space-y-4 text-sm text-[#CCCCCC] font-light leading-relaxed">
            {article.fullBody.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {article.externalUrl && (
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#F5A623] tracking-widest block mb-1">
                  OFFICIAL NEWSPAPER ARCHIVE
                </span>
                <p className="text-xs text-[#A0A0A0] font-light">
                  View the original print clipping and newspaper page on OrissaPOST ePaper portal.
                </p>
              </div>
              <a
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5A623] hover:bg-[#ffb53d] text-black text-xs font-mono font-bold tracking-wider transition-colors shrink-0"
              >
                <span>OPEN ORISSAPOST EPAPER</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#888888]">
            <span>PUBLISHED BY {article.source.toUpperCase()}</span>
            <div className="flex items-center gap-4">
              {article.externalUrl && (
                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5A623] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>ORIGINAL ARTICLE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white hover:underline cursor-pointer"
              >
                CLOSE DISPATCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
