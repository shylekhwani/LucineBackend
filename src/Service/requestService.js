import requestRepository from "../Repository/requestRepository.js";

export const submitAccessRequest = async ({ user, software, accessType, reason }) => {
  return await requestRepository.createRequest({
    user,
    software,
    accessType,
    reason,
    status: "Pending",
  });
};

export const getAllRequestsService = async () => {
    return await requestRepository.getAllRequests();
};

export const getRequestByIdService = async (id) => {
    const request = await requestRepository.getRequestById(id);
    if (!request) throw new Error("Request not found");
    return request;
};

export const updateRequestStatusService = async (id, status) => {
    return await requestRepository.updateRequestStatus(id, status);
};