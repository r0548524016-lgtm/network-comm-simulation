const myServer = new Server();

const client1 = new Client('client1', '', null, "POLICE");
const client2 = new Client('client2', '', null, "MADA");
const client3 = new Client('client3', '', null, "CONTROL ROOM");

const c1 = new Cable('c1', client1, myServer);
const c2 = new Cable('c2', client2, myServer);
const c3 = new Cable('c3', client3, myServer);

client1.cable = c1;
client2.cable = c2;
client3.cable = c3;

myServer.cables = [c1, c2, c3];
myServer.messages = [{ cableId: c1.id, messages: [] },
{ cableId: c2.id, messages: [] }, { cableId: c3.id, messages: [] }]

document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('btn-client1');
    const btn2 = document.getElementById('btn-client2');
    const btn3 = document.getElementById('btn-client3');

    if (btn1) btn1.onclick = () => client1.sendMessage();
    if (btn2) btn2.onclick = () => client2.sendMessage();
    if (btn3) btn3.onclick = () => client3.sendMessage();
});


