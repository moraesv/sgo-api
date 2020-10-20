export const validPassword = (password) => {
  if (password == null || password.length < 6) {
    return false
  }

  let hasUpperChar = false
  let hasLowerChar = false
  let hasNumber = false
  let hasSpecialChar = false

  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i)
    if (char >= 'A' && char <= 'Z') hasUpperChar = true
    else if (char >= 'a' && char <= 'z') hasLowerChar = true
    else if (char >= '0' && char <= '9') hasNumber = true
    else hasSpecialChar = true
  }
  return hasUpperChar && hasLowerChar && hasNumber && hasSpecialChar
}

export const validCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf === '') return false

  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  )
    return false
  let add = 0
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i)
  let rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(cpf.charAt(9))) return false
  add = 0
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i)
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(cpf.charAt(10))) return false
  return true
}

export function validEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
