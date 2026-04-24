export const Spinner = () => {
  return (
    <div
      className="animate-spin rounded-full border-t-transparent border-blue-600 w-8 h-8 border-3"
      role="status"
    >
      <span className="sr-only">Загрузка...</span>
    </div>
  );
};
