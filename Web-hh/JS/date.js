
                var myDate = new Date();
                    function getBeforeDate(n) {
                    var date = new Date();
                    var year, month, day;
                    date.setDate(date.getDate() - n);
                    year = date.getFullYear();
                    month = date.getMonth() + 1;
                    day = date.getDate();
                    s = year + '-' + (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day);
                    return s;
                }
                var divdate1;
                var divdate2;
                divdate1 = document.getElementsByClassName("startdate")[0];
                divdate1.setAttribute("value", getBeforeDate(7));            
                divdate2 = document.getElementsByClassName("enddate")[0];
                divdate2.setAttribute("value", myDate.toLocaleDateString());
