class Cable {
    constructor(_id, _client, _server) {
        this.id = _id;
        this._is_busy = false;
        this.server = _server;
        this.client = _client;
    }

    is_busy() {
        return this._is_busy;
    }

    getPackageToServer(pac) {
        this._is_busy = true;
        this.setActiveCable(pac);
    }
    
    getPackageToClient(pac) {
        this._is_busy = true;
        
        const visualPackage = document.getElementById(this.id);
        
        if (visualPackage) {
            visualPackage.classList.add('returning');
        }

        setTimeout(() => {
            if (visualPackage) {
                visualPackage.classList.remove('returning');
            }
            this.client.receiveMessage(pac);
            this._is_busy = false;
        }, 2000);
    }

    setActiveCable(pac) {
          
            const visualPackage = document.getElementById(this.id);

            if (visualPackage) {
                visualPackage.classList.add('moving');
            }

            setTimeout(() => {
                if (visualPackage) {
                    visualPackage.classList.remove('moving');
                }
                this.server.getPacByCable(pac);
                this._is_busy =false;
            }, 2000);
    }
}