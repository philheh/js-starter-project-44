#!/usr/bin/env node
import { welcomeMsg, userName } from '../src/cli.js';
import gcdMechanic from '../src/games/brain-gcd-mechanic.js';

welcomeMsg(userName);
gcdMechanic(userName);
