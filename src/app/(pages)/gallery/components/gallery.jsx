"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"

// Image Carousel Component
function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Video Section Component
function VideoSection({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
              <div className="bg-white/90 p-4 rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-blue-600 group-hover:to-blue-700 group-hover:scale-110">
                <Play className="w-8 h-8 text-gray-800 group-hover:text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-semibold text-lg">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Sample data for the carousels
const firstConferenceImages = [
  {
    src: "/gallery/1.jpg",
    alt: "2nd ICASEM Conference - Opening Ceremony",
  },
  {
    src: "/gallery/2.jpg",
    alt: "2nd ICASEM Conference - Keynote Speaker",
  },
  {
    src: "/gallery/3.jpg",
    alt: "2nd ICASEM Conference - Panel Discussion",
  },
  {
    src: "/gallery/4.jpg",
    alt: "2nd ICASEM Conference - Research Presentation",
  },
  {
    src: "/gallery/5.jpg",
    alt: "2nd ICASEM Conference - Engineering Session",
  },
  {
    src: "/gallery/6.jpg",
    alt: "2nd ICASEM Conference - Award Ceremony",
  },
  {
    src: "/gallery/7.jpg",
    alt: "2nd ICASEM Conference - Networking Session",
  },
  {
    src: "/gallery/8.jpg",
    alt: "2nd ICASEM Conference - Workshop",
  },
  {
    src: "/gallery/9.jpg",
    alt: "2nd ICASEM Conference - Poster Session",
  },
  {
    src: "/gallery/10.jpg",
    alt: "2nd ICASEM Conference - Group Photo",
  },
  {
    src: "/gallery/11.jpg",
    alt: "2nd ICASEM Conference - Closing Ceremony",
  },
]

// Sample video data
const conferenceVideos = [
  {
    id: "video1",
    title: "ICASEM 2024 | Days  Highlights | Full Video",
    thumbnail: "/gallery/thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/jR12HcQLAA4",
  },
 
]

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 py-12 px-4 md:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-tight">
            Conference Gallery
        </h1>

        <div className="space-y-16">
          {/* Conference Section */}
          <section className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 shadow-xl border border-blue-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50">
            <div>
              
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
2nd International Conference on Applied Science, Engineering & Management              </h2>
              <p className="text-gray-700 mt-2 max-w-3xl mb-6">
                Highlights from the 2nd International Conference on Applied Science, Engineering & Management showcasing cutting-edge research and interdisciplinary collaboration.
              </p>
            </div>

            <ImageCarousel images={firstConferenceImages} />
          </section>

          {/* Video Section - Commented out */}
          <section className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 shadow-xl border border-blue-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full">
                FEATURED MEDIA
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
                Conference Videos
              </h2>
              <p className="text-gray-700 mt-2 max-w-3xl mb-6">
                Watch key moments from our conference. Click on a thumbnail to play the video.
              </p>
            </div>

            <VideoSection videos={conferenceVideos} />
          </section>
        </div>

        <footer className="mt-20 text-center text-gray-600">
          <p>© {new Date().getFullYear()} 2nd International Conference on Applied Science, Engineering & Management</p>
          <p className="mt-2 text-sm">
            Bringing together researchers, practitioners, and innovators in applied science, engineering, and management
          </p>
        </footer>
      </div>
    </div>
  )
}