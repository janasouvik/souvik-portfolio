export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
