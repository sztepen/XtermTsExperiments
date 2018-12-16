import 'xterm/dist/xterm.css'
import * as Xterm from 'xterm';

export class ConsoleWidget {

    private _term: Xterm.Terminal;

    private prompt() {
        this._term.write('\r\n$ ');
    };

    public display_text(input: string): void {

        this._term.write(input);

        this.prompt();

    }

    private get_last_line(): string {
        var content = this._term.textarea.value;
        var lastLine = content.substr(content.lastIndexOf("\n") + 1);

        return lastLine;
    }

    //i.e. -  on enter;
    private send_message() {

        var command = this.get_last_line();
        console.log(command);

    }

    constructor() {

        let opts = {} as Xterm.ITerminalOptions;

        opts.cursorBlink = true;
        opts.cursorStyle = 'underline';
        opts.disableStdin = false

        this._term = new Xterm.Terminal(opts);

        let term = this._term;

        this._term.open(document.getElementById('terminal'));

        this._term.write("Mochii UI terminal. Type commands below...");

        this.prompt();

        term.addDisposableListener('key', (key: any, ev: any) => {
            var printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
            if (ev.keyCode === 13) {

                this.prompt();
                this.send_message();
                //clear "buffer"
                this._term.textarea.value = "";

            }
            else if (ev.keyCode === 8) {
                // Do not delete the prompt
                if ((term as any).x > 2) {
                    term.write('\b \b');
                }
            }
            else if (printable) {
                term.write(key);
            }
        });

    }
}

