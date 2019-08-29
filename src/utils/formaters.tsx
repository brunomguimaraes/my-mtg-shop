export const formatCurrency = (value: number) => {
    return "R$ " + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
