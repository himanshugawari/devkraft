const checkEmail = (email) => {
  const reges = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reges.test(String(email.trim()).toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const checkName = (name) => {
  const reges = /^[a-zA-Z]+$/;
  if (reges.test(String(name.trim()).toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const CheckPassword = (password) => {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  if (password.value.match(passw)) {
    return true;
  } else {
    return false;
  }
};

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export { checkEmail, getBase64, checkName, CheckPassword };
