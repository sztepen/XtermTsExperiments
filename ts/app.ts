import 'xterm/dist/xterm.css'
import * as Term from 'xterm';

export class TestApp {
    term: Term.Terminal;

    private prompt() {
        this.term.write('\r\n$ ');
    };


    constructor() {
        this.term = new Term.Terminal();

        this.term.open(document.getElementById('terminal'));

        this.term.write("Mochii UI terminal. Type commands below...");

    }
}

