// // import React, { useState } from "react";
// // import "../styles/technicalWorks.css";
// // import { CaretLeft, CaretRight, Lightning, Smiley, Clock, ShieldCheck } from "@phosphor-icons/react";
// // import { technicalWorksData, statsData } from "../data/technicalWorks";
// // import type { StatItem } from "../data/technicalWorks";

// // const TechnicalWorks: React.FC = () => {
// //   const [activeIndex, setActiveIndex] = useState(2);

// //   const nextSlide = () => {
// //     setActiveIndex((prev) => (prev + 1) % technicalWorksData.length);
// //   };

// //   const prevSlide = () => {
// //     setActiveIndex((prev) => (prev - 1 + technicalWorksData.length) % technicalWorksData.length);
// //   };

// //   const getCardStyles = (index: number) => {
// //     const total = technicalWorksData.length;
// //     let diff = index - activeIndex;

// //     if (diff > Math.floor(total / 2)) diff -= total;
// //     if (diff < -Math.floor(total / 2)) diff += total;

// //     const absDiff = Math.abs(diff);
    
// //     const scale = absDiff === 0 ? 1.12 : absDiff === 1 ? 0.88 : 0.68;
// //     const translateX = diff * (window.innerWidth <= 500 ? 130 : window.innerWidth <= 768 ? 180 : 230);
// //     const zIndex = 20 - absDiff;
// //     const opacity = absDiff === 0 ? 1 : absDiff === 1 ? 0.65 : 0.25;
// //     const blur = absDiff === 0 ? 0 : absDiff === 1 ? 1.5 : 4;

// //     return {
// //       transform: `translateX(${translateX}px) scale(${scale})`,
// //       zIndex,
// //       opacity,
// //       filter: `blur(${blur}px)`,
// //     };
// //   };

// //   const getStatIcon = (id: StatItem["id"]): React.ReactNode => {
// //     switch (id) {
// //       case "projects": return <Lightning size={32} weight="fill" />;
// //       case "clients": return <Smiley size={32} weight="fill" />;
// //       case "experience": return <Clock size={32} weight="fill" />;
// //       case "quality": return <ShieldCheck size={32} weight="fill" />;
// //       default: return null;
// //     }
// //   };

// //   return (
// //     <section className="technical" id="technical">
// //       <div className="technical-container">
        
// //         <div className="technical-showcase-box">
          
// //           <div className="technical-header">
// //             <span className="technical-badge">Trabajos Técnicos</span>
// //             <h2>Especialidades Técnicas</h2>
// //             <p>Mantenimiento, reparación y armado de equipos.</p>
// //           </div>

// //           <div className="technical-slider-wrapper">
// //             <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Anterior">
// //               <CaretLeft size={22} weight="bold" />
// //             </button>

// //             <div className="technical-grid-viewport">
// //               {technicalWorksData.map((work, index) => {
// //                 const isCenter = index === activeIndex;
// //                 return (
// //                   <article 
// //                     className={`work-card-stepper ${isCenter ? "active" : ""}`} 
// //                     key={index}
// //                     style={getCardStyles(index)}
// //                   >
// //                     <div className="work-image-wrapper">
// //                       <img src={work.image} alt={work.title} className="work-image" />
// //                     </div>
// //                     <div className="work-content">
// //                       <h3>{work.title}</h3>
// //                       <p>{work.description}</p>
// //                       <span className="work-spec">{work.spec}</span>
// //                     </div>
// //                   </article>
// //                 );
// //               })}
// //             </div>

// //             <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Siguiente">
// //               <CaretRight size={22} weight="bold" />
// //             </button>
// //           </div>

// //         </div>

// //         <div className="stats-board">
// //           {statsData.map((stat) => (
// //             <div className="stat-item" key={stat.id}>
// //               <div className="stat-icon-box">
// //                 {getStatIcon(stat.id)}
// //               </div>
// //               <div className="stat-info">
// //                 {stat.value && <span className="stat-value">{stat.value}</span>}
// //                 <p className="stat-label">{stat.label}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default TechnicalWorks;

