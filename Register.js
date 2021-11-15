    function verifyUsername(){
        var valid_username = false;
        let username = document.getElementById("nick").value;
        let regex = /^\w*$/;

        if(username.length < 5 && username.length > 0){
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
        let pw = document.getElementById("pass").value;
        let regex_lower = /[a-z]/;
        let regex_upper = /[A-Z]/;
        let regex_symbol = /(?=.*[!@#$%^&*])/;
        let regex_number = /[0-9]/;

        if(pw.length < 8 && pw.length > 0){
            document.getElementById("error_pw_tooshort").classList.remove("hidden");
        }
    }
    function verifyInput(){
        let email = document.getElementById("mail").value;
        let pw = document.getElementById("pass").value;
        let conf_pw = document.getElementById("conf_pass").value;

    }