import signUpUser from "./4-user-promise";
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const signUp = signUpUser(firstName, lastName);
    const photo = uploadPhoto(fileName);
    return Promise.allSettled([signUp, photo]).then((value) => {
        let result = [];
        value.forEach((data) => {
            if (data.status === 'fulfilled') {
                result.push({ status: data.status, value: data.value });
            } else {
                result.push({ status: data.status, value: `${data.reason}` })
            }
        })
    })
}