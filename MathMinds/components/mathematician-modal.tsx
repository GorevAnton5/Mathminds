import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Award, Clock, X } from 'lucide-react'
import Image from "next/image"

interface MathematicianModalProps {
  mathematician: {
    name: string
    image: string
    bio: string
    achievements: string[]
    era: string
    details: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export function MathematicianModal({ mathematician, isOpen, onClose }: MathematicianModalProps) {
  if (!mathematician) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full sm:max-w-[600px] h-full sm:h-auto max-h-screen sm:max-h-[80vh] p-0">
        <ScrollArea className="h-full max-h-screen sm:max-h-[80vh]">
          <div className="p-6">
            <DialogHeader className="relative pb-4 mb-4 border-b">
             <Button
                onClick={onClose}
                variant="ghost"
                className="absolute right-0 top-0 rounded-full p-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
              <DialogTitle className="text-2xl font-bold">{mathematician.name}</DialogTitle>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{mathematician.era}</span>
              </div>
            </DialogHeader>
            <div className="space-y-6">
              <div className="flex justify-center">
                <Image 
                  src={mathematician.image} 
                  alt={mathematician.name} 
                  width={200} 
                  height={200} 
                  className="rounded-full border-4 border-blue-200" 
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Биография</h3>
                <p className="text-gray-700">{mathematician.bio}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Основные достижения
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {mathematician.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Подробности</h3>
                <p className="text-gray-700">{mathematician.details}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

