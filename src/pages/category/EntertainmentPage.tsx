import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "@/lib/gsap" // Assuming this is your configured alias
import { Music, Tv, Gamepad2, Dumbbell, Newspaper, BookOpen, ChevronRight, Check, Share2, Gift, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: 'Apple TV+',
    tagline: 'Get 3 months free when you buy an Apple device.',
    description: 'Award-winning original shows and movies.',
    price: '$9.99/month',
    icon: Tv,
    color: 'from-[#1c1c1e] to-[#2c2c2e]',
    textColor: 'text-white',
    btnColor: 'bg-white text-black',
    badge: 'New Shows'
  },
  {
    name: 'Apple Music',
    tagline: 'Over 100 million songs. Spatial Audio.',
    description: 'The ultimate music streaming experience.',
    price: '$10.99/month',
    icon: Music,
    color: 'from-[#fa233b] to-[#fb5c74]',
    textColor: 'text-white',
    btnColor: 'bg-white text-[#fa233b]',
    badge: null
  },
  {
    name: 'Apple Arcade',
    tagline: 'Get 3 months free.',
    description: 'Unlimited access to 200+ games. No ads. No in-app purchases.',
    price: '$6.99/month',
    icon: Gamepad2,
    color: 'from-[#f55733] to-[#f9a825]',
    textColor: 'text-white',
    btnColor: 'bg-white text-[#f55733]',
    badge: '200+ Games'
  },
  {
    name: 'Apple Fitness+',
    tagline: 'Fitness for everyone.',
    description: 'Workouts from 5 to 45 minutes. From HIIT to Meditation.',
    price: '$9.99/month',
    icon: Dumbbell,
    color: 'from-[#00f5ea] to-[#007aff]',
    textColor: 'text-black',
    btnColor: 'bg-black text-white',
    badge: null
  },
  {
    name: 'Apple News+',
    tagline: 'Hundreds of magazines.',
    description: 'Leading newspapers and premium digital publishers.',
    price: '$12.99/month',
    icon: Newspaper,
    color: 'from-[#ff2d55] to-[#ff375f]',
    textColor: 'text-white',
    btnColor: 'bg-white text-[#ff2d55]',
    badge: null
  },
  {
    name: 'Apple Books',
    tagline: 'Read anywhere.',
    description: 'Millions of titles at your fingertips. Audiobooks included.',
    price: 'Pay per book',
    icon: BookOpen,
    color: 'from-[#ff9500] to-[#ffcc00]',
    textColor: 'text-white',
    btnColor: 'bg-white text-[#ff9500]',
    badge: null
  },
];

const appleOneTiers = [
  {
    name: 'Individual',
    price: '$19.95/mo',
    savings: 'Save $9/mo',
    features: ['Apple Music', 'Apple TV+', 'Apple Arcade', 'iCloud+ (50GB)'],
  },
  {
    name: 'Family',
    price: '$25.95/mo',
    savings: 'Save $11/mo',
    features: ['Share with up to 5 people', 'Apple Music', 'Apple TV+', 'Apple Arcade', 'iCloud+ (200GB)'],
    recommended: true
  },
  {
    name: 'Premier',
    price: '$37.95/mo',
    savings: 'Save $29/mo',
    features: ['Share with up to 5 people', 'Apple Music', 'Apple TV+', 'Apple Arcade', 'Apple News+', 'Apple Fitness+', 'iCloud+ (2TB)'],
  }
];

