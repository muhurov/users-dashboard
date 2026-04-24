import { formatDate, formatList } from "@/shared/lib";

import { UserField } from "./types";

export const FIELD_VALUE_PLACEHOLDER = "N/A";

export const USER_DETAILS_FIELDS: UserField[] = [
  { label: "ID", key: "id" },
  { label: "Роль", key: "role", isBadge: true },
  { label: "Имя", key: "firstName" },
  { label: "Фамилия", key: "lastName" },
  { label: "Возраст", key: "age" },
  { label: "Почта", key: "email" },
  { label: "Телефон", key: "phone" },
  {
    label: "Дата рождения",
    key: "birthDate",
    format: (user) => formatDate(user.birthDate, FIELD_VALUE_PLACEHOLDER),
  },
  {
    label: "Адрес",
    key: "address",
    format: (user) => {
      const { address, city, stateCode, postalCode, country } =
        user.address ?? {};

      return formatList([address, city, stateCode, postalCode, country]);
    },
  },
  {
    label: "Компания",
    key: "company",
    format: (user) => {
      const { department, name, title, address } = user.company ?? {};

      return formatList([name, title, department, address?.country]);
    },
  },
];
