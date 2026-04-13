/**
 * Contact Section - Rita Salles Advocacia
 * Design: Professional contact form with clickable contact methods
 * Features: Form submission via @formspree/react, phone/WhatsApp/email links, office hours
 */

import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  // Usando o hook oficial do Formspree conforme guia de integração
  const [state, handleSubmit] = useForm('meevqvbw');

  const phoneNumber = '5511921225287';
  const whatsappNumber = '5511921225287';
  const email = 'contato@ritasallesadvocacia.com.br';

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Agende Sua Consulta
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Está enfrentando um reajuste abusivo, negativa de cobertura ou descredenciamento? Converse com um especialista em Direito da Saúde. A primeira consulta é para entender seu caso.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <a href={`tel:+${phoneNumber}`} className="contact-link group">
                <Phone className="contact-icon group-hover:text-accent transition-colors" />
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <p className="text-foreground/70">(11) 92122-5287</p>
                  <p className="text-xs text-foreground/50 mt-1">WhatsApp disponível</p>
                </div>
              </a>

              <a href={`mailto:${email}`} className="contact-link group">
                <Mail className="contact-icon group-hover:text-accent transition-colors" />
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-foreground/70">{email}</p>
                  <p className="text-xs text-foreground/50 mt-1">Resposta em até 24h</p>
                </div>
              </a>

              <div className="contact-link cursor-default">
                <MapPin className="contact-icon" />
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-foreground/70">Avenida Paulista, 2028, 11º Andar, Cj. 111</p>
                  <p className="text-foreground/70">Bela Vista, São Paulo/SP</p>
                </div>
              </div>

              <div className="contact-link cursor-default">
                <Clock className="contact-icon" />
                <div>
                  <p className="font-semibold text-foreground">Horário</p>
                  <p className="text-foreground/70">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de agendar uma consulta sobre meu caso de direito da saúde.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-gold px-6 py-4 rounded-lg font-bold hover:shadow-xl transition-all w-full justify-center text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Falar via WhatsApp Agora
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm relative overflow-hidden">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envie uma Mensagem</h3>

            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-green-800 font-bold">Mensagem enviada com sucesso!</p>
                  <p className="text-green-700 text-sm mt-1">Confirmamos o recebimento. Entraremos em contato em breve no e-mail informado.</p>
                </div>
              </div>
            )}

            {state.errors && state.errors.length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-red-800 font-bold">Falha no envio</p>
                  <p className="text-red-700 text-sm mt-1">Ocorreu um erro técnico. Por favor, tente o WhatsApp para atendimento imediato.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">Nome Completo</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ex: Maria Silva"
                  required
                  disabled={state.submitting || state.succeeded}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-accent outline-none transition-all disabled:opacity-50"
                />
                <ValidationError prefix="Nome" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    disabled={state.submitting || state.succeeded}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-accent outline-none transition-all disabled:opacity-50"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">Telefone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(11) 99999-9999"
                    required
                    disabled={state.submitting || state.succeeded}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-accent outline-none transition-all disabled:opacity-50"
                  />
                  <ValidationError prefix="Telefone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">Descreva Seu Caso</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos brevemente o que aconteceu..."
                  required
                  rows={4}
                  disabled={state.submitting || state.succeeded}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-accent outline-none transition-all resize-none disabled:opacity-50"
                />
                <ValidationError prefix="Mensagem" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting || state.succeeded}
                className="w-full btn-gold py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Processando Envio...
                  </>
                ) : state.succeeded ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    Enviado!
                  </>
                ) : (
                  'Enviar Mensagem com Segurança'
                )}
              </button>
              
              <p className="text-[10px] text-center text-foreground/40 uppercase tracking-widest">
                Sua privacidade é nossa prioridade. Dados protegidos por LGPD.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
