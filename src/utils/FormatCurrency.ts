export function FormatCurrency(price: number) {
  const formattedCurrency = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    maximumFractionDigits: 2,
    currency: 'BRL'
  }).format(price);
  return formattedCurrency;
}