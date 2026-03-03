/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Target, 
  Lightbulb, 
  Star, 
  BookOpen, 
  Search, 
  Users, 
  Handshake, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem somos', href: '#quem-somos' },
    { name: 'Missão, Visão e Valores', href: '#missao' },
    { name: 'Área de atuação', href: '#atuacao' },
    { name: 'Projetos e Programas', href: '#projetos' },
    { name: 'Contato e Parcerias', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-idapes-blue font-bold text-2xl tracking-tighter">idapes</div>
          <div className="hidden md:block h-8 w-px bg-slate-200 mx-2"></div>
          <div className="hidden md:block text-[10px] leading-tight text-slate-500 uppercase font-medium">
            Instituto de<br />Desenvolvimento e Apoio<br />ao Ensino e Pesquisa
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-idapes-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden border-t border-slate-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Section = ({ id, children, className = "" }: { id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-idapes-blue/10 selection:text-idapes-blue">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-idapes-blue/5 rounded-l-full blur-3xl transform translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-idapes-blue/10 text-idapes-blue text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-idapes-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-idapes-blue"></span>
              </span>
              Desde 2008 promovendo excelência
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-idapes-dark leading-[1.1] mb-6">
              Desenvolvimento, <br />
              <span className="text-idapes-blue">Ensino e Pesquisa</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              O IDAPES é uma instituição dedicada à produção de conhecimento e ao fortalecimento de políticas públicas para um futuro sustentável.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quem-somos" className="px-8 py-4 bg-idapes-blue text-white rounded-full font-semibold hover:bg-idapes-dark transition-all shadow-lg shadow-idapes-blue/20 flex items-center gap-2">
                Saiba mais <ChevronRight size={18} />
              </a>
              <a href="#contato" className="px-8 py-4 border border-slate-200 text-slate-700 rounded-full font-semibold hover:bg-white hover:border-idapes-blue transition-all">
                Fale conosco
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <div className="text-idapes-blue font-bold text-8xl tracking-tighter mb-4">idapes</div>
              <div className="h-1 w-24 bg-idapes-blue mb-6"></div>
              <div className="text-xl font-medium text-slate-500 uppercase tracking-widest leading-tight">
                Instituto de<br />Desenvolvimento e Apoio<br />ao Ensino e Pesquisa
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-idapes-blue/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-dashed border-idapes-blue/20 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos */}
      <Section id="quem-somos" className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-primary">Quem Somos</h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              O <strong>Instituto de Desenvolvimento e Apoio ao Ensino e Pesquisa (IDAPES)</strong> é uma associação civil sem fins lucrativos, fundada em 2008, com sede em Vitória, Espírito Santo.
            </p>
            <p>
              Atuamos na promoção do ensino, da pesquisa, da capacitação profissional e do desenvolvimento social, por meio da realização de projetos, programas e parcerias institucionais.
            </p>
            <p>
              Com atuação em âmbito local, regional e nacional, o IDAPES desenvolve iniciativas voltadas à produção e à difusão do conhecimento, ao fortalecimento de políticas públicas e à promoção do desenvolvimento sustentável.
            </p>
          </div>
        </div>
      </Section>

      {/* Missão, Visão e Valores */}
      <Section id="missao" className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="heading-primary">Nossos Pilares</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Nossa base estratégica é construída sobre o compromisso com a ética e a transformação social.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Missão', 
              icon: <Target className="text-idapes-blue" size={32} />, 
              text: 'Promover, apoiar e desenvolver ações educacionais, científicas, culturais e sociais que contribuam para a formação profissional e o desenvolvimento humano.' 
            },
            { 
              title: 'Visão', 
              icon: <Lightbulb className="text-idapes-blue" size={32} />, 
              text: 'Ser reconhecido como uma instituição de referência na promoção do ensino, da pesquisa e da capacitação profissional, atuando de forma integrada.' 
            },
            { 
              title: 'Valores', 
              icon: <Star className="text-idapes-blue" size={32} />, 
              text: 'Ética, transparência, respeito à diversidade, compromisso com direitos fundamentais e sustentabilidade socioambiental.' 
            }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-idapes-blue/5 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-idapes-dark mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-idapes-blue p-12 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Nossos Valores em Detalhe</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Ética e legalidade institucional',
              'Transparência e eficiência na gestão',
              'Respeito à diversidade',
              'Compromisso com direitos fundamentais',
              'Sustentabilidade integral',
              'Promoção do interesse público'
            ].map((valor) => (
              <div key={valor} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-medium">{valor}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Áreas de Atuação */}
      <Section id="atuacao" className="bg-white">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="heading-primary">Áreas de Atuação</h2>
            <p className="text-lg text-slate-600 mb-8">
              O IDAPES atua de forma transversal em diferentes áreas, desenvolvendo projetos e ações que articulam ensino, pesquisa e desenvolvimento social.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-idapes-blue">
              <p className="italic text-slate-500">"Articulamos conhecimento e prática para gerar impacto real na sociedade."</p>
            </div>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {[
              { 
                title: 'Educação e Capacitação', 
                icon: <BookOpen size={24} />, 
                desc: 'Cursos, seminários e programas de formação técnica e profissional para estudantes e comunidade.' 
              },
              { 
                title: 'Pesquisa e Conhecimento', 
                icon: <Search size={24} />, 
                desc: 'Desenvolvimento de pesquisas científicas, estudos técnicos e consultorias estratégicas.' 
              },
              { 
                title: 'Desenvolvimento Social', 
                icon: <Users size={24} />, 
                desc: 'Projetos voltados à promoção de direitos, geração de renda e preservação ambiental.' 
              },
              { 
                title: 'Parcerias Institucionais', 
                icon: <Handshake size={24} />, 
                desc: 'Cooperação com órgãos públicos e setor privado por meio de convênios e contratos.' 
              }
            ].map((area) => (
              <div key={area.title} className="p-8 rounded-2xl border border-slate-100 hover:border-idapes-blue/30 hover:shadow-lg transition-all group">
                <div className="text-idapes-blue mb-4 group-hover:scale-110 transition-transform inline-block">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-idapes-dark mb-3">{area.title}</h3>
                <p className="text-slate-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projetos e Programas */}
      <Section id="projetos" className="bg-idapes-dark text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projetos e Programas</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Desenvolvemos iniciativas estruturadas de acordo com as demandas sociais e territoriais, observando critérios de impacto e sustentabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-idapes-blue"></div>
                Principais Frentes
              </h3>
              <ul className="space-y-4">
                {[
                  'Educação e formação profissional',
                  'Pesquisa científica e tecnológica',
                  'Capacitação de recursos humanos',
                  'Desenvolvimento regional sustentável',
                  'Assessoria técnica e institucional',
                  'Apoio a políticas públicas'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <ArrowUpRight size={16} className="text-idapes-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-400 leading-relaxed italic">
              "Os projetos são estruturados de acordo com as demandas sociais, institucionais e territoriais, observando critérios de impacto social, viabilidade técnica e sustentabilidade."
            </p>
          </div>
          <div className="relative group overflow-hidden rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Grupo em reunião de pesquisa" 
              className="rounded-3xl shadow-2xl w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-idapes-blue/30 mix-blend-multiply rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-idapes-dark/80 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>
      </Section>

      {/* Contato e Parcerias */}
      <Section id="contato" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <div className="text-idapes-blue font-bold text-6xl tracking-tighter mb-2">idapes</div>
              <div className="text-[10px] leading-tight text-slate-500 uppercase font-medium text-center">
                Instituto de<br />Desenvolvimento e Apoio<br />ao Ensino e Pesquisa
              </div>
            </div>
            <h2 className="heading-primary">Contato e Parcerias</h2>
            <p className="text-lg text-slate-600">Estamos abertos ao diálogo para construção de parcerias institucionais.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-idapes-blue/10 rounded-xl flex items-center justify-center text-idapes-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-idapes-dark mb-1">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(27) XXXX.XXXX</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-idapes-blue/10 rounded-xl flex items-center justify-center text-idapes-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-idapes-dark mb-1">E-mail</h4>
                  <p className="text-slate-600">contato@idapes.com.br</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-idapes-blue/10 rounded-xl flex items-center justify-center text-idapes-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-idapes-dark mb-1">Localização</h4>
                  <p className="text-slate-600">Vitória, Espírito Santo - Brasil</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Nome / Instituição</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-idapes-blue focus:ring-2 focus:ring-idapes-blue/20 outline-none transition-all" placeholder="Seu nome ou da sua empresa" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">E-mail</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-idapes-blue focus:ring-2 focus:ring-idapes-blue/20 outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-idapes-blue focus:ring-2 focus:ring-idapes-blue/20 outline-none transition-all" placeholder="Como podemos colaborar?"></textarea>
              </div>
              <button className="w-full py-4 bg-idapes-blue text-white rounded-xl font-bold hover:bg-idapes-dark transition-all shadow-lg shadow-idapes-blue/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="text-white font-bold text-3xl tracking-tighter">idapes</div>
            <div className="h-8 w-px bg-white/20 mx-2"></div>
            <div className="text-[10px] leading-tight text-slate-400 uppercase font-medium">
              Instituto de<br />Desenvolvimento e Apoio<br />ao Ensino e Pesquisa
            </div>
          </div>
          
          <div className="text-slate-400 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} IDAPES. Todos os direitos reservados.</p>
            <p className="mt-1">Associação civil sem fins lucrativos fundada em 2008.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
