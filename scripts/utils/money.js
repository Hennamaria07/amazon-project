export const formateCurrency = (priceCents) => {
    // toFixed(2) show numbers with two decimal places
   return (priceCents / 100).toFixed(2);
}