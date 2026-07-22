class Client {
    constructor(_id, _last_message, _cable, _name) {
        this.id = _id;
        this.last_message = _last_message;
        this.cable = _cable;
        this.name = _name;
    }

    checkCable(pac) {
        if (this.cable.is_busy()) {
            setTimeout(() => this.checkCable(pac), 2000);
        } else {
            this.cable.getPackageToServer(pac);
        }
    }

    sendMessage() {
        const toInput = document.getElementById('to-' + this.id);
        const mesInput = document.getElementById('mes-' + this.id);

        if (!toInput || !mesInput || mesInput.value.trim() === '') {
            alert("Error: Please enter a message!");
            return;
        }

        const translationMap = {
            "police": "client1", "משטרה": "client1", "mada": "client2",
            "מדא": "client2", "חדר מצב": "client3", "Room status": "client3", "client1": "client1",
            "client2": "client2", "client3": "client3"
        };

        const userInput = toInput.value.trim().toLowerCase();
        const actualTargetId = translationMap[userInput];

        if (!actualTargetId) {
            alert("Error: Unknown target! Please type Police, MADA, or Civilian.");
            return;
        }

        const pac = new Package(this, actualTargetId, mesInput.value);

        this.checkCable(pac);
        mesInput.value = '';
        toInput.value = '';
    }

    receiveMessage(pac) {
        this.last_message = pac.message;

        const displayScreen = document.getElementById('display-' + this.id);
        const clientBox = document.getElementById(this.id + '-box');

        if (displayScreen) {

            let senderName = pac.from.name;

            displayScreen.innerHTML = `<strong>LAST MSG:</strong> ${this.last_message} <br><small>(From: ${senderName})</small>`;
            displayScreen.style.backgroundColor = '#005500';

            setTimeout(() => { displayScreen.style.backgroundColor = '#000'; }, 600);
        }

   
        if (clientBox) {
            clientBox.classList.add('message-received-anim');
            setTimeout(() => {
                clientBox.classList.remove('message-received-anim');
            }, 600);
        }
    }
}
