import * as alt from 'alt-client';

const view = new alt.WebView('http://resource/client/html/index.html');

alt.onServer('log:Console', handleLogConsole);

function handleLogConsole(msg: string) {
    alt.log(msg);
}

alt.on('connectionComplete', () => {
    alt.log('HOLA CONECTADO');
});
