import { HiXMark } from "react-icons/hi2";

type ErrorMessageProps = {
  message: string;
  dismiss: () => void;
};

export const ErrorMessage = ({ message, dismiss }: ErrorMessageProps) => {
  return (
    <div
      onClick={dismiss}
      className="relative w-full cursor-pointer rounded border border-red-200 bg-red-100"
    >
      <p className="m-4 font-semibold text-red-500">{message}</p>
      <HiXMark className="absolute right-3 top-4 text-2xl text-red-500" />
    </div>
  );
};

export default ErrorMessage;
