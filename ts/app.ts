import 'xterm/dist/xterm.css'
import * as Xterm from 'xterm';

export class TestApp {
    term: any;

    private prompt() {
        this.term.write('\r\n$ ');
    };


    constructor() {

        let opts = {} as Xterm.ITerminalOptions;


        opts.cursorBlink = true;
        opts.cursorStyle = 'underline';
        opts.disableStdin = false
        //fontSize: 40

        this.term = new Xterm.Terminal(opts);

        let term = this.term;

        this.term.open(document.getElementById('terminal'));

        this.term.write("Mochii UI terminal. Type commands below...");

        this.prompt();

        term._core.register(term.addDisposableListener('key', (key: any, ev: any) => {
            var printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
            if (ev.keyCode === 13) {

                this.prompt();
            }
            else if (ev.keyCode === 8) {
                // Do not delete the prompt
                if (term.x > 2) {
                    term.write('\b \b');
                }
            }
            else if (printable) {
                term.write(key);
            }
        }));

    }
}

