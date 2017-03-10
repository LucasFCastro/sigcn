require('bootstrap-notify')

function info(message) {
  $.notify(message)
}

function danger(message) {
  $.notify(message,{type: 'danger'})
}
