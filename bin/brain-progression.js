#!/usr/bin/env node
import { welcomeMsg, userName } from '../src/cli.js';
import progressionMechanic from '../src/games/brain-progression-mechanic.js';

welcomeMsg(userName);
progressionMechanic(userName);
