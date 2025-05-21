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
    await requestRepository.update(id, { status });
    return await requestRepository.findOneBy({ id });
  };

  const getCurrentUserRequests = async (userId) => {
    return await requestRepository.find({
    where: {
      user: { id: userId },
    },
    relations: ["software", "user"],
  });
  }

export default {
  createRequest,
  getAllRequests,
  getRequestById,
  updateRequestStatus,
  getCurrentUserRequests
};
