class Bienvenue{
    private message : string;
    constructor(message : string) {
        this.message = message;
    }

    public DisBienvenue() : string {
        return "Bonjour " + this.message;
    }
}

let b : Bienvenue = new Bienvenue("TypeScript");
console.log(b.DisBienvenue());