    //Global variables needed for enabling submit button
    var valid_username = false;
    var valid_email = false;
    var valid_password = false;
    var valid_repeat_pass = false;
    
    //verifies username is consistent with requirements (a-z, A-Z, 0-9 & "_")
    function verifyUsername(){
        let username = document.getElementById("nick").value;
        let regex = /^\w*$/;

        //checks if username is above 5 characters and displays according hints
        if(username.length < 5 && username.length != 0){
            if(!regex.test(username)) document.getElementById("error_username").classList.add("hidden"); //Added this if statement to avoid displaying two error messages at once in the form
            document.getElementById("error_tooshort").classList.remove("hidden");
            return;
        }else if(username.length > 4) document.getElementById("error_tooshort").classList.add("hidden");
        
        //checks if username has valid characters and displays according hints
        if(!regex.test(username)){
            document.getElementById("error_username").classList.remove("hidden");
        }else if(regex.test(username)) document.getElementById("error_username").classList.add("hidden");

        //ternary operator to determine username is valid or not
        valid_username = (username.length > 4 && regex.test(username)) ? true : false;
    }

    //verifies email with RFC 5322 regex
    function verifyEmail(){
        let email = document.getElementById("mail").value;
        //copied this shit off the net cause jesus christ what the fuck even is this regular expression (RFC 5322)
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //checks if email adress matches regex verification
        if(!regex.test(email) && email.length != 0){
            document.getElementById("error_email").classList.remove("hidden");
            valid_email = false;
        }
        else{
            document.getElementById("error_email").classList.add("hidden");
            valid_email = true;
        }
    }

    //verifies if passwords match regex requirements and are inputed twice correctly
    function verifyPass(){
        let pw = document.getElementById("pass").value;
        let repeat_pw = document.getElementById("conf_pass").value;
        let validations = 0;
        let regex_lower = /[a-z]/;
        let regex_upper = /[A-Z]/;
        let regex_symbol = /\W/;
        let regex_number = /[0-9]/;

        //checks pw length (8+ characters)
        if(pw.length < 8 && pw.length != 0){
            document.getElementById("error_pw").classList.add("hidden");
            document.getElementById("error_pw_tooshort").classList.remove("hidden");
            valid_password = false;
        }
        else{
            document.getElementById("error_pw_tooshort").classList.add("hidden");
        }

        //checks if at least 3 of the 4 regex expressions are met
        if((!regex_lower.test(pw) || !regex_upper.test(pw) || !regex_symbol.test(pw) || !regex_number.test(pw)) && pw.length > 7){
            document.getElementById("error_pw").classList.remove("hidden");

            if(regex_lower.test(pw)){
                document.getElementById("lowercase_letters").style.color = "green";
                validations++;
            }
            else {
                document.getElementById("lowercase_letters").style.color = "black";
                validations--;
            }

            if(regex_upper.test(pw)){
                document.getElementById("uppercase_letters").style.color = "green";
                validations++;
            }
            else {
                document.getElementById("uppercase_letters").style.color = "black";
                validations--;
            }

            if(regex_number.test(pw)){
                document.getElementById("numbers").style.color = "green";
                validations++;
            }
            else {
                document.getElementById("numbers").style.color = "black";
                validations--;
            }

            if(regex_symbol.test(pw)){
                document.getElementById("special_chars").style.color = "green";
                validations++;
            }
            else {
                document.getElementById("special_chars").style.color = "black";
                validations--;
            }

            //if enough validations occured, the password is valid and check for repeated password is started
            if(validations > 1){
                document.getElementById("error_pw").classList.add("hidden");
                document.getElementById("error_pw_tooshort").classList.add("hidden");

                valid_password = true;

                //checks if password and repeated password are identical
                if(repeat_pw && pw != repeat_pw) {
                    document.getElementById("error_pw_no_match").classList.remove("hidden");
                    valid_repeat_pass = false;
                }
                else {
                    document.getElementById("error_pw_no_match").classList.add("hidden");
                    valid_repeat_pass = true;
                }
            }
            else valid_password = false;
        }
    }

    //script that checks if all fields are valid and enables or disables submit button accordingly
    function verifyInput(){
        const check = [valid_username, valid_email, valid_password, valid_repeat_pass];

        for(const x of check) {
            if (x == false) {
                document.getElementById("regi").setAttribute("disabled", true);
                return;
            }
        }
        document.getElementById("regi").removeAttribute("disabled");
    }