// import React, { useState, useEffect, useRef } from "react";
// import "../styles/technicalWorks.css";
// import { CaretLeft, CaretRight, Lightning, Smiley, Clock, ShieldCheck } from "@phosphor-icons/react";
// import { technicalWorksData, statsData } from "../data/technicalWorks";
// import type { StatItem } from "../data/technicalWorks";

// const TechnicalWorks: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(2);
//   const statsBoardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const board = statsBoardRef.current;
//     if (!board) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("statsBoardVisible");
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     observer.observe(board);
//     return () => observer.disconnect();
//   }, []);

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % technicalWorksData.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + technicalWorksData.length) % technicalWorksData.length);
//   };

//   const getCardStyles = (index: number) => {
//     const total = technicalWorksData.length;
//     let diff = index - activeIndex;

//     if (diff > Math.floor(total / 2)) diff -= total;
//     if (diff < -Math.floor(total / 2)) diff += total;

//     const absDiff = Math.abs(diff);
    
//     const scale = absDiff === 0 ? 1.12 : absDiff === 1 ? 0.88 : 0.68;
//     const translateX = diff * (window.innerWidth <= 500 ? 130 : window.innerWidth <= 768 ? 180 : 230);
//     const zIndex = 20 - absDiff;
//     const opacity = absDiff === 0 ? 1 : absDiff === 1 ? 0.65 : 0.25;
//     const blur = absDiff === 0 ? 0 : absDiff === 1 ? 1.5 : 4;

//     return {
//       transform: `translateX(${translateX}px) scale(${scale})`,
//       zIndex,
//       opacity,
//       filter: `blur(${blur}px)`,
//     };
//   };

//   const getStatIcon = (id: StatItem["id"]): React.ReactNode => {
//     switch (id) {
//       case "projects": return <Lightning size={32} weight="fill" />;
//       case "clients": return <Smiley size={32} weight="fill" />;
//       case "experience": return <Clock size={32} weight="fill" />;
//       case "quality": return <ShieldCheck size={32} weight="fill" />;
//       default: return null;
//     }
//   };

//   return (
//     <section className="technical" id="technical">
//       <div className="technical-container">
        
//         <div className="technical-showcase-box">
          
//           <div className="technical-header">
//             <span className="technical-badge">Trabajos Técnicos</span>
//             <h2>Especialidades Técnicas</h2>
//             <p>Mantenimiento, reparación y armado de equipos.</p>
//           </div>

//           <div className="technical-slider-wrapper">
//             <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Anterior">
//               <CaretLeft size={22} weight="bold" />
//             </button>

//             <div className="technical-grid-viewport">
//               {technicalWorksData.map((work, index) => {
//                 const isCenter = index === activeIndex;
//                 return (
//                   <article 
//                     className={`work-card-stepper ${isCenter ? "active" : ""}`} 
//                     key={index}
//                     style={getCardStyles(index)}
//                   >
//                     <div className="work-image-wrapper">
//                       <img src={work.image} alt={work.title} className="work-image" />
//                     </div>
//                     <div className="work-content">
//                       <h3>{work.title}</h3>
//                       <p>{work.description}</p>
//                       <span className="work-spec">{work.spec}</span>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>

//             <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Siguiente">
//               <CaretRight size={22} weight="bold" />
//             </button>
//           </div>

//         </div>

//         <div className="stats-board" ref={statsBoardRef}>
//           {statsData.map((stat, index) => (
//             <div 
//               className="stat-item" 
//               key={stat.id}
//               style={{ "--stat-delay": `${index * 150}ms` } as React.CSSProperties}
//             >
//               <div className="stat-icon-box">
//                 {getStatIcon(stat.id)}
//               </div>
//               <div className="stat-info">
//                 {stat.value && <span className="stat-value">{stat.value}</span>}
//                 <p className="stat-label">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TechnicalWorks;

