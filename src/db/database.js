import mongoose from 'mongoose';
import { backend } from '../constants.js';

const connectdb = async () => {
  try {
    const instanceofconnection = await mongoose.connect(
      `${process.env.MONGO_URI}/${backend}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${instanceofconnection.connection.host}`
    );
  } catch (error) {
    console.log('error is occuring', error);
    process.exit(1);
  }
};

export default connectdb;
