export const convertDecimalToReal = (value) => {
  if (!value) return
  
   return new Intl.NumberFormat('pt-BR', {
     style: 'currency',
     currency: 'BRL',
   }).format(value)
}