export default function EntertainmentPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const heroItems = heroRef.current?.querySelectorAll('.animate-item');
      if (heroItems && heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
          }
        );
      }

      // Card Stagger Animation
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Apple One Animation
      gsap.from('.tier-card', {
        scrollTrigger: {
          trigger: '.tiers-grid',
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // FIX: Changed pt-20 to pt-32 to prevent navbar collision
    <div ref={containerRef} className="min-h-screen bg-[#f5f5f7] pt-32 pb-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative container mx-auto px-6 mb-24">
        <div className="bg-[#1d1d1f] rounded-[40px] p-12 md:p-24 text-center text-white overflow-hidden relative">
          {/* Animated Background Glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-apple-blue/20 blur-[120px] rounded-full animate-pulse-soft"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="animate-item inline-block text-sm font-semibold text-apple-blue uppercase tracking-[0.2em] mb-6">
              Entertainment
            </span>
            <h1 className="animate-item text-5xl md:text-8xl font-bold tracking-tight mb-8">
              All your favorites. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-purple-400">
                In one place.
              </span>
            </h1>
            <p className="animate-item text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
              Movies, music, games, and more. Bundle them all with Apple One and enjoy more for less.
            </p>
            <div className="animate-item flex justify-center gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Try Apple One Free
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Services Grid */}
      <div className="services-grid container mx-auto px-6 mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] mb-4">The services you love.</h2>
            <p className="text-xl text-[#86868b]">Experience the best of Apple on all your devices.</p>
          </div>
          <Link to="/store" className="text-apple-blue font-medium hover:underline mt-4 md:mt-0 flex items-center">
            Shop devices <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="service-card group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Header Gradient */}
                <div className={`h-40 bg-gradient-to-br ${service.color} p-8 flex justify-between items-start relative overflow-hidden`}>
                  <div className="z-10 bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                    <Icon className={`w-8 h-8 ${service.textColor}`} />
                  </div>
                  {service.badge && (
                    <span className="z-10 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                      {service.badge}
                    </span>
                  )}
                  {/* Decorative Abstract Icon in background */}
                  <Icon className={`absolute -bottom-8 -right-8 w-40 h-40 ${service.textColor} opacity-10 group-hover:scale-125 transition-transform duration-1000`} />
                </div>

                {/* Content */}
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">{service.name}</h3>
                  <p className="text-lg font-semibold text-[#1d1d1f] mb-3 leading-snug">
                    {service.tagline}
                  </p>
                  <p className="text-[#86868b] leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="pt-6 border-t border-apple-gray-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#1d1d1f]">{service.price}</span>
                    <button className="flex items-center text-apple-blue font-semibold hover:gap-2 transition-all">
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Showcase (Apple One Highlight) */}
      <section className="bg-white py-32 mb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-[#f5f5f7] rounded-[32px] flex items-center justify-center p-12">
                    <Music className="w-full h-full text-pink-500" />
                  </div>
                  <div className="aspect-square bg-[#f5f5f7] rounded-[32px] flex items-center justify-center p-12">
                    <Tv className="w-full h-full text-black" />
                  </div>
                  <div className="aspect-square bg-[#f5f5f7] rounded-[32px] flex items-center justify-center p-12">
                    <Gamepad2 className="w-full h-full text-orange-500" />
                  </div>
                  <div className="aspect-square bg-[#f5f5f7] rounded-[32px] flex items-center justify-center p-12">
                    <Sparkles className="w-full h-full text-apple-blue" />
                  </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-3 p-2 pr-6 bg-apple-gray-50 rounded-full border border-apple-gray-100">
                <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold"></span>
                <span className="text-sm font-bold text-[#1d1d1f]">Bundle & Save</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#1d1d1f] tracking-tight">
                One subscription. <br />
                Everything Apple.
              </h2>
              <p className="text-xl text-[#86868b] leading-relaxed">
                Apple One bundles up to six amazing Apple services into one easy subscription. 
                Get the Individual, Family, or Premier plan and enjoy a simpler way to get more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-black/90 transition-all">
                  Try it Free
                </button>
                <button className="flex items-center justify-center gap-2 font-bold text-apple-blue">
                  Learn more about plans <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Apple One Bundle Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
               <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs"></span>
               <span className="text-3xl font-bold">One</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-6">
              Bundle and save.
            </h2>
            <p className="text-xl text-[#86868b] leading-relaxed">
              Apple One bundles up to six amazing Apple services into one easy subscription. 
              Get one monthly invoice. Manage it all in one place.
            </p>
          </div>

          <div className="tiers-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {appleOneTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`tier-card relative flex flex-col p-10 rounded-[32px] border ${tier.recommended ? 'border-[#0071e3] shadow-xl bg-white' : 'border-gray-200 bg-[#fbfbfd]'}`}
              >
                {tier.recommended && (
                   <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0071e3] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                      Recommended
                   </span>
                )}
                
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">{tier.name}</h3>
                <p className="text-4xl font-bold text-[#1d1d1f] mb-2">{tier.price}</p>
                <p className="text-[#0071e3] font-medium text-sm mb-8">{tier.savings}</p>

                <div className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#1d1d1f] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1d1d1f] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-full font-semibold transition-all ${tier.recommended ? 'bg-[#0071e3] text-white hover:bg-[#0077ed]' : 'bg-[#e8e8ed] text-[#1d1d1f] hover:bg-[#d2d2d7]'}`}>
                  Try it Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-24">
         <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] p-12 flex flex-col justify-center items-start shadow-sm">
               <Share2 className="w-12 h-12 text-[#a155c8] mb-6" />
               <h3 className="text-3xl font-bold text-[#1d1d1f] mb-4">Share with your family.</h3>
               <p className="text-xl text-[#86868b] mb-8">
                  The Family and Premier plans let you share all included services with up to five other people. 
                  And everyone gets private access to each service on their own devices.
               </p>
               <Link to="#" className="text-[#0071e3] font-medium hover:underline flex items-center">
                  Learn about Family Sharing <ChevronRight className="w-4 h-4 ml-1" />
               </Link>
            </div>
            
            <div className="bg-white rounded-[32px] p-12 flex flex-col justify-center items-start shadow-sm">
               <Gift className="w-12 h-12 text-[#ff2d55] mb-6" />
               <h3 className="text-3xl font-bold text-[#1d1d1f] mb-4">Try them free.</h3>
               <p className="text-xl text-[#86868b] mb-8">
                  Get a free trial for any service you haven't subscribed to yet. 
                  Or try Apple One free for one month and get them all.
               </p>
               <Link to="#" className="text-[#0071e3] font-medium hover:underline flex items-center">
                  Start your free trial <ChevronRight className="w-4 h-4 ml-1" />
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}



























