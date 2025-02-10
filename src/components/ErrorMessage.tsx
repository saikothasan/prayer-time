import { AlertCircle } from "lucide-react"

interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      className="bg-islamic-red-100 border border-islamic-red-400 text-islamic-red-700 px-4 py-3 rounded relative mb-4"
      role="alert"
    >
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 mr-2" />
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  )
}

