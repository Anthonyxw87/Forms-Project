$(document).ready(function () {
        // reset form when reset button is pressed and shows a blue info toastr 
        $("#reset-button").click(function () {
                //remove all added classes
                $("#username-group").removeClass("has-error");
                $("#firstName-group").removeClass("has-error");
                $("#lastName-group").removeClass("has-error");
                $("#phone-group").removeClass("has-error");
                $("#fax-group").removeClass("has-error");
                $("#e-mail-group").removeClass("has-error");

                //resets the fields
                $("#myForm").trigger("reset");

                //toastr notification
                toastr["info"]("Fields successully cleared");
        });

        // validate form when the submit button is pressed (empty fields)
        $("#submit-button").click(function () {
                // username, first name, last name, phone number, fax number, and e-mail variables
                var username = document.getElementById("username").value;
                var firstName = document.getElementById("firstName").value;
                var lastName = document.getElementById("lastName").value;
                var phone = document.getElementById("phone").value;
                var fax = document.getElementById("fax").value;
                var email = document.getElementById("email").value;
                // var cost = document.getElementById("cost-textbox").value;
                var cost = $("#cost-textbox").val();
                var areErrors = 0;

                //checks to see if the fields are filled and if not highlights the section red and shows a red toastr 
                if (username == null || username == "") {
                        toastr['error']("Submit a username");
                        $("#username-group").addClass("has-error");
                        areErrors = 1;
                }
                else{
                        $("#username-group").removeClass("has-error");
                }

                if (firstName == null || firstName == "") {
                        toastr['error']("Submit a first name");
                        $("#firstName-group").addClass("has-error");
                        areErrors = 1;
                }
                else{
                        $("#firstName-group").removeClass("has-error");  
                }

                if (lastName == null || lastName == "") {
                        toastr['error']("Submit a last name");
                        $("#lastName-group").addClass("has-error");
                        areErrors = 1;
                }
                else{
                        $("#lastName-group").removeClass("has-error");  
                }

                if (phone == null || phone == "") {
                        toastr['error']("Submit a phone number");
                        $("#phone-group").addClass("has-error");
                        areErrors = 1;
                }
                else{
                        $("#phone-group").removeClass("has-error");
                }

                if (fax == null || fax == "") {
                        toastr['error']("Submit a fax number");
                        $("#fax-group").addClass("has-error");
                        areErrors = 1;
                }
                else{
                        $("#fax-group").removeClass("has-error");
                }

                if (email == null || email == "") {
                        toastr['error']("Submit a e-mail");
                        $("#e-mail-group").addClass("has-error");
                        areErrors = 1;
                }
                else{
                        $("#e-mail-group").removeClass("has-error");
                }

                // validates if there is a cost (Cost Validation)
                if (cost == null || cost == "") {
                        toastr['error']("No Cost Was Calculated");
                        areErrors = 1;
                }
                // validates if the cost is negative (Value Validation)
                else if (cost < 0) {
                        toastr['error']("Cost is negative");
                        areErrors = 1;
                }

                //success notification when there are no validation errors
                if (areErrors == 0) {
                        //remove all added classes
                        $("#username-group").removeClass("has-error");
                        $("#firstName-group").removeClass("has-error");
                        $("#lastName-group").removeClass("has-error");
                        $("#phone-group").removeClass("has-error");
                        $("#fax-group").removeClass("has-error");
                        $("#e-mail-group").removeClass("has-error");

                        toastr['success']("Form was successfully submitted");
                }
        });

        // updates the value of days
        $("#check-in-date, #check-out-date").change(function () {
                var date1 = moment(document.getElementById("check-in-date").value);
                var date2 = moment(document.getElementById("check-out-date").value);
                $("#days-textbox").val(date2.diff(date1, "days"));
        });


        // updates the value of cost
        $("#adults-dropdown, #check-in-date, #check-out-date").change(function () {
                var numAdults = parseInt($("#adults-dropdown").val());
                var numDays = parseInt($("#days-textbox").val());
                $("#cost-textbox").val(150 * numDays * numAdults);

        });
});


