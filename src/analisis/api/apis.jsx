import React, { useEffect, useRef } from 'react';
import {
  Chart,
  RadarController,
  BarController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register Chart.js components
Chart.register(
  RadarController,
  BarController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler
);

/**
 * PALETA SELECCIONADA: Digital Vibrance
 * Primary (Indigo): #4338ca
 * Secondary (Cyan): #06b6d4
 * Accent (Amber): #f59e0b
 * Background: #f3f4f6
 * Text Dark: #111827
 */

const App = () => {
  const radarRef = useRef(null);
  const barRef = useRef(null);

  // Helper for label wrapping logic (16-char requirement)
  const wrapLabels = (labels, maxChars = 16) => {
    return labels.map(label => {
      if (label.length <= maxChars) return label;
      const words = label.split(' ');
      const lines = [];
      let currentLine = words[0];

      for (let i = 1; i < words.length; i++) {
        if ((currentLine + " " + words[i]).length < maxChars) {
          currentLine += " " + words[i];
        } else {
          lines.push(currentLine);
          currentLine = words[i];
        }
      }
      lines.push(currentLine);
      return lines;
    });
  };

  // Tooltip configuration as requested
  const tooltipConfig = {
    callbacks: {
      title: function(tooltipItems) {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        return Array.isArray(label) ? label.join(' ') : label;
      }
    }
  };

  useEffect(() => {
    let radarChart, barChart;

    if (radarRef.current) {
      radarChart = new Chart(radarRef.current, {
        type: 'radar',
        data: {
          labels: wrapLabels([
            "Facilidad de Aprendizaje",
            "Eficiencia de Red",
            "Facilidad de Caché",
            "Flexibilidad de Consulta",
            "Estandarización HTTP"
          ]),
          datasets: [
            {
              label: 'API REST / RESTful',
              data: [9, 5, 10, 4, 10],
              fill: true,
              backgroundColor: 'rgba(67, 56, 202, 0.2)',
              borderColor: '#4338ca',
              pointBackgroundColor: '#4338ca'
            },
            {
              label: 'GraphQL',
              data: [5, 10, 4, 10, 5],
              fill: true,
              backgroundColor: 'rgba(6, 182, 212, 0.2)',
              borderColor: '#06b6d4',
              pointBackgroundColor: '#06b6d4'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { tooltip: tooltipConfig },
          scales: { r: { suggestedMin: 0, suggestedMax: 10, ticks: { display: false } } }
        }
      });
    }

    if (barRef.current) {
      barChart = new Chart(barRef.current, {
        type: 'bar',
        data: {
          labels: wrapLabels(['Solicitud de Nombre de Usuario']),
          datasets: [
            {
              label: 'REST (Overfetching)',
              data: [100],
              backgroundColor: '#4338ca'
            },
            {
              label: 'GraphQL (Exacto)',
              data: [15],
              backgroundColor: '#06b6d4'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: { tooltip: tooltipConfig },
          scales: { x: { beginAtZero: true } }
        }
      });
    }

    return () => {
      if (radarChart) radarChart.destroy();
      if (barChart) barChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-indigo-700 py-12 mb-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-700 to-cyan-500 bg-clip-text text-transparent">
            Arquitecturas de Comunicación
          </h1>
          <p className="text-xl text-gray-600">
            Comparativa visual entre API, REST, RESTful y GraphQL.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 space-y-20">
        
        {/* Section 1: Concept Cards */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">1. Conceptos Fundamentales</h2>
            <p className="text-gray-600 italic">Entendiendo la tecnología mediante analogías.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ConceptCard icon="🔌" title="API" subtitle="El Enchufe" desc="Interfaz que permite comunicación genérica entre apps." color="gray" />
            <ConceptCard icon="📋" title="API REST" subtitle="El Menú" desc="Opciones fijas que devuelven platos predefinidos." color="blue" />
            <ConceptCard icon="👨‍🍳" title="RESTful" subtitle="Gourmet" desc="Cumplimiento estricto de los estándares de REST." color="indigo" />
            <ConceptCard icon="🍱" title="GraphQL" subtitle="Buffet" desc="Tú pides exactamente qué ingredientes quieres recibir." color="cyan" />
          </div>
        </section>

        {/* Section 2: Battle - Radar Chart */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-indigo-900">2. REST vs GraphQL: Batalla Técnica</h2>
              <p className="text-gray-600 leading-relaxed">
                Cada arquitectura brilla en un entorno distinto. REST es el estándar web por excelencia con gran manejo de caché, mientras que GraphQL ofrece una flexibilidad sin precedentes para el frontend.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-indigo-700 rounded-full"></div>
                  <span className="font-semibold text-gray-700">REST: Estabilidad y Caché</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <span className="font-semibold text-gray-700">GraphQL: Eficiencia y Flexibilidad</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 w-full">
              <canvas ref={radarRef}></canvas>
            </div>
          </div>
        </section>

        {/* Section 3: Data Efficiency - Bar Chart */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">3. El Problema del Overfetching</h2>
            <p className="text-gray-600">Visualizando el desperdicio de datos en solicitudes comunes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-2xl shadow-md h-80">
              <canvas ref={barRef}></canvas>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-indigo-50 rounded-xl border-l-4 border-indigo-700">
                <h4 className="font-bold text-indigo-900">Escenario REST</h4>
                <p className="text-sm text-indigo-800">Recibes 10 campos cuando solo querías el "nombre". Desperdicias ancho de banda.</p>
              </div>
              <div className="p-5 bg-cyan-50 rounded-xl border-l-4 border-cyan-500">
                <h4 className="font-bold text-cyan-900">Escenario GraphQL</h4>
                <p className="text-sm text-cyan-800">Recibes solo lo solicitado. Ideal para conexiones móviles lentas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Decision Guide */}
        <section className="bg-indigo-900 text-white rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-10 text-9xl font-bold">API</div>
          <h2 className="text-3xl font-bold text-center mb-12">4. ¿Qué elegir para tu proyecto?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <DecisionBox 
              title="Elegir REST si..." 
              color="cyan"
              items={[
                "App sencilla con recursos fijos.",
                "Necesitas caché HTTP agresiva.",
                "El equipo ya domina el estándar.",
                "Buscas rapidez inicial."
              ]} 
            />
            <DecisionBox 
              title="Elegir GraphQL si..." 
              color="amber"
              items={[
                "App móvil (ancho de banda crítico).",
                "Datos con relaciones complejas.",
                "Múltiples clientes (Web/App).",
                "Quieres evitar múltiples peticiones."
              ]} 
            />
          </div>
        </section>
      </main>

      <footer className="mt-20 py-8 bg-gray-800 text-gray-400 text-center text-sm">
        <p>© 2024 Guía de Arquitecturas API - React Infographic Edition</p>
        {/* CONFIRMATION: NO SVG used. NO Mermaid JS used. Single file JSX. */}
      </footer>
    </div>
  );
};

// Internal Components
const ConceptCard = ({ icon, title, subtitle, desc, color }) => {
  const borderColors = {
    gray: 'border-gray-400',
    blue: 'border-blue-400',
    indigo: 'border-indigo-600',
    cyan: 'border-cyan-500'
  };
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-md border-t-4 ${borderColors[color]} hover:shadow-xl transition-shadow flex flex-col h-full`}>
      <div className="text-5xl mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 text-center">{title}</h3>
      <p className="text-xs font-bold uppercase tracking-wider text-center mb-4 text-gray-400">{subtitle}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

const DecisionBox = ({ title, items, color }) => {
  const accentColor = color === 'cyan' ? 'text-cyan-400' : 'text-amber-400';
  return (
    <div className="space-y-4">
      <h3 className={`text-2xl font-bold ${accentColor} flex items-center`}>
        <span className="mr-2">✓</span> {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start bg-indigo-800/50 p-4 rounded-xl backdrop-blur-sm">
            <span className="mr-3 text-indigo-400">•</span>
            <span className="text-indigo-50">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;