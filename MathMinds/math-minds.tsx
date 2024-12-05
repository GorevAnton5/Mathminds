import { Header } from "./components/header"
import { ProfileCard } from "./components/profile-card"
import { Footer } from "./components/footer"
import { useState } from "react"
import { MathematicianModal } from "./components/mathematician-modal"

export default function MathMinds() {
  const [selectedMathematician, setSelectedMathematician] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const mathematicians = [
    {
      name: "Леонард Эйлер",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Швейцарский математик и физик, внёсший фундаментальный вклад в развитие этих наук.",
      achievements: ["Формула Эйлера", "Число e", "Теория графов"],
      era: "18 век",
      details: "Леонард Эйлер внес огромный вклад в математику, физику и механику. Он написал более 800 работ по математическому анализу, дифференциальной геометрии, теории чисел, приближенным вычислениям, небесной механике и другим областям. Эйлер обобщил понятие функции и существенно продвинул математический анализ, заложив основы теории комплексных функций."
    },
    {
      name: "Карл Фридрих Гаусс",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Немецкий математик, астроном, геодезист и физик, считается одним из величайших математиков всех времён.",
      achievements: ["Метод наименьших квадратов", "Теорема Гаусса", "Нормальное распределение"],
      era: "18-19 века",
      details: "Карл Фридрих Гаусс известен как «король математиков». Он внес фундаментальный вклад в теорию чисел, алгебру, математический анализ, теорию вероятностей, геометрию, геодезию, электростатику, астрономию и оптику. Гаусс разработал метод наименьших квадратов, который широко используется в статистике и обработке данных."
    },
    {
      name: "Софья Ковалевская",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Русский математик и механик, первая в мире женщина — профессор математики.",
      achievements: ["Теорема Коши-Ковалевской", "Исследования по теории вращения твёрдого тела"],
      era: "19 век",
      details: "Софья Ковалевская была первой в мире женщиной, ставшей профессором математики. Она внесла значительный вклад в анализ, дифференциальные уравнения и механику. Ее работа о вращении твердого тела вокруг неподвижной точки завершила исследования Леонарда Эйлера и Жозефа Луи Лагранжа."
    },
    {
      name: "Андрей Николаевич Колмогоров",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Советский математик, один из крупнейших математиков ХХ века.",
      achievements: ["Теория вероятностей", "Теория турбулентности", "Теория сложности алгоритмов"],
      era: "20 век",
      details: "Андрей Николаевич Колмогоров - один из крупнейших математиков XX века. Он внес фундаментальный вклад в теорию вероятностей, топологию, теорию информации, теорию сложности алгоритмов, теорию турбулентности и классическую механику. Колмогоров также работал над проблемами теории стрельбы, теории распространения волн и других прикладных задач."
    }
  ]

  const openModal = (mathematician) => {
    setSelectedMathematician(mathematician)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Великие умы математики</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mathematicians.map((mathematician, index) => (
            <ProfileCard 
              key={index} 
              {...mathematician} 
              onClick={() => openModal(mathematician)}
            />
          ))}
        </div>
      </main>
      <Footer />
      <MathematicianModal
        mathematician={selectedMathematician}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

