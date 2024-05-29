<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>replit</title>
    <link href="candidates.css" rel="stylesheet" type="text/css" />
</head>
<body>

<div class="container">
    <h1>2024 Candidates</h1>
</div>

<div class="optionsContainer">
    <a href="2024_Candidates.php" class="button">2024 Candidates</a>
    <a href="CurrentIssues.php" class="button">Current Issues</a>
    
    <a href="transporation.php" class="button">Your Ride to Vote</a>
    <a href="PatriotPlatform.php" class="button">Patriot Platform</a>
    <a href="index.html" class="button">Home</a>
</div>

<div class="topContainer">
    <?php
    // Example PHP array containing candidates and their parties
    $candidates = [
        ['name' => 'Joe Biden', 'party' => 'Democratic Party'],
        ['name' => 'Donald Trump', 'party' => 'Republican Party'],
        ['name' => 'Robert F. Kennedy Jr.', 'party' => 'Democratic Party'],
        ['name' => 'Dean Phillips', 'party' => 'Democratic Party'],
        // Add more candidates as needed
    ];

    // Dynamically generate candidate sections
    foreach ($candidates as $candidate) {
        echo "<div class='{$candidate['name']}Container'>";
        echo "<h3>{$candidate['name']}</h3>";
        echo "<button id='" . strtolower(str_replace(' ', '', $candidate['name'])) . "'></button>";
        echo "<h4>Political Party: {$candidate['party']}</h4>";
        echo "</div>";
    }
    ?>
</div>

<div class="bottomContainer">
    <!-- You can similarly dynamically generate content here -->
</div>

<script src="script.js"></script>
</body>
</html>
