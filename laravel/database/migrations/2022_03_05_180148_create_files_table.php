<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('filepath', 255);
            $table->integer('filesize');
            $table->timestamps();
            // $table->foreign('id')->references('avatar_id')->on("users");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::table('files', function(Blueprint $table) {
        //     $table->dropForeign(['avatar_id']);
        // });

        Schema::table('users', function(Blueprint $table){
            Schema::dropColumn('avatar_id');
        });

        Schema::dropIfExists('files');
    }
}
