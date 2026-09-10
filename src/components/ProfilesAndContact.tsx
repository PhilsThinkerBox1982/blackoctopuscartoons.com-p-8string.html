import React, { useState } from 'react';
import { 
  Share2, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  FileText, 
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface ProfilesAndContactProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  onOpenResume: () => void;
}

export const ProfilesAndContact: React.FC<ProfilesAndContactProps> = ({
  profile,
  darkMode,
  onOpenResume
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Engineering Opportunity',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        topic: 'Engineering Opportunity',
        message: ''
      });
    }, 800);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 sm:py-28 border-b ${
        darkMode ? 'border-slate-800/80 bg-slate-900/40' : 'border-slate-200/80 bg-slate-50/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Share2 className="w-5 h-5 text-indigo-500" />
            <span className={`text-sm font-bold uppercase tracking-wider ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              Professional Profiles & Inquiries
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Let's connect and discuss building something remarkable.
          </h2>
          <p className={`text-base mt-2 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Whether you are discussing senior full-stack roles, distributed systems challenges, or technical advisory, feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column: Professional Profiles on Left, Interactive Contact Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Direct Profile Cards */}
          <div className="lg:col-span-5 space-y-4" id="profiles-container">
            <h3 className={`text-lg font-bold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Verified Professional Channels
            </h3>

            {/* GitHub Card */}
            <div 
              id="profile-card-github"
              className={`p-5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${
                    darkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'
                  }`}>
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      GitHub
                    </h4>
                    <span className={`text-xs font-mono ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      @philsthinkerbox1982
                    </span>
                  </div>
                </div>

                <a
                  href="https://github.com/philsthinkerbox1982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1 border transition-colors ${
                    darkMode 
                      ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200' 
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <span>Explore Repos</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className={`text-xs mt-3 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Public source code, architecture prototypes, benchmarks, and active contributions across distributed systems and modern TypeScript.
              </p>
            </div>

            {/* LinkedIn Card */}
            <div 
              id="profile-card-linkedin"
              className={`p-5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-500">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      LinkedIn
                    </h4>
                    <span className={`text-xs font-mono ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Phillip Macias
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/phillip-macias-217020403?trk=contact-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1 border transition-colors ${
                    darkMode 
                      ? 'border-blue-900/60 bg-blue-950/40 hover:bg-blue-900/40 text-blue-300' 
                      : 'border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700'
                  }`}
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className={`text-xs mt-3 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Full professional history, coworker recommendations, technical articles, and network updates.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */} 
            <div 
              id="profile-card-email"
              className={`p-5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-600/10 text-emerald-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Direct Email
                    </h4>
                    <span className={`text-xs font-mono break-all ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {profile.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  id="btn-copy-email"
                  onClick={handleCopyEmail}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 border transition-all ${
                    copiedEmail
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : darkMode 
                        ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200' 
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className={`text-xs mt-3 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Direct inbox for senior engineering opportunities, consultations, or technical conversations.
              </p>
            </div>

            {/* Resume Fast Download Card */}
            <div 
              id="profile-card-resume"
              className={`p-5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-600/10 text-indigo-500">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Curriculum Vitae
                    </h4>
                    <span className={`text-xs ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Interactive View & PDF
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  id="btn-open-resume-contact"
                  onClick={onOpenResume}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
                >
                  <span>View CV</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form
         <div style="display:none" 
            id="contact-form-container"
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h3 className={`text-xl font-bold tracking-tight mb-2 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Send a Direct Message
            </h3>
            <p className={`text-xs sm:text-sm mb-6 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Leave your details below, and I will get back to you within 24–48 hours.
            </p>

            {formStatus === 'success' ? (
              <div className={`p-6 rounded-xl border text-center ${
                darkMode ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
              }`}>
                <Check className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
                <h4 className="text-base font-bold mb-1">Message Sent Successfully!</h4>
                <p className="text-xs sm:text-sm leading-relaxed mb-4">
                  Thank you for reaching out. A confirmation has been drafted to Phillip Macias.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="direct-contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border outline-none transition-colors focus:ring-2 focus:ring-indigo-500/50 ${
                        darkMode 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border outline-none transition-colors focus:ring-2 focus:ring-indigo-500/50 ${
                        darkMode 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="contact-topic"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border outline-none transition-colors focus:ring-2 focus:ring-indigo-500/50 ${
                      darkMode 
                        ? 'bg-slate-950 border-slate-700 text-white' 
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="Engineering Opportunity">Senior / Staff Engineering Role</option>
                    <option value="Technical Advisory">Technical Advisory / Architecture Consultation</option>
                    <option value="Open-Source Collaboration">Open-Source Project Collaboration</option>
                    <option value="General Conversation">General Engineering Conversation</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="contact-message"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell me about your team, system requirements, or project vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border outline-none transition-colors focus:ring-2 focus:ring-indigo-500/50 resize-y ${
                      darkMode 
                        ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Average reply time: &lt; 24h</span>
                  </div>

                  <!--button
                    id="btn-submit-contact"
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  </button-->
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
