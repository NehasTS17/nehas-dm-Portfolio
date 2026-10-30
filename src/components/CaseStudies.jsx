import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import WebDesign from '../assets/images/Web Design.png'
import Blogging from '../assets/images/Blogging.png'
import Poster1 from '../assets/images/poster 1.jpg'
import Poster2 from '../assets/images/poster 2.jpg'
import Poster3 from '../assets/images/poster 3.jpg'
import Poster4 from '../assets/images/poster 4.jpg'
import Poster5 from '../assets/images/poster 5.jpg'
import Poster6 from '../assets/images/poster 6.jpg'
import Poster7 from '../assets/images/poster 7.png'
import Poster8 from '../assets/images/poster 8.png'
import Poster9 from '../assets/images/poster 9.png'
import Poster10 from '../assets/images/poster 10.png'
const CaseStudies = () => {
  const { isDark } = useTheme();
  const [selectedPoster, setSelectedPoster] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Planet Beauty Salon',
      description: 'Planet Beauty Salon is a modern and elegant website design created to reflect beauty, confidence, and self-care.',
      image: WebDesign,
      link: 'https://planetbeauty.wuaze.com/',
      category: 'Web Design'
    },
    {
      id: 2,
      title: 'Blogging',
      description: 'A modern and visually appealing blog design created for Planet Beauty Salon.',
      image: Blogging,
      link: 'https://planetbeautysalon13.blogspot.com/2026/03/planet-beauty-salon.html',
      category: 'Content'
    },
  ];

  const posterGallery = [
    { id: 1, title: 'Poster 1', image: Poster1 },
    { id: 2, title: 'Poster 2', image: Poster2 },
    { id: 3, title: 'Poster 3', image: Poster3 },
    { id: 4, title: 'Poster 4', image: Poster4 },
    { id: 5, title: 'Poster 5', image: Poster5 },
    { id: 6, title: 'Poster 6', image: Poster6 },
    { id: 7, title: 'Poster 7', image: Poster7 },
    { id: 8, title: 'Poster 8', image: Poster8 },
    { id: 9, title: 'Poster 9', image: Poster9 },
    { id: 10, title: 'Poster 10', image: Poster10 },
  ];

  const posterPageSize = 4;
  const totalPosterPages = Math.ceil(posterGallery.length / posterPageSize);
  const [posterPage, setPosterPage] = useState(1);

  const currentPosterPage = posterGallery.slice(
    (posterPage - 1) * posterPageSize,
    posterPage * posterPageSize
  );

  const navigatePoster = (direction) => {
    if (!selectedPoster) return;

    const currentIndex = posterGallery.findIndex((poster) => poster.id === selectedPoster.id);
    const nextIndex = (currentIndex + direction + posterGallery.length) % posterGallery.length;

    setSelectedPoster(posterGallery[nextIndex]);
  };

  const goToPosterPage = (page) => {
    if (page >= 1 && page <= totalPosterPages) {
      setPosterPage(page);
    }
  };

  return (
    <>
      {/* Case Studies Section */}
      <section 
        id="case-studies"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isDark ? 'bg-slate-900' : 'bg-slate-50'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Case <span style={{ color: `rgb(var(--color-primary))` }}>Studies</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <a
                key={study.id}
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-fade-in ${
                  isDark ? 'bg-slate-800' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-300"
                    style={{ backgroundColor: `rgb(var(--color-primary))` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: `rgb(var(--color-primary))` }}
                    >
                      {study.category}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                    isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {study.title}
                  </h3>
                  <p className={`text-sm transition-all duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {study.description}
                  </p>

                  {/* Link Arrow */}
                  <div className="mt-4 flex items-center gap-2 font-semibold"
                    style={{ color: `rgb(var(--color-primary))` }}>
                    <span>View Project</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Poster Gallery Section */}
      <section
        id="poster-gallery"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-12 text-center transition-all duration-300 ${isDark ? 'text-white' : 'text-slate-900'
              }`}
          >
            Poster <span style={{ color: `rgb(var(--color-primary))` }}>Design</span>
          </h2>

          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPosterPage.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => setSelectedPoster(poster)}
                  className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${isDark ? 'bg-slate-700' : 'bg-slate-50'
                    }`}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className={`text-lg font-bold transition-all duration-300 ${isDark
                          ? 'text-white group-hover:text-blue-400'
                          : 'text-slate-900 group-hover:text-blue-600'
                        }`}
                    >
                      {poster.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => goToPosterPage(posterPage - 1)}
                disabled={posterPage === 1}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  posterPage === 1
                    ? 'cursor-not-allowed bg-slate-300 text-slate-500'
                    : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                }`}
                aria-label="Previous page"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              {[...Array(totalPosterPages)].map((_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => goToPosterPage(pageNumber)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      posterPage === pageNumber
                        ? 'bg-[rgb(var(--color-primary))] text-white'
                        : isDark
                          ? 'bg-slate-700 text-white hover:bg-slate-600'
                          : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => goToPosterPage(posterPage + 1)}
                disabled={posterPage === totalPosterPages}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  posterPage === totalPosterPages
                    ? 'cursor-not-allowed bg-slate-300 text-slate-500'
                    : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                }`}
                aria-label="Next page"
              >
                <span>Next</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Poster Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex justify-center items-start p-6 overflow-y-auto"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPoster(null)}
              className="fixed top-6 right-6 text-white text-3xl hover:text-gray-300"
            >
              ✕
            </button>

            {/* Full Image */}
            <img
              src={selectedPoster.image}
              alt={selectedPoster.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <div className="mt-6 mb-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => navigatePoster(-1)}
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                aria-label="Previous poster"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              <h3 className="text-white text-xl font-bold">
                {selectedPoster.title}
              </h3>

              <button
                type="button"
                onClick={() => navigatePoster(1)}
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                aria-label="Next poster"
              >
                <span>Next</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;
