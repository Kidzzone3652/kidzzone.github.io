                alert('We strongly recommend you to please wear headphones or earphones! Or the sound quality will be very bitter!');

                function myFunc(){
                    var x = document.getElementById('uname');
                    var y = document.getElementById('pswrd');
                    var incorrect = document.getElementById('incorrect')
                    
                    if(x.value == "roshan")
                    {
                        
                        if(y.value == "roshan")
                            {
                            
                                //Action for true!!
                                                        
                               // var a = document.getElementById('m1');
                               // var close = document.getElementById('main');
                               // a.style.display = 'block';
                               // close.style.display = 'none'

                               window.location="Roshan.html"
                            }
                        
                            else
                            {
                                alert("Username or password is incorrect");
                                incorrect.innerHTML = "*Username or password is incorrect!";
                            
                            }
                        
                    }

                    else if(x.value == "sharleen")
                    {

                            if(y.value == "sharleen")
                            {

                              /*  var a = document.getElementById('m2');
                                var close = document.getElementById('main');
                                a.style.display = 'block';
                                close.style.display = 'none'*/
                                window.location="Sharleen.html"

                            }

                        else{
                            alert("Username or password is incorrect");
                            incorrect.innerHTML = "*Username or password is incorrect!";
                        }


                    }
                     //<!--Whoohoo!!! A century!!! * |___| *-->
                    else{
                        alert("Username or password is incorrect!");
                        incorrect.innerHTML = "*Username or password is incorrect!";
                    }
                    
                    
                }
            