#!/usr/bin/env node
import { welcomeMsg, userName } from '../src/cli.js';
import primeMechanic from '../src/games/brain-prime-mechanic.js';

welcomeMsg(userName);
primeMechanic(userName);
