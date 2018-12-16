import { ConsoleWidget } from "./ConsoleWidget";
import { interval } from "d3";

export class TestApp {

    constructor() {

        let widget = new ConsoleWidget();

        interval(() => {

            let text = "Time is " + new Date().toTimeString() + "\r\n";

            text = text + "this was a Line  \r\n";
            text = text + "this was a second Line  \r\n";

            widget.display_text(text);


        }, 2000)

    }

}