// import { useEffect, useRef } from 'react';
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { gsap } from "@/lib/gsap"
// import { 
//   Music, Tv, Gamepad2, Dumbbell, Newspaper, BookOpen, 
//   ChevronRight, Check, Share2, Gift, Play, Star, Sparkles 
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     name: 'Apple TV+',
//     tagline: 'Award-winning Apple Originals.',
//     description: 'Get 3 months free when you buy an Apple device. Critically acclaimed series, films, and documentaries.',
//     price: '$9.99/month',
//     icon: Tv,
//     color: 'from-[#1c1c1e] to-[#2c2c2e]',
//     textColor: 'text-white',
//     badge: 'Trending'
//   },
//   {
//     name: 'Apple Music',
//     tagline: '100 million songs. All ad-free.',
//     description: 'Experience Spatial Audio with Dolby Atmos. Download your favorite tracks and play them offline.',
//     price: '$10.99/month',
//     icon: Music,
//     color: 'from-[#fa233b] to-[#fb5c74]',
//     textColor: 'text-white',
//     badge: 'Spatial Audio'
//   },
//   {
//     name: 'Apple Arcade',
//     tagline: '200+ incredibly fun games.',
//     description: 'No ads. No in-app purchases. Unlimited access for up to six family members.',
//     price: '$6.99/month',
//     icon: Gamepad2,
//     color: 'from-[#f55733] to-[#f9a825]',
//     textColor: 'text-white',
//     badge: 'No Ads'
//   },
//   {
//     name: 'Apple Fitness+',
//     tagline: 'The first fitness service powered by Apple Watch.',
//     description: 'Workouts and meditations from 5 to 45 minutes. New sessions added every week.',
//     price: '$9.99/month',
//     icon: Dumbbell,
//     color: 'from-[#00f5ea] to-[#007aff]',
//     textColor: 'text-black',
//     badge: 'New Workouts'
//   },
//   {
//     name: 'Apple News+',
//     tagline: 'Hundreds of magazines and leading newspapers.',
//     description: 'Top stories curated by editors. Listen to audio versions of the best long-form articles.',
//     price: '$12.99/month',
//     icon: Newspaper,
//     color: 'from-[#ff2d55] to-[#ff375f]',
//     textColor: 'text-white'
//   },
//   {
//     name: 'Apple Books',
//     tagline: 'The best place to lose yourself in a story.',
//     description: 'Browse the Book Store for the latest bestsellers and listen to thousands of audiobooks.',
//     price: 'Pay as you go',
//     icon: BookOpen,
//     color: 'from-[#ff9500] to-[#ffcc00]',
//     textColor: 'text-white'
//   },
// ];

// export default function EntertainmentPage() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Hero Animation
//       gsap.fromTo(
//         '.animate-item',
//         { y: 60, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
//       );

//       // Card Stagger Animation
//       gsap.from('.service-card', {
//         scrollTrigger: {
//           trigger: '.services-grid',
//           start: 'top 80%',
//         },
//         y: 50,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: 'power2.out'
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="min-h-screen bg-[#f5f5f7] pt-32 pb-20 overflow-x-hidden">
      
//       {/* Hero Section */}
//       <div ref={heroRef} className="relative container mx-auto px-6 mb-24">
//         <div className="bg-[#1d1d1f] rounded-[40px] p-12 md:p-24 text-center text-white overflow-hidden relative">
//           {/* Animated Background Glow */}
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-apple-blue/20 blur-[120px] rounded-full animate-pulse-soft"></div>
          
