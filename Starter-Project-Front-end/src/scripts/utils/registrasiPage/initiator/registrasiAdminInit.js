const registrasiAdminInit = {
    _validation(input) {
        input.value = input.value.replace(/[^0-9]/g, "");
    }
}

export default registrasiAdminInit