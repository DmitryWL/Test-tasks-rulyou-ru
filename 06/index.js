function getResult(actions) {
    const pc = new PC();

    for (let i of actions) {
        pc.inputAction(i);
    }

    pc.power();

    return pc.getCountProgramms();
}

class PC {
    constructor() {
        this.isOn = false;
        this.isAuth = false;
        this.consClicks = 0;
        this.countProgramms = 0;
        this.possibleProgramms = 0;
    }

    inputAction(action) {
        if (action === "power") {
            this.power();
        } else if (action === "keystrokes") {
            this.auth();
        } else if (action === "click") {
            this.click();
        }
    }

    power() {
        if (this.isOn) {
            this.countProgramms += this.possibleProgramms;
        }
        this.isOn = !this.isOn;
        this.consClicks = 0;
        if (this.isAuth) {
            this.isAuth = false;
        }
    }

    auth() {
        this.possibleProgramms = 0;
        this.isAuth = true;
        this.consClicks = 0;
    }

    click() {
        if (this.isReadyToWork()) {
            this.consClicks++;
            if (this.consClicks === 2) {
                this.possibleProgramms++;
                this.consClicks = 0;
            }
        }
    }

    isReadyToWork() {
        return this.isOn && this.isAuth;
    }

    getCountProgramms() {
        return this.countProgramms;
    }
}

module.exports = getResult;