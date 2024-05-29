<!DOCTYPE html>
<html>
<head>
  <title>2024 Candidates</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>

<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Party Affiliation</th>
    <th>Years of Political Experience</th>
    <th>Most Recent Position</th>
  </tr>
  <?php
  // Connect to the database
  $conn = mysqli_connect("localhost", "root", "", "election_candidates");

  // Check connection
  if ($conn -> connect_error){
    die("Connection failed: " . $conn -> connect_error);
  }

  // Fetch data from the database
  $sql = "SELECT * FROM candidate_information";
  $result = $conn -> query($sql);

  if ($result -> num_rows > 0){
    // Output data of each row
    while($row = $result -> fetch_assoc()){
      echo "<tr><td>" . $row["candidate_name"] . "</td><td>" . $row["age"] . "</td><td>" . $row["party_affiliation"] . "</td><td>" . $row["years_of_political_experience"] . "</td><td>" . $row["most_recent_position"] . "</td></tr>";
    }
    echo "</table>";
  } else {
    echo "0 results";
  }

  // Close connection
  $conn -> close();
  ?>
</table>

</body>
</html>
