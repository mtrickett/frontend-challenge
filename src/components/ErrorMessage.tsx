type ErrorMessageProps = {
  message: string;
  dismiss: () => void;
};

export const ErrorMessage = ({ message, dismiss }: ErrorMessageProps) => {
  return <p onClick={dismiss}>{message}</p>;
};

export default ErrorMessage;
