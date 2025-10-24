'use client';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e redes sociais */}
        <div>
          <img
            src="pigmoney-black-transparent.png"
            alt="Pig Money"
            className="h-36 mb-6"
          />
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ff6b57] hover:bg-[#ffada2] transition-colors"
            >
              <img src="github.svg" alt="GitHub" className="w-6" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ff6b57] hover:bg-[#ffada2] transition-colors"
            >
              <img src="instagram.svg" alt="Instagram" className="w-6" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ff6b57] hover:bg-[#ffada2] transition-colors"
            >
              <img src="envelope-at.svg" alt="" className="w-6" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ff6b57] hover:bg-[#ffada2] transition-colors"
            >
              <img src="whatsapp-white.svg" alt="" className="w-6" />
            </a>
          </div>
        </div>

        {/* Sobre nós */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#ff6b57] cursor-default">Sobre nós</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Quem somos</a></li>
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Imprensa</a></li>
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Depoimentos</a></li>
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Educação Financeira */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#ff6b57] cursor-default">Educação Financeira</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Planejamento Pessoal</a></li>
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Investimentos</a></li>
          </ul>
        </div>

        {/* Junte-se a nós */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#ff6b57] cursor-default">Junte-se a nós</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Baixe o App</a></li>
            <li><a href="#" className="hover:text-[#ffada2] transition-colors">Crie sua conta</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Rodapé inferior */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-3 md:space-y-0">
        <p>© {new Date().getFullYear()} Pig Money — Todos os direitos reservados.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-[#ffada2] transition-colors">Termos de Uso</a>
          <span>|</span>
          <a href="#" className="hover:text-[#ffada2] transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
