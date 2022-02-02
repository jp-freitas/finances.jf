export function FormatCurrency(amount: number) {
  const formattedCurrency = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    maximumFractionDigits: 2,
    currency: 'BRL'
  }).format(amount);
  return formattedCurrency;
}