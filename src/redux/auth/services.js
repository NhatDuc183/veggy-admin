import api from 'src/utils/httpRequest'

export const loginService = async (email, password) =>
  await api
    .post('veggy-service/v1/auths/login', { email, password })
    .then((res) => {
      return res.data
    })
    .catch((e) => e.response?.data)

export const signupService = async (data) =>
  await api
    .post('veggy-service/v1/auths/register', data)
    .then((res) => {
      return res.data
    })
    .catch((e) => e.response?.data)

export const getUserService = async () =>
  await api
    .get('veggy-service/v1/auths/user')
    .then((res) => {
      return res.data
    })
    .catch((e) => e.response?.message)

export const updatePasswordService = async (data) =>
  await api
    .post('veggy-service/v1/auths/forgot-password')
    .then((res) => {
      return res.data
    })
    .catch((e) => e.response?.message)

export const forgotPasswordService = async (data) =>
  await api
    .get('veggy-service/v1/auths/forgot-password')
    .then((res) => {
      return res.data
    })
    .catch((e) => e.response?.message)
