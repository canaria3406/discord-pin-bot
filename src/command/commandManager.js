import { pinCommand } from './pinCommand.js';
import { unpinCommand } from './unpinCommand.js';

export const msgCommands = [
  {
    commandNames: 'pinmessage',
    handler: pinCommand,
  },
  {
    commandNames: 'unpinmessage',
    handler: unpinCommand,
  },
];
