// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { soundManager } from '../utils/soundEffects';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('Job Opportunity / Interview Invitation');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');

  const handleCopyEmail = () => {
    soundManager.playLaserBlip();
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    soundManager.playLaserBlip();
    const encoded = encodeURIComponent(
      `Hi Vardhan, this is ${senderName || 'a Recruiter'} from ${senderCompany || 'our team'}.\nTopic: ${subject}\n\n${message || 'I reviewed your Portfolio 2.0 and would love to connect!'}`
    );
    window.open(`https://wa.me/917386033417?text=${encoded}`, '_blank');
  };

  const handleSendViaMail = (e) => {
    e.preventDefault();
    soundManager.playLaserBlip();
    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject + ' - ' + (senderCompany ? senderCompany : 'Interview Inquiry'))}&body=${encodeURIComponent(
      `Hi Vardhan,\n\n${message}\n\nBest regards,\n${senderName}\n${senderCompany}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070b18]/60 border-t border-white/5">
      
      {/* Background Glows */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMUNICATION PORT // ZERO FRICTION</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Ready to Accelerate <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Your Engineering Team?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Direct channels open for full-time engineering roles, high-concurrency systems development, and cloud architecture discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Touchpoints (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="cinema-glass rounded-3xl p-7 border border-cyan-500/30 space-y-5 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              <h3 className="font-display font-bold text-white text-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* WhatsApp Primary */}
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playLaserBlip()}
                className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-500/40 hover:border-emerald-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-400 font-bold uppercase">Fastest Response</div>
                    <div className="text-white font-semibold text-sm">+91 7386033417 (WhatsApp)</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Direct Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <a 
                  href={`mailto:${PROFILE.email}`} 
                  className="text-white font-semibold text-sm hover:text-cyan-300 block truncate"
                >
                  {PROFILE.email}
                </a>
              </div>

              {/* Phone Direct */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Mobile Phone</div>
                  <a href={`tel:${PROFILE.phone}`} className="text-white font-semibold text-sm hover:text-cyan-300">
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Current Base</div>
                  <div className="text-white font-semibold text-sm">{PROFILE.location} (Open to Relocation)</div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playLaserBlip()}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blue-950/80 border border-blue-500/40 hover:bg-blue-900 text-blue-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playLaserBlip()}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Recruiter Inquiry Composer (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="cinema-glass rounded-3xl p-8 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] space-y-6">
              
              <div>
                <h3 className="font-display font-bold text-white text-xl">
                  Quick Dispatch to Vardhan
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Compose a brief message and send directly through WhatsApp or email in one click.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name / Recruiter Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 text-white text-xs outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Stripe, Amazon, Stealth AI"
                      value={senderCompany}
                      onChange={(e) => setSenderCompany(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 text-white text-xs outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Discussion Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 text-white text-xs outline-none transition-all"
                  >
                    <option>Full-Time Python / Cloud Engineer Role</option>
                    <option>Technical Architecture Interview</option>
                    <option>High-Throughput API Project / Contract</option>
                    <option>Immediate Code Walkthrough Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message / Position Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="We have an opening for a Python / AWS engineer. We'd love to review your availability for a 15-minute intro chat..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 text-white text-xs outline-none transition-all resize-none"
                  />
                </div>

                {/* Dispatch Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp (+91 7386033417)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaMail}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all hover:border-cyan-400/50"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Send via Email Client</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
