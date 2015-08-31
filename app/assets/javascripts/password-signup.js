/**
 * Created by nnikolo on 30/08/15.
 */
$(document).ready(function () {
    var password = $('#user_password'); // Store password inputs
    var passwordConfirm = $('#user_password_confirmation');

    function setErrorHighlighter(e) {
        var target = e.target || e.srcElement;             // Get target element
        if (target.value.length < 8) {                     // If its length is < 8
            target.className = 'fail';                       // Set class to fail
        } else {                                           // Otherwise
            target.className = 'pass';                       // Set class to pass
        }
    }

    function removeErrorHighlighter(e) {
        var target = e.target || e.srcElement;              // Get target element
        if (target.className === 'fail') {                  // If class shows fail
            target.className = '';                            // Clear class
        }
    }

    function passwordsMatch(e) {
        var target = e.target || e.srcElement;               // Get target element
        // If value matches pwd and it is longer than 8 characters
        if ((password.value === target.value) && target.value.length >= 8) {
            target.className = 'pass';                         // Set class to pass
        } else {                                             // Otherwise
            target.className = 'fail';                         // Set class to fail
        }
    }

    password.focus(removeErrorHighlighter);
    password.blur(setErrorHighlighter);

    passwordConfirm.focus(removeErrorHighlighter);
    passwordConfirm.blur(passwordsMatch);
});