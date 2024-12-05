import { Calculator, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calculator className="h-8 w-8" />
          <h1 className="text-2xl font-bold">MathMinds</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Поиск математиков..."
            className="px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Главная</a></li>
            <li><a href="#" className="hover:underline">О проекте</a></li>
            <li><a href="#" className="hover:underline">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

