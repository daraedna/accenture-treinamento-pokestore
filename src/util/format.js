export const { formatPrice } = new Intl.NumberFormat(
  'pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format();