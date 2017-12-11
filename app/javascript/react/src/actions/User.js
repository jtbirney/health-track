export const createUser = values => dispatch => {
  let payload = JSON.strinify(values)
  debugger
  fetch(`/api/v1/users`, {
    credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: payload
  }).then(response => response.json())
    .then(body => {
      debugger
    })
}
