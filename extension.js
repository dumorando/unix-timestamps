//We dont need to wrap it in a function cause the builder does that for us
// Boilerplate from https://docs.penguinmod.com

import icon from "./icon";

class Extension {
    getInfo() {
        return {
            id: "unixTimestamp",
            name: "Timestamps",
			menuIconURI: icon,
            blocks: [
                {
                    opcode: 'milisecond',
                    text: 'Unix timestamp (miliseconds)',
                    blockType: Scratch.BlockType.REPORTER
                },
				{
					opcode: 'second',
					text: 'Unix timestamp (seconds)',
					blockType: Scratch.BlockType.REPORTER
				}
            ]
        };
    }

    milisecond() {
        return Date.now();
    }
	
	second() {
		return Math.floor(Date.now() / 1000);
	}
}

Scratch.extensions.register(new Extension());