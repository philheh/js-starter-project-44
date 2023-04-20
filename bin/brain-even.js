#!/usr/bin/env node
import { welcomeMsg, userName } from '../src/cli.js';
import evenMechanic from '../src/games/brain-even-mechanic.js';

welcomeMsg(userName);
evenMechanic(userName);
