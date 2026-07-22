class Server {
    constructor() {
        this.cables = [];
        this.messages = [];
    }


    writeOnServer(text) {
        const statusBar = document.querySelector('.server-status-bar');
        if (statusBar) {
            statusBar.innerText = text;
        }
    }

    playAnimation() {
        const serverElement = document.getElementById('server-main');
        if (serverElement) {
            serverElement.classList.add('active');
        }
        return serverElement;
    }

    getPacByCable(pac) {

        const serverElement = this.playAnimation();

        this.writeOnServer("PROCESSING DATA FROM: " + pac.from.name + "...");

        const sendToCable = this.cables.find(c => c.client.id === pac.to);

        const messagesCable = this.messages.find(c => c.cableId === sendToCable.id);

        messagesCable.messages.push(pac);

        setTimeout(() => { this.checkCableToClient(sendToCable); }, 1500);
    }

    checkCableToClient(cable) {

        if (cable.is_busy()) { setTimeout(() => this.checkCableToClient(cable), 2000); }

        else {
            const cableData = this.messages.find(m => m.cableId === cable.id);
            const pac = cableData.messages.shift();

            this.writeOnServer("ROUTING PACKAGE TO: " + cable.client.name + "...");

            cable.getPackageToClient(pac)

            setTimeout(() => {
                if (this.messages.every(m => m.messages.length === 0)) {
                    this.writeOnServer("SYSTEM ONLINE - AWAITING SIGNAL...");
                }

                const serverElement = document.getElementById('server-main');
                if (serverElement) {
                    serverElement.classList.remove('active');
                }
            }, 3000);
        }
    }
}

