import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
  .all([signUpUser(), uploadPhoto()])
  .then((result) => {
    console.log(`${result[0].firstName} ${result[1].lastName} ${result[2].fileName}`);
  })
  .catch(() => new Error());
};
