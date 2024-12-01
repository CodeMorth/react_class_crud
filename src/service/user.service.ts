import { generalService } from "../function/generalService";
import { addUserInterface } from "../interface/User";

export const addUserS = (data: addUserInterface) => {
  return generalService({
    method: "post",
    url: "user",
    data: data,
  });
};

export const getAllUsersS = () => {
  return generalService({
    method: "get",
    url: "user",
  });
};
