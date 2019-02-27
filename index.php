<!DOCTYPE html>
<html>
<head>
    <title>OSS R&D</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/plugins/bootstrap/css/bootstrap.min.css">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/slider.css">
    <link rel="stylesheet" type="text/css" href="assets/css/custom.css">
</head>
<body>

<main class="screen container-fluid active">
    <div class="row">
        <div class="col-12">
            <div class="center-head-main">
                <div class="bubble logo-bubble">
                    <img src="assets/images/logo.svg">
                </div>
                <div class="bubble bubble-with-logo-1"></div>
                <div class="bubble bubble-with-logo-2"></div>

                <div class="bubble bubble-opac"></div>

                <div class="bubble top1"></div>
                <div class="bubble top2"></div>

                <div class="bubble bottom1"></div>
                <div class="bubble bottom2"></div>
                <h1 class="text-center">Open Source Software Research & Development Center</h1>
            </div>
        </div>
    </div>
</main>

<main class="screen container-fluid">
    <div class="row">
        <div class="col-lg-6 col-12 head-div-primary first">
            <div class="center-head section-heading">
                <h1 class="text-center">Our Domains</h1>
            </div>
        </div>
        <div class="col-lg-6 col-12 content-empty-div second py-5">
            <?php require_once './helpers/domains.php' ?>
        </div>
    </div>
</main>

<main class="screen container-fluid">
    <div class="row">
        <div class="col-lg-6 col-12 content-empty-div second">
            <div class="center-head">
                <?php require_once './helpers/projects.php' ?>
            </div>
        </div>
        <div class="col-lg-6 col-12 head-div-black first">
            <div class="center-head section-heading">
                <h1 class="text-center">Our Projects</h1>
            </div>
        </div>
    </div>
</main>

<main class="screen container-fluid">
    <div class="row">
        <div class="col-lg-6 col-12 head-div-primary first">
            <div class="center-head section-heading">
                <h1 class="text-center">Center Activity Charter</h1>
            </div>
        </div>
        <div class="col-lg-6 col-12 content-empty-div second">
            <?php require_once './helpers/charter.php' ?>
        </div>
    </div>
</main>

<main class="screen container-fluid">
    <div class="row">
        <div class="col-lg-6 col-12 content-empty-div second">
            <div class="center-head">
                <?php require_once './helpers/events.php' ?>
            </div>
        </div>
        <div class="col-lg-6 col-12 head-div-black first">
            <div class="center-head section-heading">
                <h1 class="text-center">Events</h1>
            </div>
        </div>
    </div>
</main>

<main class="screen container-fluid">
    <div class="row">
        <div class="col-lg-6 col-12 head-div-primary first">
            <div class="center-head section-heading">
                <h1 class="text-center">Our Team</h1>
            </div>
        </div>
        <div class="col-lg-6 col-12 content-empty-div second">
            <?php require_once './helpers/team.php' ?>
        </div>
    </div>
</main>

<main class="screen container-fluid">
    <div class="row">
        <div class="col-lg-6 col-12 content-empty-div second">
            <?php require_once './helpers/alumni.php' ?>

        </div>
        <div class="col-lg-6 col-12 head-div-black first">
            <div class="center-head section-heading">
                <h1 class="text-center">Alumini</h1>
            </div>
        </div>
    </div>
</main>

<main class="screen container-fluid">
    <div class="row">
        <div class="col-12 head-div-primary">
            <div class="center-head">
                <h2 class="text-center">&copy; 2019 OSS R&D Centre, Founder Team</h2>
            </div>
        </div>
    </div>
</main>

<script src="assets/plugins/jquery/jquery-3.3.1.min.js"></script>
<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/slider.js"></script>
<script src="assets/js/custom.js"></script>
</body>
</html>