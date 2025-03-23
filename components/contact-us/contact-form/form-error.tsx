import { FaExclamationTriangle } from 'react-icons/fa';

type FormErrorProps = {
  message?: string;
};

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-red-500/15 p-3 text-sm font-bold text-red-500">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}
