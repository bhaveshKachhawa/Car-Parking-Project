import express from 'express';
import { Remove } from '../database/schema/removedCarSchema.js';
import { carSlot } from '../database/schema/carSlotSchema.js';
import { Car } from '../database/schema/carSchema.js';
import { userData } from '../database/schema/userSchema.js';
import bodyParser from 'body-parser';
export { express, Remove, carSlot, Car, userData, bodyParser };

