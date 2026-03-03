import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      <header className="bg-blue-900 text-white p-6">
        <h1 className="text-3xl font-bold">
          IDAPES
        </h1>
        <p className="text-sm">
          Instituto de Desenvolvimento e Apoio ao Ensino e Pesquisa
        </p>
      </header>

      <main className="p-10 max-w-4xl mx-auto">

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Sobre o Instituto
          </h2>

          <p className="leading-relaxed">
            O IDAPES é uma instituição dedicada ao desenvolvimento,
            apoio e incentivo ao ensino e à pesquisa, promovendo
            iniciativas que contribuem para o avanço educacional
            e científico.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Links Institucionais
          </h2>

          <div className="space-y-3">

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Instagram size={20} />
              Instagram
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Facebook size={20} />
              Facebook
            </a>

          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Contato
          </h2>

          <p>
            Para mais informações, entre em contato conosco através das redes
            sociais institucionais ou pelo e-mail oficial do instituto.
          </p>
        </section>

      </main>

      <footer className="bg-gray-100 text-center p-6 mt-10 text-sm">
        © {new Date().getFullYear()} IDAPES — Todos os direitos reservados
      </footer>

    </div>
  );
}
