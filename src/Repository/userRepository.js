import AppDataSource from '../Config/data-source.js';
import userSchema from '../Schema/userSchema.js';

const userRepository = AppDataSource.getRepository(userSchema);

export const createUser = async (userData) => {
  const user = userRepository.create(userData);
  return await userRepository.save(user);
};

export const findUserByUsername = async (username) => {
  return await userRepository.findOneBy({ username });
};

export default {
  createUser,
  findUserByUsername,
};