export default function login (code, type = 'openId') {
  if (type === 'openId') {
    axios
      .put(`/api/v1/wx/sessions/${code}`)
      .then()
      .catch()
  } else if (type === 'code') {

  } else {
    console.error('微信授权登录: type只能为code或openId')
  }
}