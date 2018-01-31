// Variable to hold request
var request;

$(function () {

    var $inputs;
    var valid = true;
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

        getInputs(validate);

    })
        .change(function () {
            $(".form-error-message").css("display", "none");
            $(".failure-message")
        });

    $("#realname").focus(function () {
        $(".no-name-message").css("display", "none");
        $("#realname").css("background-color", "#fff");
        valid = true;
    })
        .blur(function () {
            getInputs(validateName);
        });

    $("#email").focus(function () {
        $(".no-email-message").css("display", "none");
        $(".invalid-email-message").css("display", "none");
        $("#email").css("background-color", "#fff");
        valid = true;
    })
        .blur(function () {
            getInputs(validateEmail);
        });

    $("#subject").focus(function () {
        $(".no-subject-message").css("display", "none");
        $("#subject").css("background-color", "#fff");
        valid = true;
    })
        .blur(function () {
            getInputs(validateSubject);
        });

    $("#msgbody").focus(function () {
        $(".no-body-message").css("display", "none");
        $("#msgbody").css("background-color", "#fff");
        valid = true;
    })
        .blur(function () {
            getInputs(validateBody);
        });

    /**
     * Get all values input to the form and store them in $inputs.
     *
     * @param callback function to be performed after fetching form inputs.
     */
    function getInputs(callback) {
        $inputs = $("#send-email").find("input, textarea");

        // Remove whitespace from beginning and end (better done functionally?)
        $inputs["0"]["value"] = $inputs["0"]["value"].trim();
        $inputs["1"]["value"] = $inputs["1"]["value"].trim();
        $inputs["2"]["value"] = $inputs["2"]["value"].trim();
        $inputs["3"]["value"] = $inputs["3"]["value"].trim();

        callback();
    }

    /**
     * Checks form input with id realname. If valid, does nothing, if invalid,
     * shows relevant error message to the user.
     */
    function validateName() {
        if ($inputs["0"]["value"].length === 0) {
            $(".no-name-message").css("display", "block");
            $("#realname").css("background-color", "#f2dede");
            valid = false;
        }
    }

    /**
     * Checks email form input. Displays errors for if the email is left blank,
     * or is invalid.
     */
    function validateEmail() {

        if ($inputs["1"]["value"].length === 0) {
            $(".no-email-message").css("display", "block");
            $("#email").css("background-color", "#f2dede");
            valid = false;
            return;
        }

        if (!emailRegex.test($inputs["1"]["value"]) === true) {
            $(".invalid-email-message").css("display", "block");
            $("#email").css("background-color", "#f2dede");
            valid = false;
        }
    }

    /**
     * Checks subject form input. If valid (not empty), does nothing, if
     * invalid, shows relevant error message to the user.
     */
    function validateSubject() {
        if ($inputs["2"]["value"].length === 0) {
            $(".no-subject-message").css("display", "block");
            $("#subject").css("background-color", "#f2dede");
            valid = false;
        }
    }

    /**
     * Checks email body form input with id msgbody. If valid (not empty), does
     * nothing, if invalid, shows relevant error message to the user.
     */
    function validateBody() {
        if ($inputs["3"]["value"].length === 0) {
            $(".no-body-message").css("display", "block");
            $("#msgbody").css("background-color", "#f2dede");
            valid = false;
        }
    }

    /**
     * Validates all fields and performs captcha validation if valid.
     */
    function validate() {

        getInputs(function() {

        });
        validateName();
        validateEmail();
        validateSubject();
        validateBody();

        if (valid) {
            grecaptcha.execute();
        }
    }
});

// Has to be global or cannot be seen by reCAPTCHA.
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
        $(".failure-message").css("display", "block");
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
};
