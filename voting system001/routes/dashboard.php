<?php
    session_start();
    if (!isset($_SESSION['userdata'])) {
        header("location: ../");
        exit; 
    }

    $userdata = $_SESSION['userdata'];

    $groupsdata = $_SESSION['groupsdata'];

    if ($_SESSION['userdata']['status'] == 0) {
        $status = '<b style="color: red;">Not Voted</b>'; // Corrected closing tag and added semicolon
    } else {
        $status = '<b style="color: green;">Voted</b>'; // Corrected closing tag and added semicolon
    }
    


?>


<html>

    <!-- Header -->
    <header>
        <img src="logo.jpg" alt="Department Logo" class="logo">
        <h1>Department of csai</h1>
        <a href="logout.php"><button id="logoutbtn">  Logout</button></a>
    </header>

    <head>
        <title>Online Voting System - Dashboard</title>
        <link rel="stylesheet" href="dashboardstyle.css">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="home.css">                  
    </head>
    <body>

        <style>
            #backbtn{
                padding: 5px;
                font-size: 15px;
                background-color: #3498db;
                color: white;
                border-radius: 5px;
                float: left;
            }

            #logoutbtn {
                padding: 5px;
                font-size: 15px;
                background-color: #3498db;
                color: white;
                border-radius: 5px;
                position: absolute; /* Absolute positioning within the header */
                right: 10px; /* Moves it 10px from the right edge */
                top: 50%; /* Centers vertically */
                transform: translateY(-50%); /* Adjust for vertical alignment */
            }


            #Profile {
                background-color: #FEFBD7;
                width: 30%;
                padding: 20px;
                float: left;
                border-radius: 5%;
                margin-top: 220px; /* Adjust this value to move the element further down */
                font-family: 'Comic Sans MS', cursive, sans-serif; /* Comic Sans font */
                font-size: 16px; /* Font size */
                font-weight: bold; /* Makes text bold */
                color: #333; /* Text color */
                border: 2px solid #3498db; /* Blue border */
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); /* Adding box shadow */
            }

            #Group {
                background-color: #FEFBD7;
                width: 50%;
                padding: 20px;
                float: right;
                border-radius: 5%;
                font-family: 'Comic Sans MS', cursive, sans-serif; /* Comic Sans font */
                font-size: 16px; /* Font size */
                font-weight: normal; /* Font weight */
                color: #444; /* Text color */
                border: 2px solid #3498db; /* Blue border */
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); /* Adding box shadow */
            }


            #votebtn{
                padding: 5px;
                font-size: 15px;
                background-color: #3498db;
                color: white;
                border-radius: 5px;
                float: left;
                border-radius: 5px;
            }

            #mainSection{
                padding: 10px;

            }

            #mainpanel{
                padding: 10px;

            }

            #voted{
                padding: 5px;
                font-size: 15px;
                background-color: green;
                color: white;
                border-radius: 5px;
            }

        </style>


        <div id="mainSection">
          

            <div id = "mainpanel">
                
            <div id="Profile">
                <center>
                <div style="font-family: 'Comic Sans MS', cursive, sans-serif; font-size: 16px;">
                    <b style="background: linear-gradient(to right, #ff33cc, #ffcc00); -webkit-background-clip: text; color: transparent;">Name: </b> <?php echo $userdata['name'] ?> <br><br>
                    <b style="background: linear-gradient(to right, #ff33cc, #ffcc00); -webkit-background-clip: text; color: transparent;">USN: </b> <?php echo $userdata['USN'] ?> <br><br>
                    <b style="background: linear-gradient(to right, #ff33cc, #ffcc00); -webkit-background-clip: text; color: transparent;">status: </b> <?php echo $status ?> <br><br>
                </div>
                </center>
            </div>


                <div id="Group">
                    <?php 
                        if($_SESSION['groupsdata']){
                            for($i=0; $i<count($groupsdata);$i++){
                                ?>
                                <div>
                                    <div style="font-family: 'Comic Sans MS', cursive, sans-serif; font-size: 16px;">
                                        <b style="background: linear-gradient(to right, #ff33cc, #ffcc00); -webkit-background-clip: text; color: transparent;">CANDIDATE NAME: </b> <?php echo $groupsdata[$i]['name'] ?> <br><br>
                                        <b style="background: linear-gradient(to right, #ff33cc, #ffcc00); -webkit-background-clip: text; color: transparent;">USN: </b> <?php echo $groupsdata[$i]['USN'] ?> <br><br>
                                        <b style="background: linear-gradient(to right, #ff33cc, #ffcc00); -webkit-background-clip: text; color: transparent;">VOTES: </b> <?php echo $groupsdata[$i]['votes'] ?> <br><br>
                                    </div>

                                    <form action="../api/vote.php" method="POST" >

                                        <input type="hidden" name="gvotes" value=" <?php echo $groupsdata[$i]['votes'] ?> ">
                                        <input type="hidden" name="gid" value="<?php echo $groupsdata[$i]['USN'] ?>">
                                        <?php
                                            if($_SESSION['userdata']['status']==0){
                                                ?>
                                                <input type="submit" name="votebtn" value="vote" id="votebtn">
                                                <?php
                                            }
                                            else{
                                                ?>
                                                <button disabled type="button" name="votebtn" value="vote" id="voted"> Voted </button>

                                                <?php
                                            }

                                        ?>
                                        


                                        
                                    </form>
                                </div><br>
                                <hr>

                                <?php
                            }
                        }
                        else{

                        }
                    ?>
                </div>
            </div>
        </div>

         <!-- Footer -->
        
         <footer style="text-align: center; padding: 10px; background-color: #333; color: white; position: fixed; bottom: 0; width: 100%; display: flex; justify-content: space-around; align-items: center;">
            <button onclick="navigateTo('../../public/about.html')" style="background-color: transparent; border: none; color: white; font-size: 20px; cursor: pointer;">
                <i class="fa-solid fa-circle-info" style="color: #f7f7f8;"></i>
            </button>

            <button onclick="navigateTo('../../public/home.html')" style="background-color: transparent; border: none; color: white; font-size: 20px; cursor: pointer;">
                <i class="fa-solid fa-house" style="color: #ffffff;"></i>
            </button>

            <button onclick="navigateTo('../../public/profile.html')" style="background-color: transparent; border: none; color: white; font-size: 20px; cursor: pointer;">
                <i class="fa-solid fa-user" style="color: #ffffff;"></i>
            </button>
        </footer>

        <style>
            /* Hover effect for buttons */
            footer button:hover {
                opacity: 0.7;
            }
        </style>
        <script src="home.js"></script>

        <script>
        function navigateTo(path) {
            window.location.href = encodeURI(path);  // Handles the navigation
        }
        </script>

        
    </body>
</html>
