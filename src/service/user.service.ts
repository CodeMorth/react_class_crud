import { generalService } from "../function/generalService";

export const addUserS = (data: FormData) => {
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

export const getUserByIdS = (id: string |number) => {
  return generalService({
    method: "get",
    url: `user/${id}`,
  });
};

export const deleteUserS = (id: string | number) => {
  return generalService({
    method: "delete",
    url: `user/${id}`,
  });
};

export const updateUserS = (id: string | number, data: any) => {
  return generalService({
    method: "put",
    url: `user/${id}`,
    data: data,
  });
};