export const formatDate = (date?: string | Date, placeholder: string = "-") => {
  if (!date) return placeholder;

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};
