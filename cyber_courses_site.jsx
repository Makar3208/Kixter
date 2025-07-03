import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Temporary placeholder components for Navbar and Footer
const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Kixter</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Головна</a></li>
        <li><a href="/about" className="hover:underline">Про нас</a></li>
        <li><a href="/courses" className="hover:underline">Каталог</a></li>
        <li><a href="/contact" className="hover:underline">Контакти</a></li>
        <li><a href="/sponsors" className="hover:underline">Партнери</a></li>
      </ul>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white p-4 text-center">
    <p>&copy; 2025 Kixter. Всі права захищені.</p>
  </footer>
);

const Home = () => (
  <div
    className="p-4 text-white min-h-screen bg-cover bg-center"
    style={{ backgroundImage: 'url(/images/stadium-promo.jpeg)' }}
  >
    <div className="bg-black bg-opacity-60 p-6 rounded max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Курси побудови карʼєри в кіберспорті</h1>
      <p className="mb-6">Реєструйся зараз та почни свій шлях у світі ігор</p>
      <form className="bg-white text-black p-4 rounded shadow-md">
        <label className="block mb-2 font-semibold">Імʼя:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />
        <label className="block mb-2 font-semibold">Email:</label>
        <input type="email" className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Надіслати</button>
      </form>
    </div>
  </div>
);

const About = () => <div className="p-4 text-white">Про Kixter: ми створюємо можливості для майбутніх зірок кіберспорту.</div>;

const Courses = () => (
  <div className="p-4 text-white min-h-screen bg-cover bg-center"
       style={{ backgroundImage: 'url(/images/cyber-course-cover.jpeg)' }}>
    <div className="bg-black bg-opacity-60 p-6 rounded max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Каталог курсів</h2>
      <ul>
        <li className="mb-2">🎮 Основи кіберспорту</li>
        <li className="mb-2">🎯 Тренінг стрілецьких ігор (FPS)</li>
        <li className="mb-2">🎓 Як стати професійним гравцем</li>
      </ul>
    </div>
  </div>
);

const Contact = () => (
  <div className="p-4 text-white">
    <h2 className="text-2xl font-bold mb-4">Звʼяжіться з нами</h2>
    <p>Email: contact@kixter.io</p>
    <p>Телефон: +38 099 123 4567</p>
  </div>
);

const Sponsors = () => (
  <div className="p-4 text-white">
    <h2 className="text-2xl font-bold mb-4">Співпраця зі спонсорами</h2>
    <p>Ми відкриті до партнерств з брендами, які розділяють нашу пристрасть до кіберспорту.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
