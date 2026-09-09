import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2 
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface ResumeModalProps {
  profile: PortfolioProfile;
  isOpen: boolean;
  darkMode: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  profile,
  isOpen,
  darkMode,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${profile.name} — ${profile.title}
Email: ${profile.email} | Location: ${profile.location}
GitHub: https://github.com/PhillipMacias | LinkedIn: https://linkedin.com/in/phillipmacias

PROFESSIONAL SUMMARY:
${profile.bioParagraphs.join('\n\n')}

EXPERIENCE:
${profile.experiences.map(exp => `
${exp.role} — ${exp.company} (${exp.period})
Location: ${exp.location}
${exp.summary}
Key Achievements:
${exp.achievements.map(a => `• ${a}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${profile.education.map(edu => `
${edu.institution} — ${edu.degree} (${edu.period})
Honors: ${edu.honors}
Focus: ${edu.focus}
`).join('\n')}

KEY SKILLS:
${profile.skills.map(s => `${s.name} (${s.category}, ${s.level})`).join(', ')}
`.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="resume-modal-dialog"
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden my-auto ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className={`p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20 ${
          darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm sm:text-base">Curriculum Vitae</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
            }`}>
              Updated 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-copy-resume-text"
              type="button"
              onClick={handleCopyText}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 border transition-all ${
                darkMode ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200' : 'border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              id="btn-print-resume"
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="btn-close-resume"
              type="button"
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors ${
                darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto print:p-0 print:text-black print:bg-white" id="printable-resume-area">
          {/* Header */}
          <div className="border-b pb-6 mb-8 border-slate-800/40">
            <h1 className={`text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}>
              {profile.name}
            </h1>
            <p className="text-base font-semibold text-indigo-500 mt-1">
              {profile.title}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {profile.email}
              </span>
              <a 
                href="https://github.com/PhillipMacias" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 hover:text-indigo-400"
              >
                <Github className="w-3.5 h-3.5" />
                github.com/PhillipMacias
              </a>
              <a 
                href="https://linkedin.com/in/phillipmacias" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 hover:text-indigo-400"
              >
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/phillipmacias
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Executive Summary
            </h2>
            <p className={`text-sm leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Senior software engineer with 8+ years experience architecting fault-tolerant distributed applications, cloud services, and scalable web platforms. Demonstrated track record scaling high-throughput event processing systems, reducing latency under load, and spearheading engineering best practices across cross-functional squads.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Professional Experience
            </h2>
            <div className="space-y-6">
              {profile.experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <span className={`text-base font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.role}
                      </span>
                      <span className="text-sm font-semibold text-indigo-400 ml-2">
                        — {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {exp.summary}
                  </p>

                  <ul className="space-y-1 pt-1">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-indigo-500 mt-0.5">•</span>
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    <span className="font-semibold text-slate-300">Environment: </span>
                    {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="mb-8">
            <h2 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className={`p-3 rounded-lg border ${
                darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="font-bold block mb-1">Frontend & Interfaces</span>
                <p className="text-slate-400 leading-relaxed">
                  TypeScript, React 19, Next.js, Tailwind CSS, WebGL, WebAssembly, State Architectures, WCAG AA Accessibility
                </p>
              </div>

              <div className={`p-3 rounded-lg border ${
                darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="font-bold block mb-1">Backend & Systems</span>
                <p className="text-slate-400 leading-relaxed">
                  Go (Golang), Node.js, Express, Python, GraphQL, REST APIs, WebSockets, gRPC, Distributed Messaging
                </p>
              </div>

              <div className={`p-3 rounded-lg border ${
                darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="font-bold block mb-1">Cloud & Infrastructure</span>
                <p className="text-slate-400 leading-relaxed">
                  Docker, Kubernetes, Google Cloud (Cloud Run, GKE), AWS, Terraform, CI/CD Pipelines, Prometheus
                </p>
              </div>

              <div className={`p-3 rounded-lg border ${
                darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="font-bold block mb-1">Data Stores & Architecture</span>
                <p className="text-slate-400 leading-relaxed">
                  PostgreSQL, Redis, Apache Kafka, MongoDB, Distributed Systems Design, Observability & OpenTelemetry
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Education
            </h2>
            <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
              <div>
                <span className="font-bold">{profile.education[0].institution}</span>
                <span className="text-indigo-400 ml-2">— {profile.education[0].degree}</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {profile.education[0].period} | {profile.education[0].honors}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