import React, { useState, useEffect, useRef } from "react";
import "../styles/technicalWorks.css";
import { CaretLeft, CaretRight, Lightning, Smiley, Clock, ShieldCheck } from "@phosphor-icons/react";
import { technicalWorksData, statsData } from "../data/technicalWorks";
import type { StatItem } from "../data/technicalWorks";

const TechnicalWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const statsBoardRef = useRef<HTMLDivElement>(null);
  
  // Refs para almacenar la posición del touch sin disparar re-renders innecesarios
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const board = statsBoardRef.current;
    if (!board) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("statsBoardVisible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % technicalWorksData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + technicalWorksData.length) % technicalWorksData.length);
  };

  // Manejadores de eventos para el Swipe táctil
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Mínimo de píxeles para registrar el movimiento

    // Swipe a la izquierda -> Siguiente
    if (distance > minSwipeDistance) {
      nextSlide();
    }
    // Swipe a la derecha -> Anterior
    if (distance < -minSwipeDistance) {
      prevSlide();
    }

    // Reseteamos los valores
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getCardStyles = (index: number) => {
    const total = technicalWorksData.length;
    let diff = index - activeIndex;

    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    const absDiff = Math.abs(diff);
    
    const scale = absDiff === 0 ? 1.12 : absDiff === 1 ? 0.88 : 0.68;
    const translateX = diff * (window.innerWidth <= 500 ? 130 : window.innerWidth <= 768 ? 180 : 230);
    const zIndex = 20 - absDiff;
    const opacity = absDiff === 0 ? 1 : absDiff === 1 ? 0.65 : 0.25;
    const blur = absDiff === 0 ? 0 : absDiff === 1 ? 1.5 : 4;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
      filter: `blur(${blur}px)`,
    };
  };

  const getStatIcon = (id: StatItem["id"]): React.ReactNode => {
    switch (id) {
      case "projects": return <Lightning size={32} weight="fill" />;
      case "clients": return <Smiley size={32} weight="fill" />;
      case "experience": return <Clock size={32} weight="fill" />;
      case "quality": return <ShieldCheck size={32} weight="fill" />;
      default: return null;
    }
  };

  return (
    <section className="technical" id="technical">
      <div className="technical-container">
        
        <div className="technical-showcase-box">
          
          <div className="technical-header">
            <span className="technical-badge">Trabajos Técnicos</span>
            <h2>Especialidades Técnicas</h2>
            <p>Mantenimiento, reparación y armado de equipos.</p>
          </div>

          {/* Inyectamos los listeners nativos en el contenedor del slider */}
          <div 
            className="technical-slider-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Anterior">
              <CaretLeft size={22} weight="bold" />
            </button>

            <div className="technical-grid-viewport">
              {technicalWorksData.map((work, index) => {
                const isCenter = index === activeIndex;
                return (
                  <article 
                    className={`work-card-stepper ${isCenter ? "active" : ""}`} 
                    key={index}
                    style={getCardStyles(index)}
                  >
                    <div className="work-image-wrapper">
                      <img src={work.image} alt={work.title} className="work-image" />
                    </div>
                    <div className="work-content">
                      <h3>{work.title}</h3>
                      <p>{work.description}</p>
                      <span className="work-spec">{work.spec}</span>
                    </div>
                  </article>
                );
              })}
            </div>

            <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Siguiente">
              <CaretRight size={22} weight="bold" />
            </button>
          </div>

        </div>

        <div className="stats-board" ref={statsBoardRef}>
          {statsData.map((stat, index) => (
            <div 
              className="stat-item" 
              key={stat.id}
              style={{ "--stat-delay": `${index * 150}ms` } as React.CSSProperties}
            >
              <div className="stat-icon-box">
                {getStatIcon(stat.id)}
              </div>
              <div className="stat-info">
                {stat.value && <span className="stat-value">{stat.value}</span>}
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalWorks;