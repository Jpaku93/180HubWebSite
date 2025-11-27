import React from 'react';
import { ArrowRight, Check, Heart, Shield, Users, Zap } from 'lucide-react';
import Footer from './Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white pt-24 animate-fadeIn">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center grayscale opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 tech-reveal">
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">180 Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide border-t border-b border-brand-lime py-4 inline-block">
            WHO WE ARE & WHERE WE'RE GOING
          </p>
        </div>
      </section>

      {/* Intro / Who We Are */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center tech-reveal delay-100">
        <h2 className="text-4xl font-display font-bold uppercase mb-8 text-white">Turning Lives Around</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          One Eighty Hub is a youth church movement turning lives around through Jesus, community, and real stories of change.
          We’re here for the ones who feel stuck on repeat. For the ones who’ve seen too much, tried it all, and still feel empty.
          We believe your life can do a complete 180° — not by hype, but by the power of God and a real church family.
        </p>
      </section>

      {/* Vision & Mission Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        <div className="bg-brand-charcoal p-12 md:p-20 flex flex-col justify-center border-r border-white/5 tech-reveal delay-200">
          <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-brand-orange" />
          </div>
          <h3 className="text-brand-orange font-bold tracking-widest uppercase mb-4">Our Vision</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 leading-none">Destruction to Destiny</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To see a generation turn 180° from destruction to destiny in Christ. 
            We see young people set free from the things that are killing them — sin, shame, addiction, fear — and stepping into a future God designed.
          </p>
        </div>
        <div className="bg-brand-black p-12 md:p-20 flex flex-col justify-center relative overflow-hidden tech-reveal delay-300">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-brand-purple" />
            </div>
            <h3 className="text-brand-purple font-bold tracking-widest uppercase mb-4">Our Mission</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 leading-none">Gather, Disciple, Send</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We gather, disciple, and send young people to live for Jesus in their homes, schools, and streets.
              We’re not building a fan club. We’re building disciples who carry the Gospel into their everyday world.
            </p>
          </div>
        </div>
      </section>

      {/* The Manifesto */}
      <section className="py-24 px-8 bg-brand-black border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto tech-reveal">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-4">The Manifesto</h2>
            <p className="text-gray-400">NOT A SLOGAN. A STANCE.</p>
          </div>

          <div className="space-y-6 text-xl md:text-3xl font-display uppercase leading-tight text-center">
            {[
              "We are not a brand. We are a movement.",
              "We believe your past does not own your future.",
              "We don’t hide the Gospel. We preach Jesus clearly and boldly.",
              "We take church into the streets and the streets into church.",
              "We don’t do perfect people. We do real people, real change.",
              "We believe in the power of the Holy Spirit to break chains.",
              "We refuse to watch a generation burn out without hope.",
              "We choose truth over trends, conviction over convenience.",
              "We love loud, pray hard, and stand with people in the mess.",
              "We are here until the broken become builders of others."
            ].map((line, i) => (
              <p key={i} className="hover:text-brand-lime transition-colors duration-300 cursor-default">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-8 bg-brand-charcoal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 tech-reveal">
            <h2 className="text-4xl font-display font-bold uppercase mb-8">How It Started</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              One Eighty Hub was born out of a simple conviction:
              <span className="text-white font-bold block my-2">“What if we actually believed God could flip a whole life around?”</span>
            </p>
            <ul className="space-y-4 text-gray-400 border-l-2 border-brand-orange pl-6">
              <li><strong className="text-white">The first night</strong> – a handful of people, nervous but desperate for God.</li>
              <li><strong className="text-white">The first outreach</strong> – taking testimonies to the streets.</li>
              <li><strong className="text-white">The breakthrough</strong> – packed altars, tears, healings.</li>
              <li><strong className="text-white">The name</strong> – not slight improvements, complete turnarounds.</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 h-[500px] relative rounded-lg overflow-hidden group tech-reveal delay-200">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Story" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Beliefs Grid */}
      <section className="py-24 px-8 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold uppercase mb-12 text-center">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Jesus Changes Lives", desc: "We believe Jesus is the Son of God, died for our sin and rose again. Anyone who calls on His name can be saved.", color: "border-brand-purple" },
              { title: "The Bible Leads Us", desc: "We build our lives on the Word of God, not just feelings or trends. The Bible is our final authority.", color: "border-brand-orange" },
              { title: "Spirit Empowered", desc: "We believe the Holy Spirit fills and empowers believers to live holy, bold, and fruitful lives.", color: "border-brand-lime" },
              { title: "Church is Family", desc: "We’re not here to perform. We’re here to belong, grow, and carry each other through the highs and lows.", color: "border-brand-purple" },
              { title: "Value & Purpose", desc: "No one is too far gone. Every person carries God-given value and a calling worth fighting for.", color: "border-brand-orange" },
            ].map((item, i) => (
              <div key={i} className={`bg-brand-charcoal p-8 rounded border-t-4 ${item.color} hover:-translate-y-2 transition-transform duration-300`}>
                <h3 className="text-2xl font-display font-bold uppercase mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-8 bg-gradient-to-br from-brand-charcoal to-brand-black border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold uppercase mb-12 text-center">What To Expect</h2>
          <div className="space-y-8">
            {[
              { num: "01", title: "Arrive & Hang Out", desc: "Doors open early. Music, laughter. Come as you are — hoodies, sneakers, whatever." },
              { num: "02", title: "Worship", desc: "Loud, honest, and Jesus-focused. Raised hands, some tears. No pressure." },
              { num: "03", title: "The Word", desc: "Straight-up Bible. We talk about sin, hope, identity, calling, eternity." },
              { num: "04", title: "Altar Call", desc: "A chance to respond. Give your life to Jesus, rededicate, or ask for prayer." },
              { num: "05", title: "After Party", desc: "Hang out, meet people, open homes invites. Don't disappear after the amen." },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start tech-reveal">
                <span className="text-3xl font-display font-bold text-brand-lime opacity-50">{step.num}</span>
                <div>
                  <h3 className="text-2xl font-bold uppercase mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Safety */}
      <section className="py-20 px-8 bg-brand-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-brand-charcoal p-10 rounded border border-white/5 tech-reveal">
             <Shield className="w-10 h-10 text-brand-purple mb-6" />
             <h3 className="text-2xl font-display font-bold uppercase mb-4">Leadership & Covering</h3>
             <p className="text-gray-400 mb-4">
               One Eighty Hub doesn’t float on its own. We’re under the covering of our local church and pastors, led by a team committed to truth and care.
             </p>
             <ul className="list-disc list-inside text-gray-500 text-sm space-y-2">
               <li>Youth leaders who walk with people through real issues.</li>
               <li>Wider church family backing in prayer and accountability.</li>
             </ul>
          </div>
          <div className="bg-brand-charcoal p-10 rounded border border-white/5 tech-reveal delay-100">
             <Heart className="w-10 h-10 text-brand-orange mb-6" />
             <h3 className="text-2xl font-display font-bold uppercase mb-4">Culture & Safety</h3>
             <p className="text-gray-400 mb-4">
               We’re serious about creating a healthy, safe environment. No bullying, no harassment. Leaders are held to a higher standard.
             </p>
             <p className="text-gray-500 text-sm">
               We want this to be a place where you can be honest, process life, and grow without fear.
             </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 text-center bg-[url('https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center grayscale relative">
        <div className="absolute inset-0 bg-brand-purple/90 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-3xl mx-auto tech-reveal">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-white mb-6">What's Your Next Step?</h2>
          <p className="text-xl text-white/80 mb-10">Your story doesn't have to stay where it is. If you're ready for a 180°, we'd love to meet you.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-lime transition-colors">
              Come to a Night
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;