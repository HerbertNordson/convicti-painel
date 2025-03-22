export const checkEmail = (email: string) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (regex.test(email)) {
    return { msg: "E-mail correto!", status: true };
  }

  return { msg: "E-mail não existe!", status: false };
};

export const getPlatforma = (data: Array<any>, platform: string) => {
  return data.filter((d: any) => d.platform === platform).length;
};
