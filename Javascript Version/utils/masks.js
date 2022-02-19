function maskPhone(value) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1)$2")
    .replace(/(\d)(\d{4})$/, "$1-$2")
}

function maskCurrency(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1.$2")
    .replace(/(?=(\d{3})+(\D))\B/g, " ")
}

export { maskPhone, maskCurrency }
