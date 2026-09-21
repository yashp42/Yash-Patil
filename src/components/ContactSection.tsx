import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'direct' | 'fallback'>('fallback');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = async (text: string, key: string, label: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopiedKey(key);
      setToastMessage(`${label} copied to clipboard (${text})`);

      setTimeout(() => {
        setCopiedKey(null);
      }, 2500);

      setTimeout(() => {
        setToastMessage(prev => (prev?.includes(text) ? null : prev));
      }, 3500);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback display
      setToastMessage(`Email address: ${text}`);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Product Inquiry from ${formData.name}`,
            message: formData.message,
            from_name: 'Yash Patil Portfolio Contact'
          })
        });

        const data = await res.json();
        if (data.success) {
          setDeliveryType('direct');
          setFormSubmitted(true);
          setIsSubmitting(false);
          return;
        }
      } catch (err) {
        console.warn('Direct delivery failed, switching to client channel fallback:', err);
      }
    }

    // Client-side channel fallback: prepare pre-filled mail and offer 1-click launch
    setDeliveryType('fallback');
    setFormSubmitted(true);
    setIsSubmitting(false);
  };

  const getGmailUrl = () => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${encodeURIComponent(formData.subject || 'Product Inquiry')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
  };

  const getMailtoUrl = () => {
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Product Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
  };

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-20 scroll-mt-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E6E0] dark:border-[#282724]"
        >
          <div>
            <div className="font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase tracking-wider mb-2">
              Contact
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#161616] dark:text-[#FAF9F5] tracking-tight">
              Get in Touch
            </h2>
            <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-2 max-w-2xl">
              Feel free to reach out for conversations, opportunities, or feedback.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: EDITORIAL_EASE }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white dark:bg-[#1B1A18] border border-[#E6E3DB] dark:border-[#2C2B27] p-8 rounded-sm space-y-6">
              <h3 className="font-serif text-2xl text-[#161616] dark:text-[#FAF9F5]">Direct Contact</h3>
              <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] leading-relaxed">
                Feel free to reach out directly via email for product management opportunities, speaking, or strategy inquiries.
              </p>

              {/* Personal Email Card */}
              <div className="p-4 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#E8E6E0] dark:border-[#2E2D29] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#73726E] dark:text-[#9A9890] uppercase">
                    Primary Email
                  </span>
                  <button
                    type="button"
                    id="copy-personal-email-btn"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'personal', 'Primary email')}
                    className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-[#1C1B19] hover:bg-[#FAF9F5] dark:hover:bg-[#282723] border border-[#D8D6CE] dark:border-[#383632] hover:border-[#161616] dark:hover:border-[#FAF9F5] text-[11px] font-mono text-[#161616] dark:text-[#FAF9F5] rounded-xs transition-colors cursor-pointer"
                    title="Copy primary email"
                  >
                    {copiedKey === 'personal' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#73726E] dark:text-[#9A9890]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs sm:text-sm text-[#161616] dark:text-[#FAF9F5] hover:underline font-medium break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Academic Email Card */}
              <div className="p-4 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#E8E6E0] dark:border-[#2E2D29] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#73726E] dark:text-[#9A9890] uppercase">
                    Academic Email (IIT Kharagpur)
                  </span>
                  <button
                    type="button"
                    id="copy-academic-email-btn"
                    onClick={() => handleCopy(PERSONAL_INFO.academicEmail, 'academic', 'Academic email')}
                    className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-[#1C1B19] hover:bg-[#FAF9F5] dark:hover:bg-[#282723] border border-[#D8D6CE] dark:border-[#383632] hover:border-[#161616] dark:hover:border-[#FAF9F5] text-[11px] font-mono text-[#161616] dark:text-[#FAF9F5] rounded-xs transition-colors cursor-pointer"
                    title="Copy academic email"
                  >
                    {copiedKey === 'academic' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#73726E] dark:text-[#9A9890]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.academicEmail}`}
                    className="font-mono text-xs sm:text-sm text-[#161616] dark:text-[#FAF9F5] hover:underline font-medium break-all"
                  >
                    {PERSONAL_INFO.academicEmail}
                  </a>
                </div>
              </div>

              {/* Primary Fast Action Button */}
              <button
                type="button"
                id="contact-copy-primary-email-btn"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'primary-btn', 'Email address')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#161616] dark:bg-[#FAF9F5] hover:bg-[#333] dark:hover:bg-[#EAE8E0] text-[#FAF9F5] dark:text-[#141413] rounded-xs font-sans text-xs font-medium transition-all shadow-xs active:scale-[0.99] cursor-pointer"
              >
                {copiedKey === 'primary-btn' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                    <span className="font-semibold text-emerald-300 dark:text-emerald-700">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address ({PERSONAL_INFO.email})</span>
                  </>
                )}
              </button>
            </div>

            {/* Links & Profiles */}
            <div className="bg-white dark:bg-[#1B1A18] border border-[#E6E3DB] dark:border-[#2C2B27] p-8 rounded-sm">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890] mb-4">
                Online Profiles &amp; Publications
              </h4>
              <div className="space-y-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-[#E8E6E0] dark:border-[#2C2B27] rounded-xs hover:border-[#161616] dark:hover:border-[#FAF9F5] transition-colors"
                >
                  <span className="text-[#161616] dark:text-[#FAF9F5]">LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#73726E] dark:text-[#9A9890]" />
                </a>

                <a
                  href="https://patilyash.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-[#E8E6E0] dark:border-[#2C2B27] rounded-xs hover:border-[#161616] dark:hover:border-[#FAF9F5] transition-colors"
                >
                  <div>
                    <span className="text-[#161616] dark:text-[#FAF9F5] font-medium block">Substack Essays</span>
                    <span className="text-[11px] text-[#73726E] dark:text-[#9A9890]">patilyash.substack.com</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E05338]" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-[#E8E6E0] dark:border-[#2C2B27] rounded-xs hover:border-[#161616] dark:hover:border-[#FAF9F5] transition-colors"
                >
                  <span className="text-[#161616] dark:text-[#FAF9F5]">GitHub Repositories</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#73726E] dark:text-[#9A9890]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.18, ease: EDITORIAL_EASE }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#1B1A18] border border-[#E6E3DB] dark:border-[#2C2B27] p-8 sm:p-10 rounded-sm">
              <h3 className="font-serif text-2xl text-[#161616] dark:text-[#FAF9F5] mb-2">Send a Direct Message</h3>
              <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mb-6">
                Have a question, feedback, or a product role to discuss? Send a note below.
              </p>

              {formSubmitted ? (
                <div className="p-6 sm:p-8 bg-[#F4F2EC] dark:bg-[#201F1C] border border-[#D8D6CE] dark:border-[#383632] rounded-xs text-center space-y-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-serif text-xl text-[#161616] dark:text-[#FAF9F5]">
                      {deliveryType === 'direct' ? 'Message Delivered' : 'Message Formatted & Ready'}
                    </h4>
                    <p className="font-sans text-xs text-[#52504C] dark:text-[#C5C3B8] max-w-md mx-auto mt-1.5 leading-relaxed">
                      {deliveryType === 'direct'
                        ? "Your message was sent directly to Yash's inbox. Thank you for getting in touch!"
                        : "Your message has been composed. Choose your preferred way to dispatch below:"}
                    </p>
                  </div>

                  {deliveryType === 'fallback' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-md mx-auto pt-2">
                      <a
                        href={getGmailUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413] text-xs font-mono rounded-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        <span>Open in Gmail</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={getMailtoUrl()}
                        className="px-4 py-2.5 border border-[#161616] dark:border-[#FAF9F5] text-xs font-mono text-[#161616] dark:text-[#FAF9F5] rounded-xs hover:bg-[#FAF9F5] dark:hover:bg-[#2A2926] transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Default Mail App</span>
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
                    <button
                      type="button"
                      onClick={() => handleCopy(`Subject: ${formData.subject}\n\n${formData.message}`, 'form-msg', 'Note text')}
                      className="text-xs font-mono text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5] underline underline-offset-4 cursor-pointer"
                    >
                      Copy Message Text
                    </button>
                    <span className="text-[#CCC8BC] dark:text-[#44423C]">•</span>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="text-xs font-mono text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5] underline underline-offset-4 cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Turner"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#D8D6CE] dark:border-[#383632] rounded-xs font-sans text-sm text-[#161616] dark:text-[#FAF9F5] focus:outline-none focus:border-[#161616] dark:focus:border-[#FAF9F5]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#D8D6CE] dark:border-[#383632] rounded-xs font-sans text-sm text-[#161616] dark:text-[#FAF9F5] focus:outline-none focus:border-[#161616] dark:focus:border-[#FAF9F5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Product Opportunity / Strategy Discussion"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#D8D6CE] dark:border-[#383632] rounded-xs font-sans text-sm text-[#161616] dark:text-[#FAF9F5] focus:outline-none focus:border-[#161616] dark:focus:border-[#FAF9F5]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Yash, I came across your work and wanted to connect..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#D8D6CE] dark:border-[#383632] rounded-xs font-sans text-sm text-[#161616] dark:text-[#FAF9F5] focus:outline-none focus:border-[#161616] dark:focus:border-[#FAF9F5]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#161616] dark:bg-[#FAF9F5] hover:bg-[#333] dark:hover:bg-[#EAE8E0] disabled:opacity-50 text-[#FAF9F5] dark:text-[#141413] rounded-xs font-sans text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white dark:border-black/30 dark:border-t-black rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Temporary 'Copied!' Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#161616] text-[#FAF9F5] pl-4 pr-3 py-3.5 rounded-xs shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-[#2F2E2C] max-w-sm pointer-events-auto"
            role="status"
            aria-live="polite"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 min-w-0 pr-2">
              <div className="font-sans text-xs font-semibold text-white flex items-center gap-1.5">
                <span>Copied to Clipboard!</span>
              </div>
              <p className="font-mono text-[11px] text-[#A8A7A0] truncate mt-0.5">
                {toastMessage}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setToastMessage(null)}
              className="text-[#73726E] hover:text-[#FAF9F5] p-1 text-xs font-mono rounded transition-colors"
              aria-label="Dismiss toast"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
