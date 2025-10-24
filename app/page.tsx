import Carousel from '@/components/carousel';
import Link from 'next/link';

export default function Home() {
  const slides = [
    {
      backgroundImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Relatórios</h1>
          <p className="text-xl text-white/90 font-semibold drop-shadow-lg">
            Acompanhe suas finanças em tempo real
          </p>
        </div>
      ),
    },
    {
      backgroundImage: 'https://images.pexels.com/photos/5185074/pexels-photo-5185074.jpeg',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Organize</h1>
          <p className="text-xl text-white/90 font-semibold drop-shadow-lg">
            Mantenha suas despesas sempre sob controle
          </p>
        </div>
      ),
    },
    {
      backgroundImage: 'https://images.pexels.com/photos/7680696/pexels-photo-7680696.jpeg',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Educação Financeira</h1>
          <p className="text-xl text-white/90 font-semibold drop-shadow-lg">
            Aprenda a gerenciar melhor seu dinheiro
          </p>
        </div>
      ),
    },
  ];

  return (
    <main>
      {/* Hero / Carousel */}
      <Carousel slides={slides} autoPlay autoPlayInterval={5000} />

      {/* Seção sobre o app */}
      <section className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Seu controle financeiro em um só lugar</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Acompanhe gastos, defina metas, gere relatórios e tenha uma visão completa das suas finanças — tudo sincronizado entre o aplicativo e a versão web.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/cadastro"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Crie sua conta
          </Link>
          <Link
            href="/download"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-semibold"
          >
            Baixe o App
          </Link>
        </div>
      </section>

      {/* Funcionalidades principais */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que você pode fazer com o Pig Money</h2>
          <div className="grid md:grid-cols-3">
            <div className="text-center p-5">
              <img src="bar-chart-fill.svg" alt="Relatórios" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Relatórios em tempo real</h3>
              <p className="text-gray-600">
                Visualize gráficos, estatísticas e relatórios detalhados para entender melhor seus gastos e ganhos.
              </p>
            </div>
            <div className="text-center p-5 bg-red-500">
              <img src="cash-coin.svg" alt="Controle de despesas" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Controle completo de despesas</h3>
              <p className="text-white">
                Registre gastos, receitas e metas mensais de forma simples e rápida, mesmo offline.
              </p>
            </div>
            <div className="text-center p-5">
              <img src="piggy-bank-fill.svg" alt="Educação Financeira" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Educação financeira</h3>
              <p className="text-gray-600">
                Aprenda com nossos artigos e calculadoras financeiras para planejar o futuro.
              </p>
            </div>
            <div className="text-center p-5 bg-red-500">
              <img src="graph-up.svg" alt="Educação Financeira" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Investimentos</h3>
              <p className="text-white">
                Planeje e organize seus investimentos.
              </p>
            </div>
            <div className="text-center p-5">
              <img src="laptop-fill.svg" alt="Educação Financeira" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multiplataforma</h3>
              <p className="text-gray-600">
                Sistema multiplataforma para web e mobile.
              </p>
            </div>
            <div className="text-center p-5 bg-red-500">
              <img src="whatsapp.svg" alt="Educação Financeira" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Whatsapp e IA</h3>
              <p className="text-white">
                Integração com o Whatsapp para facilitar o seu dia a dia e com Inteligência Artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas financeiras */}
      <section className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ferramentas que ajudam você a economizar</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Utilize nossas calculadoras para simular investimentos e entender o impacto dos juros compostos no seu dinheiro.
        </p>
        <Link
          href="/tools"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold"
        >
          Acessar Calculadoras
        </Link>
      </section>

      {/* Chamada final */}
      <section className="py-20 bg-red-500 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Comece agora a transformar sua vida financeira</h2>
        <p className="text-lg mb-8">Disponível para web e dispositivos móveis</p>
        <div className="flex justify-center gap-4">
          <Link
            href="/cadastro"
            className="bg-white text-red-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Criar Conta
          </Link>
          <Link
            href="/download"
            className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-red-500"
          >
            Baixar App
          </Link>
        </div>
      </section>
    </main>
  );
}
