export default {
  PAN: /^[A-Z]{5}\d{4}[A-Z]{1}$/,
  GST: /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/,
  TIME: /^([01]\d|2[0-3]):([0-5]\d)$/, // Validates HH:mm format
}
