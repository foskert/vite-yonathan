import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, 
  Layers, 
  Box, 
  Terminal, 
  Cloud, 
  Monitor, 
  Cpu, 
  Users, 
  Settings, 
  Zap, 
  CheckCircle2, 
  Play, 
  RefreshCw,
  Info,
  ChevronRight
} from 'lucide-react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';

// Registrar componentes de Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

/**
 * <!-- Chosen Palette: Harmony Blue & Stone -->
 * <!-- Application Structure Plan: 
 * 1. Dashboard-centric layout with thematic sections.
 * 2. Interactive State Management for the DevOps Infinite Loop.
 * 3. Data-driven comparisons (Radar & Stacked Bar charts).
 * 4. Interactive "Simulation" area for Image-to-Container conversion.
 * Chosen for visual clarity and engagement over a linear document style. -->
 * <!-- Visualization & Content Choices: 
 * - Radar Chart: Compares Traditional vs DevOps metrics.
 * - Stacked Bar: Compares infrastructure layers between VMs and Containers.
 * - Dynamic Content Cards: Explains the Docker ecosystem components.
 * - Confirmation: NO SVG files used (Lucide React generates inline SVGs). NO Mermaid JS. -->
 */

const App = () => {
  const [activeCycleStage, setActiveCycleStage] = useState('plan');
  const [containerSimState, setContainerSimState] = useState('static'); // 'static' or 'running'

  // Datos para el ciclo de vida
  const cycleData = {
    plan: { title: '1. Plan', desc: 'Definición de requisitos, planificación de características y priorización. El equipo decide qué valor entregar.', color: 'text-blue-600' },
    code: { title: '2. Code', desc: 'Desarrollo del software. Escritura del código, revisión entre pares y gestión de versiones con herramientas como Git.', color: 'text-indigo-600' },
    build: { title: '3. Build', desc: 'Compilación del código. Convertir el código fuente en artefactos ejecutables y realizar pruebas unitarias.', color: 'text-purple-600' },
    test: { title: '4. Test', desc: 'Pruebas continuas. Verificación de calidad, seguridad y rendimiento en entornos controlados.', color: 'text-pink-600' },
    release: { title: '5. Release', desc: 'Gestión del lanzamiento. Aprobación final y preparación de la versión para ser entregada.', color: 'text-red-600' },
    deploy: { title: '6. Deploy', desc: 'Despliegue a producción. Lanzamiento del código a los servidores o nube para los usuarios finales.', color: 'text-orange-600' },
    operate: { title: '7. Operate', desc: 'Administración de la aplicación en vivo. Gestión de la infraestructura y escalado bajo demanda.', color: 'text-yellow-600' },
    monitor: { title: '8. Monitor', desc: 'Recopilación de métricas de rendimiento y errores. Los datos alimentan el siguiente ciclo de "Plan".', color: 'text-green-600' },
  };

  // Configuración de Radar Chart
  const radarData = {
    labels: ['Velocidad', 'Fiabilidad', 'Escalabilidad', 'Colaboración', 'Calidad'],
    datasets: [
      {
        label: 'Tradicional',
        data: [3, 4, 3, 2, 4],
        backgroundColor: 'rgba(120, 113, 108, 0.2)',
        borderColor: 'rgba(120, 113, 108, 1)',
        borderWidth: 2,
      },
      {
        label: 'DevOps',
        data: [9, 8, 9, 10, 8],
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Configuración de Bar Chart (Arquitectura)
  const barData = {
    labels: ['Máquina Virtual (VM)', 'Contenedor'],
    datasets: [
      { label: 'Aplicación / Binarios', data: [2, 2], backgroundColor: '#f59e0b' },
      { label: 'Guest OS (Pesado)', data: [4, 0], backgroundColor: '#ef4444' },
      { label: 'Docker Engine', data: [0, 1], backgroundColor: '#3b82f6' },
      { label: 'Hypervisor / Host OS', data: [2, 2], backgroundColor: '#64748b' },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: {
        callbacks: {
          label: (context) => {
            if (context.label === 'Contenedor' && context.dataset.label === 'Guest OS (Pesado)') return 'No requiere (Comparte el Kernel)';
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: { x: { stacked: true }, y: { stacked: true, display: false } },
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-20 selection:bg-blue-100">
      {/* Navegación Simple */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="text-blue-600" size={28} />
            <span className="font-bold text-xl tracking-tight">DevOps<span className="text-blue-600">Canvas</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-500">
            <a href="#intro" className="hover:text-blue-600 transition-colors">Cultura</a>
            <a href="#ciclo" className="hover:text-blue-600 transition-colors">Ciclo</a>
            <a href="#docker" className="hover:text-blue-600 transition-colors">Docker</a>
            <a href="#arquitectura" className="hover:text-blue-600 transition-colors">Arquitectura</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="intro" className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
          La Ciencia del <span className="text-blue-600">Despliegue Continuo</span>
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          DevOps no es un destino, sino un viaje de mejora continua. Descubra cómo la automatización 
          y los contenedores Docker están eliminando los silos entre equipos.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* Sección: Cultura y Radar */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-600 font-semibold tracking-wide uppercase text-sm">
              <Users size={18} />
              <span>Colaboración Humana</span>
            </div>
            <h2 className="text-3xl font-bold">Cultura sobre Herramientas</h2>
            <p className="text-stone-600 leading-relaxed">
              El reporte indica que la falla más común en la implementación de DevOps es ignorar el factor cultural. 
              <strong> Empatía, responsabilidad compartida y transparencia</strong> son los cimientos sobre los que 
              descansa el éxito tecnológico.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-stone-200">
                <div className="text-blue-600 mb-2"><CheckCircle2 size={24} /></div>
                <h4 className="font-bold">Agilidad</h4>
                <p className="text-xs text-stone-500">Entregas rápidas y constantes.</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-stone-200">
                <div className="text-green-600 mb-2"><Activity size={24} /></div>
                <h4 className="font-bold">Estabilidad</h4>
                <p className="text-xs text-stone-500">Menos fallos en producción.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 h-[400px]">
            <h4 className="text-center font-bold text-stone-500 mb-4 uppercase text-xs tracking-widest">Métricas de Rendimiento</h4>
            <div className="h-[320px]">
              <Radar 
                data={radarData} 
                options={{ maintainAspectRatio: false, scales: { r: { ticks: { display: false } } } }} 
              />
            </div>
          </div>
        </section>

        {/* Sección: Ciclo Infinito Interactivo */}
        <section id="ciclo" className="bg-white p-10 rounded-3xl shadow-lg border border-stone-200 overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">El Ciclo de Vida DevOps</h2>
            <p className="text-stone-500">Un proceso de retroalimentación sin fin. Haga clic en cada fase.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3">
              {Object.keys(cycleData).map((stage) => (
                <button
                  key={stage}
                  onClick={() => setActiveCycleStage(stage)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    activeCycleStage === stage 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105' 
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-blue-300'
                  }`}
                >
                  <span className="font-bold">{cycleData[stage].title.split('.')[1]}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
            <div className="w-full lg:w-1/2 bg-stone-50 p-8 rounded-2xl border border-stone-200 min-h-[200px] flex flex-col justify-center transition-all duration-300">
              <h3 className={`text-2xl font-bold mb-3 ${cycleData[activeCycleStage].color}`}>
                {cycleData[activeCycleStage].title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                {cycleData[activeCycleStage].desc}
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Ecosistema Docker */}
        <section id="docker">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-stone-200 flex-grow"></div>
            <h2 className="text-3xl font-bold text-stone-900 px-4">Componentes de Docker</h2>
            <div className="h-px bg-stone-200 flex-grow"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Cpu />, name: 'Docker Engine', desc: 'El corazón del sistema que gestiona los contenedores.' },
              { icon: <Terminal />, name: 'CLI / API', desc: 'La interfaz para comunicarnos con el motor.' },
              { icon: <Monitor />, name: 'Desktop', desc: 'Panel visual para entornos de desarrollo locales.' },
              { icon: <Cloud />, name: 'Docker Hub', desc: 'Almacén global de imágenes listas para usar.' },
            ].map((comp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {comp.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{comp.name}</h4>
                <p className="text-stone-500 text-sm">{comp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Arquitectura y Simulación */}
        <section id="arquitectura" className="grid lg:grid-cols-2 gap-12">
          {/* Gráfico Comparativo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Layers className="text-orange-500" />
              VMs vs Contenedores
            </h3>
            <p className="text-stone-600">
              La diferencia clave es la <strong>virtualización del SO</strong>. Los contenedores comparten 
              el kernel del host, lo que permite iniciar en milisegundos y consumir 10x menos RAM que una VM.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 h-[350px] shadow-sm">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>

          {/* Simulación Interactiva */}
          <div className="bg-stone-900 text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Play className="text-green-400" />
                Ciclo de Vida del Objeto
              </h3>
              <p className="text-stone-400 text-sm mb-8 leading-relaxed">
                Una <strong>Imagen</strong> es solo una plantilla inerte (como un instalador). 
                Un <strong>Contenedor</strong> es esa imagen en acción.
              </p>

              <div className={`w-full h-40 rounded-2xl border-2 border-dashed border-stone-700 flex flex-col items-center justify-center transition-all duration-700 ${containerSimState === 'running' ? 'bg-blue-900/20 border-blue-500' : 'bg-transparent'}`}>
                {containerSimState === 'static' ? (
                  <div className="flex flex-col items-center animate-pulse">
                    <div className="p-4 bg-stone-700 rounded-lg mb-2 shadow-inner"><Info size={32} /></div>
                    <span className="text-stone-500 font-mono text-xs">IMAGEN (Sólo Lectura)</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-green-500 text-white rounded-lg mb-2 shadow-[0_0_20px_rgba(34,197,94,0.5)] transform scale-110 transition-transform"><Zap size={32} /></div>
                    <span className="text-green-400 font-mono text-xs font-bold">CONTENEDOR (EJECUTANDO)</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button 
                onClick={() => setContainerSimState('running')}
                className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Terminal size={18} /> docker run
              </button>
              <button 
                onClick={() => setContainerSimState('static')}
                className="p-3 bg-stone-800 hover:bg-stone-700 rounded-xl transition-colors"
              >
                <RefreshCw size={20} />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 mt-20 text-center text-stone-400 border-t border-stone-200 pt-10">
        <p className="text-sm">Explorador de Arquitectura Moderna © 2024</p>
        <p className="text-xs mt-2 italic">Análisis basado en fundamentos de Ingeniería de Sistemas y Despliegue.</p>
      </footer>
    </div>
  );
};

export default App;