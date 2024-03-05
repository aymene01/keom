import { Button } from '@keom/react-ui'
import { FiAlertCircle } from 'react-icons/fi'

export default function LoginErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6">
      <div className="max-w-md w-full text-center shadow-md rounded-lg p-8 bg-white">
        <div className="mb-5 text-red-600">
          <FiAlertCircle className="h-20 w-20 inline-block" />
        </div>
        <h1 className="mb-4 text-xl font-medium text-gray-900">Oops! Something went wrong.</h1>
        <p className="mb-6">
          we are having trouble logging you in. Please make sure you use your Veepee credentials to access the platform.
        </p>
        <div className="flex justify-center">
          <Button href="/signin" variant="primary">
            Try Again
          </Button>
        </div>
        <p className="mt-6 text-sm font-light text-gray-400">
          If you continue to experience problems, please contact our{' '}
          <a href="mailto:support@veepee.com" className="text-blue-600 hover:underline">
            support team
          </a>
          .
        </p>
      </div>
    </div>
  )
}
