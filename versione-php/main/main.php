<?php 
include __DIR__ .  "/../database/database.php";
?>

<main>
    <div class="container content">
        <?php foreach($database as $data) {?>
            <div class="box">
                <ul>
                    <li><img src="<?php echo $data["poster"]?>" alt=""></li>
                    <li><?php echo $data["title"] ?></li>
                    <li><?php echo $data["author"] ?></li>
                    <li><?php echo $data["year"] ?></li>
                    <li><?php echo $data["genre"] ?></li>
                </ul>
            </div>
        <?php } ?>
    </div>
</main>
