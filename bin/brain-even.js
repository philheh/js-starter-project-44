#!/usr/bin/env node
import { welcomeMsg, userName } from '../src/cli.js';
import evenMechanic from '../src/brain-even-mechanic.js';

welcomeMsg(userName);
evenMechanic(userName);
