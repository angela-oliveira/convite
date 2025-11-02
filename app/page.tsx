'use client';
import Image from "next/image";
import { 
  Plane, 
  Cake, 
  PartyPopper, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Shirt, 
  Mic, 
  MessageCircle,
  Flag
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-purple-800 via-purple-600 to-purple-400 p-4 sm:p-6">
      {/* Cartão estilo boarding pass */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header BIRTHDAY AIRLINES */}
        <div className="bg-purple-900 text-white text-center py-4 px-4 relative">
          <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">BIRTHDAY AIRLINES</h1>
          {/* <div className="absolute top-2 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg">
            PRIMEIRA CLASSE
          </div> */}
        </div>

        {/* Conteúdo principal */}
        <div className="p-6 sm:p-8">
          {/* Icons section */}
          <div className="flex justify-around items-center mb-6 sm:mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-full p-3 mb-2">
                <Cake className="text-purple-600 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              {/* <span className="text-xs sm:text-sm text-gray-600 font-medium">Sua Casa</span> */}
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-full p-3 mb-2">
                <Plane className="text-purple-600 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-full p-3 mb-2">
                <PartyPopper className="text-purple-600 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              {/* <span className="text-xs sm:text-sm text-gray-600 font-medium">Festa</span> */}
            </div>
          </div>

          {/* Passenger info grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-500 uppercase mb-1">Passageiro</span>
              <span className="text-xl font-bold text-gray-900">Ângela</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-500 uppercase mb-1">Classe</span>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">Primeira Classe</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-500 uppercase mb-1">Voo Especial</span>
              <span className="text-xl font-bold text-gray-900">33 Anos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-500 uppercase mb-1">Data de Embarque</span>
              <span className="text-xl font-bold text-gray-900">25/11</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-xs sm:text-sm text-gray-500 uppercase mb-1">Destino Final</span>
              <span className="text-xl font-bold text-gray-900">Karaoke TocaPub</span>
            </div>
          </div>

          {/* Barcode area */}
          <div className="mt-6 mb-4">
            <div className="h-12 sm:h-16 flex items-center justify-center mb-2">
              <Image 
                src="/barcode.svg" 
                alt="Código de barras" 
                width={300} 
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider text-center font-mono">2025</p>
          </div>
          {/* Dashed separator */}
          <div className="border-t-2 border-dashed border-gray-300 my-6 sm:my-8"></div>

          {/* Check-in section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Flag className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-orange-500 font-semibold text-sm sm:text-base">Faça seu Check-in Agora!</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href="https://wa.me/5583988432834?text=Check-in%20confirmado!%20Estarei%20presente%20neste%20voo!%20🎉✈️"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-colors"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm sm:text-base">Confirmar Presença</span>
              </a>
              <a
                href="https://maps.app.goo.gl/oJnAHBt5bRaGyHn49"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-4 rounded-xl shadow-lg transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span className="text-sm sm:text-base">Ver Localização</span>
              </a>
            </div>
          </div>

          {/* Event details */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0 mt-0.5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-gray-500 uppercase">Horário de Embarque</span>
                <p className="text-sm sm:text-base text-gray-900 font-medium">19h</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0 mt-0.5">
                <Shirt className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-gray-500 uppercase">Dress Code</span>
                <p className="text-sm sm:text-base text-gray-900 font-medium">Venha confortável e pronto para cantar!</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0 mt-0.5">
                <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-gray-500 uppercase">Entretenimento</span>
                <p className="text-sm sm:text-base text-gray-900 font-medium">Karaokê a noite toda</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0 mt-0.5">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-gray-500 uppercase">Dúvidas?</span>
                <p className="text-sm sm:text-base text-gray-900 font-medium">Entre em contato com a aniversariante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
