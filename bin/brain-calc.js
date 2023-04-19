#!/usr/bin/env node
import calcMechanic from '../src/brain-calc-mechanic.js';
import { welcomeMsg, userName } from '../src/cli.js';

welcomeMsg(userName);
calcMechanic(userName);
