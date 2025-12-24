import React, { useState, useCallback } from 'react';
import { polishInquiry } from '../services/geminiService';
import { ContactStatus } from '../types';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';
import { Wand2, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.IDLE);
  const [isPolishing, setIsPolishing] = useState(false);

  const handlePolish = useCallback(async () => {
    if (!message.trim()) return;
    setIsPolishing(true);
    const refined = await polishInquiry(message);
    setMessage(refined);
    setIsPolishing(false);
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ContactStatus.SENDING);
    // Simulate API call
    setTimeout(() => {
      setStatus(ContactStatus.SUCCESS);
      setMessage('');
      setEmail('');
      setName('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-champagne-50 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-champagne-200/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl shadow-champagne-200/50 p-8 md:p-16">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-4">Contact Us</h2>
              <p className="text-slate-500 font-light">プロジェクトのご相談、取材のご依頼など、お気軽にお問い合わせください。</p>
            </div>
          </RevealOnScroll>

          {status === ContactStatus.SUCCESS ? (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-serif text-slate-800 mb-2">送信完了</h3>
              <p className="text-slate-500">お問い合わせありがとうございます。<br/>担当者より3営業日以内にご連絡いたします。</p>
              <button 
                onClick={() => setStatus(ContactStatus.IDLE)} 
                className="mt-8 text-sm text-slate-400 underline hover:text-slate-600"
              >
                新しいメッセージを送る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-slate-500 font-semibold">お名前</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-slate-200 py-3 text-slate-800 focus:outline-none focus:border-champagne-500 transition-colors bg-transparent placeholder-slate-300"
                    placeholder="山田 太郎"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-500 font-semibold">メールアドレス</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-slate-200 py-3 text-slate-800 focus:outline-none focus:border-champagne-500 transition-colors bg-transparent placeholder-slate-300"
                    placeholder="your-email@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-slate-500 font-semibold">お問い合わせ内容</label>
                  
                  {/* AI Feature */}
                  <button
                    type="button"
                    onClick={handlePolish}
                    disabled={isPolishing || message.length < 5}
                    className={`text-xs flex items-center gap-1 transition-colors ${
                      message.length < 5 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-champagne-600 hover:text-champagne-800'
                    }`}
                  >
                    <Wand2 size={12} />
                    {isPolishing ? 'AIが推敲中...' : 'AIで文章を整える'}
                  </button>
                </div>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-b border-slate-200 py-3 text-slate-800 focus:outline-none focus:border-champagne-500 transition-colors bg-transparent resize-none placeholder-slate-300 leading-relaxed"
                  placeholder="ご相談内容をご記入ください。AI機能を使えば、箇条書きのメモから丁寧なビジネスメールを作成できます。"
                />
                <p className="text-[10px] text-slate-400 text-right">
                  Powered by Gemini AI - 高級ブランドにふさわしい言葉遣いに変換します
                </p>
              </div>

              <div className="pt-4 text-center">
                <Button 
                   type="submit" 
                   disabled={status === ContactStatus.SENDING}
                   icon={status === ContactStatus.SENDING ? undefined : <Send size={16} />}
                >
                  {status === ContactStatus.SENDING ? '送信中...' : 'メッセージを送信'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;