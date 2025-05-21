import AppDataSource from "../Config/data-source.js";
import requestSchema from "../Schema/requestSchema.js";

const requestRepository = AppDataSource.getRepository(requestSchema);

const createRequest = async (data) => {
  const request = requestRepository.create(data);
  return await requestRepository.save(request);
};

 const getAllRequests = async () => {
    return await requestRepository.find({ relations: ["user", "software"] });
  };

 const getRequestById = async (id) => {
    return await requestRepository.findOne({
      where: { id },
      relations: ["user", "software"],
    });
  };

 const updateRequestStatus = async (id, status) => {
    await requestRepo.update(id, { status });
    return await requestRepository.findOneBy({ id });
  };

export default {
  createRequest,
  getAllRequests,
  getRequestById,
  updateRequestStatus
};
