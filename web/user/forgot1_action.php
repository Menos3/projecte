<?php

if(!empty($_POST)) {

    if(!empty($_POST["email"])) {

        My\Mail::send("email");
    }
}