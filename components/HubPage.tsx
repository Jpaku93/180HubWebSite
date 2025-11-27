import React, { useEffect, useState } from 'react';
import { ArrowLeft, Mic2, Music, Camera, Zap, Megaphone, Heart, BookOpen, Coffee, Calendar, ArrowRight, Sun, Moon, ChevronDown, ShoppingBag, Check } from 'lucide-react';
import Footer from './Footer';
import Events from './Events';
import MinistryDetail from './MinistryDetail';
import { Ministry } from '../types';

interface HubPageProps {
  onBack: () => void;
}

const HubPage: React.FC<HubPageProps> = ({ onBack }) => {
  const [calendarDark, setCalendarDark] = useState(true);
  const [showAllMinistries, setShowAllMinistries] = useState(false);
  const [calendarSynced, setCalendarSynced] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  
  useEffect(() => {
    if (selectedMinistry) {
      window.scrollTo(0, 0);
    }
  }, [selectedMinistry]);

  const handleSyncCalendar = () => {
    setCalendarSynced(true);
    setTimeout(() => {
      setCalendarSynced(false);
    }, 3000);
  };

  const ministries: Ministry[] = [
    {
      id: 'worship',
      icon: <Mic2 className="w-6 h-6" />,
      title: "Worship & Singing",
      desc: "Bring your voice. Bring your heart. Our worship team isn’t a performance. It’s a crew of people who love God’s presence.",
      longDesc: `Our worship team isn’t a performance. It’s a crew of people who love God’s presence and want to lead others into it. 
      
      We believe worship is a weapon and a way of life. When we gather, we aren't just singing songs; we are setting the atmosphere for miracles, breakthroughs, and encounters with Jesus.`,
      roles: [
        "Lead worship from the platform and from the heart.",
        "Grow in teamwork, spiritual discipline, and excellence.",
        "Be part of moments where chains break and people meet Jesus.",
        "Attend weekly rehearsals and spiritual pre-service prep."
      ],
      whoFor: "If you love singing, harmonies, or just find yourself worshipping at home, this is a space to develop that gift and use it for something eternal.",
      colorClass: "border-brand-purple",
      textAccent: "text-brand-purple",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'band',
      icon: <Music className="w-6 h-6" />,
      title: "Band & Musicians",
      desc: "Drums, guitar, bass, keys. Tighten your skills with regular rehearsals, learn to flow, and play as one unit.",
      longDesc: `Drums, guitar, bass, keys, tracks – this is your lane. Our band practices are about more than nailing the set list. It's about prophetic flow, musical excellence, and spiritual sensitivity.
      
      We are building a sound that defines a generation.`,
      roles: [
        "Tighten your skills with regular rehearsals.",
        "Learn how to flow with worship, not just play songs.",
        "Get coaching on timing, dynamics, and playing as one unit.",
        "Serve faithfully on rotation for Hub Nights and events."
      ],
      whoFor: "You don’t have to be perfect to start. If you’re hungry to grow, willing to commit to practice, and want to use your instrument for God, there’s room for you.",
      colorClass: "border-brand-orange",
      textAccent: "text-brand-orange",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'digital-arts',
      icon: <Camera className="w-6 h-6" />,
      title: "Digital Arts",
      desc: "Graphics, Video & Photography. Turn moments into visuals that move people and point them to hope.",
      longDesc: `Turn moments into visuals that move people. If you’re into design, editing, or capturing the moment, the digital art ministry is where your creativity becomes part of the mission.
      
      We tell the story of what God is doing here through every pixel and frame.`,
      roles: [
        "Graphics: Create visuals for screens, socials, events, and series themes.",
        "Video: Capture testimonies, recap nights, and create content that tells real stories.",
        "Photography: Shoot services, outreaches, and behind-the-scenes moments.",
        "Social Media: Help curate the online presence of the movement."
      ],
      whoFor: "You’ll learn how to think in story, colour, and composition – not just for aesthetics, but to point people to hope. Perfect for creatives, tech-heads, and visual storytellers.",
      colorClass: "border-brand-lime",
      textAccent: "text-brand-lime",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'concerts',
      icon: <Zap className="w-6 h-6" />,
      title: "Concerts & Performances",
      desc: "Dance, drama, spoken word. Events built to pull people from the street into an atmosphere of impact.",
      longDesc: `High energy, high impact, high purpose. Our concerts and special events are built to pull people in from the street into an atmosphere they don’t expect from “church.”
      
      This is about using every art form to glorify God and grab attention.`,
      roles: [
        "Dance, drama, spoken word, live music and creative elements.",
        "Regular rehearsals to sharpen flow, stage presence and unity.",
        "A safe place to stretch your gift and try new creative ideas.",
        "Planning and executing high-level productions."
      ],
      whoFor: "If you love the buzz of big nights, have a talent for performance arts, and want to be part of building experiences that change lives, this is where you plug in.",
      colorClass: "border-brand-orange",
      textAccent: "text-brand-orange",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'outreach',
      icon: <Megaphone className="w-6 h-6" />,
      title: "Street Outreach",
      desc: "Taking the Gospel outside the four walls. Street preaching, inviting, and praying with people where they are.",
      longDesc: `From the building to the streets. One of the main heartbeat ministries of One Eighty Hub is taking the Gospel outside the four walls. We refuse to keep the Good News hidden.
      
      We go where the people are—parks, plazas, skate parks, and malls.`,
      roles: [
        "Street preaching, testimonies and one-on-one conversations.",
        "Handing out flyers, inviting people, and praying with them where they are.",
        "Learning how to share your story and the message of Jesus clearly and boldly.",
        "Supporting the team through prayer and presence."
      ],
      whoFor: "You don’t have to be a loud preacher to join. We need people who talk, people who pray, people who support, and people who just show up and learn to love their city.",
      colorClass: "border-brand-purple",
      textAccent: "text-brand-purple",
      image: "https://images.unsplash.com/photo-1472289065668-ce650ac443b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'altar-calls',
      icon: <Heart className="w-6 h-6" />,
      title: "Altar Calls & Support",
      desc: "Pray with new believers, answer questions, and be a calm, faith-filled presence at the front lines of life change.",
      longDesc: `Being there for the moment that matters most. When people respond to God, we don’t want them standing alone at the altar. This team serves at the most critical moment of our gatherings.`,
      roles: [
        "Pray with new believers and those rededicating their lives.",
        "Help answer basic questions and connect them to follow-up.",
        "Be a calm, faith-filled presence at the front lines of life change.",
        "Distribute bibles and resources to new believers."
      ],
      whoFor: "If you carry compassion, are a good listener, and want to help people take their first steps with Jesus, this ministry is for you.",
      colorClass: "border-brand-lime",
      textAccent: "text-brand-lime",
      image: "https://images.unsplash.com/photo-1629235738879-19969018e6c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'bible-studies',
      icon: <BookOpen className="w-6 h-6" />,
      title: "Bible Studies",
      desc: "Deep roots. Strong lives. Learn how to read Scripture and wrestle with truth in a community that sharpens you.",
      longDesc: `Deep roots. Strong lives. Real change. Bible studies are where the hype becomes habits and roots go deep. We move beyond surface-level faith into real understanding of the Word.`,
      roles: [
        "Learn how to read and apply Scripture to real-life situations.",
        "Ask questions, wrestle with truth and grow with others.",
        "Be discipled and eventually learn to disciple others.",
        "Commit to a weekly or bi-weekly small group gathering."
      ],
      whoFor: "You don’t need to “know it all.” You just need a Bible, a notebook, and a willing heart to learn.",
      colorClass: "border-brand-purple",
      textAccent: "text-brand-purple",
      image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'open-homes',
      icon: <Coffee className="w-6 h-6" />,
      title: "Open Homes",
      desc: "Faith grows better around tables, Real conversations, food, and family without judgement.",
      longDesc: `Faith grows better around tables, not just rows. Open homes are our spaces for real conversations, food, and family. It's where the big crowd becomes a family.`,
      roles: [
        "Hang out, eat, laugh and build genuine friendships.",
        "Talk about life, faith, struggles and wins without judgement.",
        "Create an environment where newcomers feel safe and seen.",
        "Host or co-host gatherings in homes or cafes."
      ],
      whoFor: "If you love hosting, cooking, or just talking with people, this is a beautiful way to serve and build community.",
      colorClass: "border-brand-orange",
      textAccent: "text-brand-orange",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'hub-events',
      icon: <Calendar className="w-6 h-6" />,
      title: "Hub Events",
      desc: "Theme nights, training, and encounters that serve as a launchpad into purpose. Help plan the big nights.",
      longDesc: `Gathered, focused, and built for impact. These are the big nights and key gatherings that anchor our calendar. Every Hub event is designed to be a launchpad into purpose.`,
      roles: [
        "A place where someone can encounter Jesus for the first time.",
        "A space where believers can be challenged, trained and refreshed.",
        "Serving here means helping plan, promote, set up, host, and execute.",
        "Ensuring every night feels intentional from door to altar."
      ],
      whoFor: "For the organizers, the planners, the energetic hosts, and the hard workers who make the dream work.",
      colorClass: "border-brand-lime",
      textAccent: "text-brand-lime",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const merchItems = [
    {
      id: 'hoodie',
      name: '180 Hoodie',
      price: '$55.00',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tshirt',
      name: '180 T-Shirt',
      price: '$30.00',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'crew',
      name: '180 Crew Neck',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const upcomingEvents = [
    { date: 'OCT 24', title: 'Night of Worship', time: '7:00 PM', location: 'The Warehouse' },
    { date: 'NOV 02', title: 'Street Outreach', time: '10:00 AM', location: 'Downtown Plaza' },
    { date: 'NOV 15', title: 'Creative Workshop', time: '6:30 PM', location: 'Studio B' },
  ];

  const displayedMinistries = showAllMinistries ? ministries : ministries.slice(0, 6);

  if (selectedMinistry) {
    return <MinistryDetail ministry={selectedMinistry} onBack={() => setSelectedMinistry(null)} />;
  }

  return (
    <div className="min-h-screen bg-brand-black text-white animate-fadeIn">
      {/* Header / Hero Section */}
      <div className="relative min-h-[85vh] py-32 overflow-hidden flex items-center justify-center bg-brand-charcoal">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center grayscale opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 border border-brand-lime text-brand-lime text-xs font-bold tracking-widest uppercase rounded-full">
            The Ecosystem
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-white to-brand-orange">
            INSIDE<br/>THE HUB
          </h1>

          <div className="mb-12">
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight uppercase text-white">
               More Than a Night.<br/><span className="text-brand-orange">It’s a Movement.</span>
             </h2>
             <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
               One Eighty Hub isn’t just a youth service you attend once a week. It’s a whole ecosystem of ministries where you can grow, serve, create, and reach people with the Gospel. Whether you’re musical, creative, bold on the streets, or quietly steady in the background, there’s a lane here with your name on it.
             </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white uppercase tracking-widest text-sm font-bold transition-colors border border-white/20 hover:border-white px-6 py-3 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('calendar-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-3 overflow-hidden rounded-full font-bold uppercase tracking-widest text-sm text-white shadow-xl transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-orange to-brand-lime animate-gradient-x"></div>
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> View Calendar
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Google Calendar Integration & Up Next */}
      <section id="calendar-section" className="py-20 px-4 md:px-8 bg-brand-black flex flex-col items-center justify-center border-t border-white/10">
        <div className="max-w-7xl w-full">
           <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Calendar
              </h2>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCalendarDark(!calendarDark)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-brand-lime flex items-center gap-2 text-xs font-mono"
                >
                  {calendarDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {calendarDark ? "LIGHT" : "DARK"}
                </button>
              </div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Calendar Column */}
             <div className="lg:col-span-2 bg-brand-charcoal p-2 rounded-xl border border-white/10 shadow-[0_0_30px_rgba(139,0,255,0.1)]">
                <div className={`relative w-full h-[600px] ${calendarDark ? 'bg-brand-black' : 'bg-white'} rounded-lg overflow-hidden transition-colors duration-300`}>
                  <iframe 
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&src=bW12cHNucmQ0bGIxaWJnanJkZ2c5ZTAwcDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%238E24AA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0" 
                    style={{
                      borderWidth: 0, 
                      filter: calendarDark ? 'invert(1) hue-rotate(180deg)' : 'none',
                      transition: 'filter 0.3s ease'
                    }} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no"
                    title="One Eighty Hub Calendar"
                  ></iframe>
                </div>
             </div>

             {/* Up Next Column */}
             <div className="lg:col-span-1 flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
                   <h3 className="text-xl font-bold uppercase tracking-wider text-white">Up Next</h3>
                </div>
                
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="group bg-brand-charcoal p-6 rounded-lg border-l-4 border-brand-orange hover:bg-white/5 transition-all cursor-default">
                    <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-bold px-2 py-1 rounded mb-2">
                      {event.date}
                    </span>
                    <h4 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex flex-col text-sm text-gray-400 gap-1 mt-2">
                       <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {event.time}</span>
                       <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full border border-gray-500" /> {event.location}</span>
                    </div>
                  </div>
                ))}

                <div className="mt-auto bg-gradient-to-br from-brand-purple/20 to-brand-black p-6 rounded-lg border border-brand-purple/30 text-center">
                   <h4 className="text-brand-purple font-bold uppercase tracking-widest mb-2">Don't Miss Out</h4>
                   <p className="text-xs text-gray-400 mb-4">Subscribe to our calendar to get notified automatically.</p>
                   <button 
                     onClick={handleSyncCalendar}
                     disabled={calendarSynced}
                     className={`
                       w-full text-xs font-bold uppercase py-3 rounded transition-all duration-300 relative overflow-hidden group/sync
                       ${calendarSynced 
                         ? 'bg-brand-lime text-black cursor-default border border-brand-lime shadow-[0_0_20px_rgba(204,255,0,0.3)]' 
                         : 'bg-brand-purple text-white hover:bg-white hover:text-brand-purple shadow-[0_0_15px_rgba(139,0,255,0.4)] hover:shadow-[0_0_25px_rgba(139,0,255,0.6)] animate-pulse'
                       }
                     `}
                   >
                     {calendarSynced ? (
                       <span className="flex items-center justify-center gap-2 animate-fadeIn">
                         <Check className="w-4 h-4" /> Synced!
                       </span>
                     ) : (
                       <>
                         <span className="relative z-10">Sync Calendar</span>
                         <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/sync:translate-y-0 transition-transform duration-300 ease-out" />
                       </>
                     )}
                   </button>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Ministries Grid (Uniform Layout) */}
      <div className="py-20 px-8 bg-brand-charcoal border-t border-white/5">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMinistries.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedMinistry(item)}
              className={`
                group relative h-[450px] overflow-hidden bg-brand-black border-t-4 ${item.colorClass}
                shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer
              `}
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Scanline Overlay (Subtle) */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%] pointer-events-none opacity-20" />

              {/* Icon Badge */}
              <div className={`absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 ${item.textAccent} transition-transform duration-500 group-hover:scale-110`}>
                {item.icon}
              </div>

              {/* Content Wrapper */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
                
                {/* Title */}
                <h3 className="text-3xl font-display font-bold text-white uppercase mb-2 leading-none drop-shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2">
                  {item.title}
                </h3>

                {/* Subtitle / Description (Reveals on Hover) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button 
                  className={`
                  w-fit text-xs font-bold uppercase tracking-widest flex items-center gap-2 
                  ${item.textAccent} border border-transparent 
                  group-hover:border-${item.colorClass.replace('border-', '')} 
                  group-hover:px-4 group-hover:py-2 group-hover:bg-white/5 group-hover:rounded-sm
                  transition-all duration-300
                `}>
                  Join This Team <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
            <button 
                onClick={() => setShowAllMinistries(!showAllMinistries)}
                className="group relative px-10 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 rounded-sm"
            >
                <span className="relative z-10 flex items-center gap-2">
                    {showAllMinistries ? 'View Less' : 'View All Teams'} 
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllMinistries ? 'rotate-180' : ''}`} />
                </span>
            </button>
        </div>

      </div>

      {/* Merch Section */}
      <section className="py-24 bg-brand-black relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-5"></div>
         <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-2 border-brand-orange/30 pb-4">
              <div>
                <span className="text-brand-orange font-mono text-sm tracking-widest">OFFICIAL GEAR</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase mt-2">
                  THE MERCH
                </h2>
              </div>
              <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-orange transition-colors">
                View All Collection <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {merchItems.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative h-[400px] bg-brand-charcoal overflow-hidden rounded-sm mb-4">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                     
                     <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                        <button className="bg-white text-black px-6 py-3 font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors flex items-center gap-2 w-full justify-center shadow-lg">
                           <ShoppingBag className="w-4 h-4" /> Add to Cart
                        </button>
                     </div>
                  </div>
                  <div className="flex justify-between items-start">
                     <div>
                       <h3 className="text-2xl font-display font-bold text-white uppercase group-hover:text-brand-orange transition-colors">{item.name}</h3>
                       <p className="text-gray-500 text-sm">Limited Edition</p>
                     </div>
                     <span className="text-xl font-bold text-brand-lime font-mono">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="md:hidden w-full mt-8 border border-white/20 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
               View All Collection
            </button>
         </div>
      </section>

      {/* CTA: Where Do You Fit? */}
      <div className="py-24 px-8 bg-brand-charcoal relative overflow-hidden border-t border-white/5">
        
        {/* Decorative Blurs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 text-white">WHERE DO YOU FIT?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
            <div className="bg-white/5 p-6 rounded border-l-2 border-brand-purple">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1">Love Music?</span>
              <span className="text-xl font-display font-bold text-white">Worship & Band</span>
            </div>
            <div className="bg-white/5 p-6 rounded border-l-2 border-brand-lime">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1">Love Visuals?</span>
              <span className="text-xl font-display font-bold text-white">Digital Arts</span>
            </div>
            <div className="bg-white/5 p-6 rounded border-l-2 border-brand-orange">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1">Love People & Bold Faith?</span>
              <span className="text-xl font-display font-bold text-white">Outreach & Altar Calls</span>
            </div>
            <div className="bg-white/5 p-6 rounded border-l-2 border-brand-purple">
              <span className="block text-xs font-bold text-gray-500 uppercase mb-1">Love Depth?</span>
              <span className="text-xl font-display font-bold text-white">Bible Studies & Open Homes</span>
            </div>
          </div>

          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-brand-orange via-brand-purple to-brand-lime">
            <button className="bg-brand-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300">
              Talk to a Leader
            </button>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            Come early to a Hub Night and tell us "I'm keen to serve."<br/>
            We'll help you find your lane.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HubPage;
