$(document).ready(() => {
  const socket = io('http://localhost:3000');
  socket.on('connect', function () {
    console.log('Connected');

    socket.emit('events', { test: 'test' });
    socket.emit('identity', 0, (response) =>
      console.log('Identity:', response),
    );
  });
  socket.on('events', function (data) {
    console.log('event', data);
  });
  socket.on('exception', function (data) {
    console.log('event', data);
  });
  socket.on('disconnect', function () {
    console.log('Disconnected');
  });

  $('button').on('click', (event) => {
    console.log(`Request from ship ${event.currentTarget.id}`);
  });
});
