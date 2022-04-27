jQuery.extend(jQuery.validator.messages, {
    required: "Campo Obligatorio",
    remote: "Please fix this field.",
    email: "Ingrese una dirección de email válida",
    url: "Ingrese una URL válida",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Ingrese solo valores numéricos",
    digits: "Ingrese solo dígitos",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Los valores no coinciden",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("No ingrese más de {0} caracteres."),
    minlength: jQuery.validator.format("No ingrese menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});