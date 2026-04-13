/**
 * Contact Section - Rita Salles Advocacia
 * Senior Refactor: Optimized form and contact flow with OAB-compliant CTAs.
 * Mobile-first priority with clear action hierarchy.
 */

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 10000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Falha no processamento do envio');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro técnico inesperado');
      setTimeout(() => setStatus('idle'), 10000);
    }
  };

  const whatsappNumber = '5511921225287';
  const emailAddress = 'contato@ritasallesadvocacia.com.br';

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info - Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">
              Solicite uma <br className="hidden md:block" /> Avaliação do Caso
            </h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed border-l-4 border-accent pl-6">
              Está enfrentando um reajuste abusivo, negativa de cobertura ou descredenciamento? Converse com um especialista em Direito da Saúde. Nossa análise inicial visa identificar a viabilidade jurídica da sua demanda.
            </p>

            {/* Contact Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <a href={`tel:+${whatsappNumber}`} className="p-4 bg-white rounded-xl border border-border hover:shadow-md transition-all group">
                <Phone className="w-6 h-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-foreground">Telefone</p>
                <p className="text-sm text-foreground/60">(11) 92122-5287</p>
              </a>
              <a href={`mailto:${emailAddress}`} className="p-4 bg-white rounded-xl border border-border hover:shadow-md transition-all group">
                <Mail className="w-6 h-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-foreground">E-mail</p>
                <p className="text-sm text-foreground/60 truncate">{emailAddress}</p>
              </a>
              <div className="p-4 bg-white rounded-xl border border-border">
                <MapPin className="w-6 h-6 text-accent mb-3" />
                <p className="font-bold text-foreground">Endereço</p>
                <p className="text-sm text-foreground/60">Av. Paulista, 2028, 11º Andar</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-border">
                <Clock className="w-6 h-6 text-accent mb-3" />
                <p className="font-bold text-foreground">Horário</p>
                <p className="text-sm text-foreground/60">Seg a Sex, 9h às 18h</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar uma análise inicial sobre o meu caso de Direito da Saúde.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 btn-gold px-8 py-5 rounded-xl font-extrabold text-lg shadow-2xl hover:shadow-accent/20 transition-all justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com Especialista Agora
            </a>
          </div>

          {/* Contact Form - Right Column */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-2xl relative">
            <h3 className="text-2xl font-bold text-foreground mb-8">Envie uma Mensagem</h3>

            {status === 'success' && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-in fade-in zoom-in-95">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-bold">Mensagem enviada com sucesso!</p>
                  <p className="text-green-700 text-sm mt-1">Analisaremos seu caso e entraremos em contato em breve.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-in fade-in zoom-in-95">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-bold">Falha no envio</p>
                  <p className="text-red-700 text-sm mt-1">{errorMessage || 'Ocorreu um erro técnico. Tente o WhatsApp.'}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-foreground/60 uppercase tracking-widest mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-4 border border-border rounded-xl bg-input text-foreground focus:ring-2 focus:ring-accent outline-none transition-all disabled:opacity-50"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground/60 uppercase tracking-widest mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-4 border border-border rounded-xl bg-input text-foreground focus:ring-2 focus:ring-accent outline-none transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground/60 uppercase tracking-widest mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    required
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-4 border border-border rounded-xl bg-input text-foreground focus:ring-2 focus:ring-accent outline-none transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground/60 uppercase tracking-widest mb-2">Descreva Seu Caso</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos brevemente o que aconteceu..."
                  required
                  rows={4}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-4 border border-border rounded-xl bg-input text-foreground focus:ring-2 focus:ring-accent outline-none transition-all resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full btn-gold py-5 rounded-xl font-extrabold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <><Loader2 className="w-6 h-6 animate-spin" /> Processando...</>
                ) : (
                  'Enviar Solicitação com Segurança'
                )}
              </button>
              
              <p className="text-[10px] text-center text-foreground/40 uppercase tracking-widest font-bold">
                🔒 Dados protegidos pela LGPD e sigilo profissional.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
