export const el = {
    inputEmail: '.card__register input[name="email"]',
    inputName: '.card__register input[name="name"]',
    inputPassword: '.card__register input[name="password"]',
    inputConfirmationPassword: '.card__register input[name="passwordConfirmation"]',
    btnSubmit:'.card__register button[type="submit"]',
    addBalance: '#toggleAddBalance',
    errorInputEmail:'.card__register input[name="email"]~p',
    errorMessageByinputName: (name) => `.card__register input[name="${name}"]~p`,
}
