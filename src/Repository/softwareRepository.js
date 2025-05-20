import AppDataSource from '../Config/data-source.js';
import softwareSchema from '../Schema/softwareSchema.js';

const softwareRepository = AppDataSource.getRepository(softwareSchema);

export const createSoftware = async (softwareData) => {
  const software = softwareRepository.create(softwareData);
  return await softwareRepository.save(software);
};

export const findSoftwareByName = async (name) => {
  return await softwareRepository.findOneBy({ name });
};

export default {
  createSoftware,
  findSoftwareByName,
};