//           <div className="relative z-10 max-w-4xl mx-auto">
//             <span className="animate-item inline-block text-sm font-semibold text-apple-blue uppercase tracking-[0.2em] mb-6">
//               Entertainment
//             </span>
//             <h1 className="animate-item text-5xl md:text-8xl font-bold tracking-tight mb-8">
//               All your favorites. <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-purple-400">
//                 In one place.
//               </span>
//             </h1>
//             <p className="animate-item text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
//               Movies, music, games, and more. Bundle them all with Apple One and enjoy more for less.
//             </p>
//             <div className="animate-item flex justify-center gap-4">
//               <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
//                 Try Apple One Free
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

      // {/* Services Grid */}
      // <div className="services-grid container mx-auto px-6 mb-40">
      //   <div className="flex flex-col md:flex-row justify-between items-end mb-16">
      //     <div className="max-w-2xl">
      //       <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] mb-4">The services you love.</h2>
      //       <p className="text-xl text-[#86868b]">Experience the best of Apple on all your devices.</p>
      //     </div>
      //     <Link to="/store" className="text-apple-blue font-medium hover:underline mt-4 md:mt-0 flex items-center">
      //       Shop devices <ChevronRight className="w-4 h-4" />
      //     </Link>
      //   </div>

      //   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      //     {services.map((service) => {
      //       const Icon = service.icon;
      //       return (
      //         <div
      //           key={service.name}
      //           className="service-card group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col h-full"
      //         >
      //           {/* Header Gradient */}
      //           <div className={`h-40 bg-gradient-to-br ${service.color} p-8 flex justify-between items-start relative overflow-hidden`}>
      //             <div className="z-10 bg-white/20 backdrop-blur-md p-3 rounded-2xl">
      //               <Icon className={`w-8 h-8 ${service.textColor}`} />
      //             </div>
      //             {service.badge && (
      //               <span className="z-10 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
      //                 {service.badge}
      //               </span>
      //             )}
      //             {/* Decorative Abstract Icon in background */}
      //             <Icon className={`absolute -bottom-8 -right-8 w-40 h-40 ${service.textColor} opacity-10 group-hover:scale-125 transition-transform duration-1000`} />
      //           </div>

      //           {/* Content */}
      //           <div className="p-10 flex-1 flex flex-col">
      //             <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">{service.name}</h3>
      //             <p className="text-lg font-semibold text-[#1d1d1f] mb-3 leading-snug">
      //               {service.tagline}
      //             </p>
      //             <p className="text-[#86868b] leading-relaxed mb-8 flex-1">
      //               {service.description}
      //             </p>
                  
      //             <div className="pt-6 border-t border-apple-gray-100 flex items-center justify-between">
      //               <span className="text-sm font-bold text-[#1d1d1f]">{service.price}</span>
      //               <button className="flex items-center text-apple-blue font-semibold hover:gap-2 transition-all">
      //                 Learn more <ChevronRight className="w-4 h-4 ml-1" />
      //               </button>
      //             </div>
      //           </div>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div>

      // {/* Feature Showcase (Apple One Highlight) */}
      // <section className="bg-white py-32 mb-20">
      //   <div className="container mx-auto px-6">
      //     <div className="flex flex-col lg:flex-row items-center gap-20">
      //       <div className="lg:w-1/2 order-2 lg:order-1">
      //          <div className="grid grid-cols-2 gap-4">
      //             <div className="aspect-square bg-[#f5f5f7] rounded-[32px] flex items-center justify-center p-12">
      //               <Music className="w-full h-full text-pink-500" />
      //             </div>
      //             <div className="aspect-square bg-[#f5f5f7] rounded-[32px] flex items-center justify-center p-12">
      //               <Tv className="w-full h-full text-black" />
      //             </div>
      //             <div className="aspect-square bg-[#f5f5f7] rounded-[32px] flex items-center justify-center p-12">
      //               <Gamepad2 className="w-full h-full text-orange-500" />
      //             </div>
      //             <div className="aspect-square bg-[#f5f5f7] rounded-[32px] flex items-center justify-center p-12">
      //               <Sparkles className="w-full h-full text-apple-blue" />
      //             </div>
      //          </div>
      //       </div>
            
      //       <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
      //         <div className="inline-flex items-center gap-3 p-2 pr-6 bg-apple-gray-50 rounded-full border border-apple-gray-100">
      //           <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold"></span>
      //           <span className="text-sm font-bold text-[#1d1d1f]">Bundle & Save</span>
      //         </div>
      //         <h2 className="text-5xl md:text-7xl font-bold text-[#1d1d1f] tracking-tight">
      //           One subscription. <br />
      //           Everything Apple.
      //         </h2>
      //         <p className="text-xl text-[#86868b] leading-relaxed">
      //           Apple One bundles up to six amazing Apple services into one easy subscription. 
      //           Get the Individual, Family, or Premier plan and enjoy a simpler way to get more.
      //         </p>
      //         <div className="flex flex-col sm:flex-row gap-4 pt-4">
      //           <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-black/90 transition-all">
      //             Try it Free
      //           </button>
      //           <button className="flex items-center justify-center gap-2 font-bold text-apple-blue">
      //             Learn more about plans <ChevronRight className="w-5 h-5" />
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
//     </div>
//   );
// }