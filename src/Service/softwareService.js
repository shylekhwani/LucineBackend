import softwareRepository from "../Repository/softwareRepository.js";
import { getAllSoftware } from "../Repository/softwareRepository.js";

export const createSoftware = async (softwareData, userRole) => {
  if (userRole !== "Admin") {
    throw new Error("Only Admins can create software");
  }

  const { name, description, accessLevels } = softwareData;

  const existingSoftware = await softwareRepository.findSoftwareByName(name);
  if (existingSoftware) {
    throw new Error("Software already exists");
  }

  const newSoftware = {
    name,
    description,
    accessLevels,
  };

  return await softwareRepository.createSoftware(newSoftware);
};


export const getAllSoftwareService = async () => {
  const softwares = await getAllSoftware();
  return softwares;
};