/**
 * Contact Section - Rita Salles Advocacia
 * Design: Professional contact form with clickable contact methods
 * Features: Form submission via Formspree, phone/WhatsApp/email links, office hours
 */

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2 } from 'lucide-react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mwpvjokl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Novo contato do site: ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const phoneNumber = '5511921225287';
  const whatsappNumber = '5511921225287';
  const email = 'contato@ritasallesadvocacia.com.br';

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Agende Sua Consulta
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Está enfrentando um reajuste abusivo, negativa de cobertura ou descredenciamento? Converse com um especialista em Direito da Saúde. A primeira consulta é para entender seu caso.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <a
                href={`tel:+${phoneNumber}`}
                className="contact-link"
              >
                <Phone className="contact-icon" />
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <p className="text-foreground/70">(11) 92122-5287</p>
                  <p className="text-xs text-foreground/50 mt-1">WhatsApp disponível</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="contact-link"
              >
                <Mail className="contact-icon" />
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-foreground/70">{email}</p>
                  <p className="text-xs text-foreground/50 mt-1">Resposta em até 24h</p>
                </div>
              </a>

              {/* Address */}
              <div className="contact-link cursor-default">
                <MapPin className="contact-icon" />
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-foreground/70">Avenida Paulista, 2028, 11º Andar, Cj. 111</p>
                  <p className="text-foreground/70">Bela Vista, São Paulo/SP</p>
                  <p className="text-xs text-foreground/50 mt-1">Atendimento presencial e online</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-link cursor-default">
                <Clock className="contact-icon" />
                <div>
                  <p className="font-semibold text-foreground">Horário</p>
                  <p className="text-foreground/70">Segunda a Sexta</p>
                  <p className="text-xs text-foreground/50 mt-1">9h às 18h</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de agendar uma consulta sobre meu caso de direito da saúde.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-gold px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Abrir WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envie uma Mensagem</h3>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">Mensagem enviada com sucesso!</p>
                <p className="text-green-700 text-sm mt-1">Entraremos em contato em breve.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">Erro ao enviar mensagem.</p>
                <p className="text-red-700 text-sm mt-1">Por favor, tente novamente ou use o WhatsApp.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 9999-9999"
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Descreva Seu Caso
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu caso..."
                  required
                  rows={5}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none disabled:opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full btn-gold py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
