const Main = () => {
  return (
    <section
      className="flex mt-10 shadow-2xl hover:shadow-green-700 bg-gradient-to-b 
      from-black to-stone-900 flex-col md:flex-col gap-4 lg:items-center lg:justify-center lg:flex-row"
      id="caminhada"
    >
      <img
        className="lg:w-1/2 shadow-2xl shadow-black rounded-md mx-4 "
        src="djing.jpg"
        alt="spacechronix tocando na roots"
      />

      <div className="font-lighter lg:w-1/2 text-blue-700 mt-4">
        <h3 className="text-2xl text-pink-700 lg text-center md:text-3xl lg:mb-3 lg:text-4xl mb-8">
          Koan
        </h3>
        <p className="text-xl lg:text-3xl md:text-2xl p-5  mb-8">
          O projeto Koan vem de experimentos musicais e evoluções sonoras da
          mente do produtor Saulo Vinicius, sensações e harmonia criam um
          ambiente perfeito alinhando corpo e mente em um único só lugar criando
          uma atividade de dança e meditação intensa. As historias são contadas
          de 148 a 155bpm, com fortes influencias de Forest. Um koan é uma
          narrativa, diálogo, questão ou afirmação no budismo zen que contém
          aspectos que são inacessíveis à razão. Desta forma, o koan tem, como
          objetivo, propiciar a iluminação espiritual do praticante da Meditação
          ativa.
        </p>
        <div className="text-pink-600 animate-bounce md:text-3xl lg:text-4xl text-2xl font-lighter hover:text-red-600 text-center mb-10">
          <a
            href="https://soundcloud.com/koanlive"
            target="_blank"
          >
            Ouça!
          </a>
        </div>
      </div>
    </section>
  );
};

export { Main };
