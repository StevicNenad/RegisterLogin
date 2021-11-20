    function verifyUsername(){
        var valid_username = false;
        let username = document.getElementById("nick").value;
        let regex = /^\w*$/;

        if(username.length < 5 && username.length != 0){
            if(!regex.test(username)) document.getElementById("error_username").classList.add("hidden"); //Added this if statement to avoid displaying two error messages at once in the form
            document.getElementById("error_tooshort").classList.remove("hidden");
            return;
        }else document.getElementById("error_tooshort").classList.add("hidden");
        
        if(!regex.test(username)){
            document.getElementById("error_username").classList.remove("hidden");
        }else document.getElementById("error_username").classList.add("hidden");

        (username.length > 4 && regex.test(username)) ? valid_username = true : valid_username = false;
    }
    function verifyEmail(){
        var valid_email = false;
        let email = document.getElementById("mail").value;
        //copied this shit off the net cause jesus christ what the fuck even is this regular expression (RFC 5322)
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!regex.test(email) && email.length != 0){
            document.getElementById("error_email").classList.remove("hidden");
            valid_email = false;
        }
        else{
            document.getElementById("error_email").classList.add("hidden");
            valid_email = true;
        }
    }
    function verifyPass(){
        var valid_password = false;
        let pw = document.getElementById("pass").value;
        let validation_checks = 1;
        let regex_lower = /[a-z]/;
        let regex_upper = /[A-Z]/;
        let regex_symbol = /\W/;
        let regex_number = /[0-9]/;

        document.getElementById("pass").removeAttribute("onfocusout");
        document.getElementById("pass").setAttribute("onkeyup", "verifyPass()");

        if(pw.length < 8 && pw.length != 0){
            document.getElementById("error_pw").classList.add("hidden");
            document.getElementById("error_pw_tooshort").classList.remove("hidden");
            valid_password = false;
        }
        else{
            document.getElementById("error_pw_tooshort").classList.add("hidden");
        }

        if((!regex_lower.test(pw) || !regex_upper.test(pw) || !regex_symbol.test(pw) || !regex_number.test(pw)) && pw.length > 7){
            document.getElementById("error_pw").classList.remove("hidden");

            if(regex_lower.test(pw)){
                document.getElementById("lowercase_letters").style.color = "green";
                validation_checks++;
            }
            else {
                document.getElementById("lowercase_letters").style.color = "black";
                validation_checks--;
            }

            if(regex_upper.test(pw)){
                document.getElementById("uppercase_letters").style.color = "green";
                validation_checks++;
            }
            else {
                document.getElementById("uppercase_letters").style.color = "black";
                validation_checks--;
            }

            if(regex_number.test(pw)){
                document.getElementById("numbers").style.color = "green";
                validation_checks++;
            }
            else {
                document.getElementById("numbers").style.color = "black";
                validation_checks--;
            }

            if(regex_symbol.test(pw)){
                document.getElementById("special_chars").style.color = "green";
                validation_checks++;
            }
            else {
                document.getElementById("special_chars").style.color = "black";
                validation_checks--;
            }

            if(validation_checks > 2){
                document.getElementById("error_pw").classList.add("hidden");
                document.getElementById("error_pw_tooshort").classList.add("hidden");
                valid_password = true;
            }
            else {valid_password = false;}
        }
    }
    function verifyInput(){
        let email = document.getElementById("mail").value;
        let pw = document.getElementById("pass").value;
        let conf_pw = document.getElementById("conf_pass").value;

    }