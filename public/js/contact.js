// Variable to hold request
var request;

$(function () {

    var $inputs;

    const emailRegex = new RegExp("^(?=[A-Z0-9][A-Z0-9@._%+-]{5,253}$)[A-Z0-9._%+-]{1,64}@(?:(?=[A-Z0-9-]{1,63}\.)" +
        "[A-Z0-9]+(?:-[A-Z0-9]+)*\.){1,8}[A-Z]{2,63}$", "i");

// Bind to the submit event of our form
    $("#send-email").submit(function(event){

        // Prevent default posting of form - put here to work in case of errors
        event.preventDefault();

        // Abort any pending request
        if (request) {
            request.abort();
        }

        // setup some local variables
        var $form = $("#send-email");

        // Let's select and cache all the fields
        $inputs = $form.find("input, textarea");

        validate();

    });

    function validate() {
        if (!emailRegex.test($inputs["1"]["value"]) === true) {
            $(".form-error-message").css("display", "block");
        } else {
            grecaptcha.execute();
        }
    }
});

var successfulCaptcha = function () {
    console.log("success!");
    $(".captcha-error-message").css("display", "none");

    // setup some local variables
    var $form = $("#send-email");

    // Let's select and cache all the fields
    var $inputs = $form.find("input, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    console.log(serializedData);

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /api/contact
    request = $.ajax({
        url: "/api/contact",
        type: "post",
        data: serializedData,
        statusCode: {
            403: function () {
                $(".captcha-error-message").css("display", "block");
            }
        }
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        $(".success-message").css("display", "block");
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(textStatus + " " + errorThrown);
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
};
