<?php
// header it's important to access to API
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost";
$user = "root";
$password = "";
$dbname = "portfolio2";
$id = '';

// to connect with database
$con = mysqli_connect($host, $user, $password, $dbname);

// Method comes from the form in frontend file  
$method = $_SERVER['REQUEST_METHOD'];

// check if the connection failed
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
        if (isset($_GET["id"])) {
            $id = $_GET['id'];
        }
        // retrieve all records from the projects table, or if the id parameter is set, only the record with the matching id.
        $sql = "select * from projects" . ($id ? " where id=$id" : '');
        break;


    case 'POST': 
        if (isset($_GET["id"])) {
            $id = $_GET["id"];

            $title = $_POST['title'];

            $description = $_POST["description"];

            $link_github = $_POST["link_github"];
            
            $link_demo = $_POST["link_demo"];

            // check if the file uploaded field is not empty 
            // check if theere is old photo in the value if not updat with the new one 
            if (isset($_FILES["photo"]["name"])) {  // this step for update the data inside the tabel projects 
                // check file by it's extension
                $allowed = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png", "rar" => "application/rar", "pdf" => "application/pdf");
                $filename = rand(0, 1000) . $_FILES["photo"]["name"];
                $filetype = $_FILES["photo"]["type"];
                $filesize = $_FILES["photo"]["size"];
                $ext = pathinfo($filename, PATHINFO_EXTENSION);
                // this line check the file extension with allow extension
                if (!array_key_exists($ext, $allowed)) die("Error: Please select a valid file format.");
                $maxsize = 5 * 1024 * 1024;
                // check size of the file uploaded 
                if ($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
                // in this line move the file to folder photos folder 
                if (in_array($filetype, $allowed)) {
                    $result = move_uploaded_file($_FILES["photo"]["tmp_name"], "photos/" . $filename);
                } else {
                    echo "Error: There was a problem uploading your file. Please try again.";
                }
                // in this step update the value of the new project 
                $photo = $filename;
                // projects is the name of the table to update in it 
                $sql = "UPDATE projects SET title='$title', description='$description' , photo='$photo' , link_github='$link_github', link_demo ='$link_demo' WHERE id = $id";
            } else {
                // in this line if there is no photo updated so update the other values 
                $sql = "UPDATE projects SET title='$title', description='$description' , link_github='$link_github', link_demo ='$link_demo' WHERE id = $id";
            }


        } else if (isset($_GET["delete"])) { // in this line we set delete function from the table 
            $delete = $_GET['delete'];
            $sql = "DELETE FROM projects WHERE id = $delete";



        } else {  // in this step you will add a new project to your table projects 
            $title = $_POST["title"];

            $description = $_POST["description"];
            
            $allowed = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif"  => "image/gif", "png" => "image/png", "rar" => "application/rar", "pdf" => "application/pdf");
            $filename = rand(0, 1000) . $_FILES["photo"]["name"];
            $filetype = $_FILES["photo"]["type"];
            $filesize = $_FILES["photo"]["size"];
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            if (!array_key_exists($ext, $allowed)) die("Error: Please select a valid file format.");
            $maxsize = 5 * 1024 * 1024;
            if ($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
            if (in_array($filetype, $allowed)) {
                $result = move_uploaded_file($_FILES["photo"]["tmp_name"], "photos/" . $filename);
            } else {
                echo "Error: There was a problem uploading your file. Please try again.";
            }
            $photo = $filename;

            $link_github = $_POST["link_github"];
            
            $link_demo = $_POST["link_demo"];

            //  here you will add new link in this line copy the line before and add $link2 = $_POST["link2"]; 
            $sql = "insert into projects (title, description, photo, link_github, link_demo) values ('$title', '$description', '$photo' , '$link_github', '$link_demo' )"; // add '$link2'
        }
        break;
}

// run SQL statement
$result = mysqli_query($con, $sql);


// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

// to show the output of the new project or the all projects 
if ($method == 'GET') { 
    if (!$id) {
        $employeeArr = array();
        while ($row = $result->fetch_assoc()) {
            array_push($employeeArr, $row);
        }
        echo json_encode($employeeArr);
    } else {
        while ($row = mysqli_fetch_assoc($result)) {
            $output = $row;
        }
        echo json_encode($output);
    }
} elseif ($method == 'POST') {
    echo json_encode($result);
} else {

    echo mysqli_affected_rows($con);
}

$con->close();
