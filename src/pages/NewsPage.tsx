import React from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Award
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/portfolioData';
import { NewsArticle } from '../types';

interface NewsPageProps {
  onSelectNews: (article: NewsArticle) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onSelectNews }) => {
  return (
    <div id="news-page" className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-3">
            PRESS & FESTIVAL DISPATCHES
          </span>
          <div>
            <h1 className="text-5xl sm:text-7xl font-bebas tracking-wide text-white leading-none">
              NEWS & HEADLINES.
            </h1>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-2xl font-light mt-4 leading-relaxed">
              Stay updated on official international film festival selections, behind-the-scenes production dispatches, and studio milestones across Mumbai and Odisha.
            </p>
          </div>
        </div>

        {/* Festival Laurels Banner */}
        <div className="bg-[#121212] rounded-xl border border-white/10 p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-white tracking-wide">
                GLOBAL FESTIVAL RECORD
              </h3>
              <p className="text-xs text-[#A0A0A0] font-mono">
                Official Selections: TIFF &bull; Busan &bull; Clermont-Ferrand &bull; IFFI Goa &bull; NYIFF
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#F5A623]">
            <span>10+ LAURELS LOGGED</span>
          </div>
        </div>

        {/* News Feed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectNews(article)}
              className="bg-[#111111] rounded-xl overflow-hidden border border-white/10 hover:border-[#F5A623] transition-all cursor-pointer flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-black relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 bg-[#F5A623] text-black text-[9px] font-mono font-bold uppercase rounded">
                      {article.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[#888888] mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#F5A623]" />
                      <span>{article.date}</span>
                    </div>
                    <span>&bull;</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bebas text-2xl text-white group-hover:text-[#F5A623] transition-colors leading-tight mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#A0A0A0] font-light line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#F5A623] mt-4">
                <span>READ COMPLETE ARTICLE</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
