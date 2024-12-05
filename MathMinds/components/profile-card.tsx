import { Award, Clock, ThumbsUp, MessageCircle } from 'lucide-react'
import Image from "next/image"

interface ProfileCardProps {
  name: string
  image: string
  bio: string
  achievements: string[]
  era: string
  onClick: () => void
}

export function ProfileCard({ name, image, bio, achievements, era, onClick }: ProfileCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Image src={image} alt={name} width={100} height={100} className="rounded-full border-4 border-blue-200" />
          <div>
            <h3 className="text-2xl font-semibold text-blue-800">{name}</h3>
            <p className="text-gray-600 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {era}
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{bio}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2 flex items-center text-blue-700">
            <Award className="h-5 w-5 mr-1" />
            Основные достижения:
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ThumbsUp className="h-5 w-5 mr-1" />
            Нравится
          </button>
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <MessageCircle className="h-5 w-5 mr-1" />
            Комментировать
          </button>
        </div>
      </div>
    </div>
  )
}

