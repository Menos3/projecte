<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->string('msg');
            $table->timestamps();
        });
        Schema::table('comments', function (Blueprint $table){
            $table->unsignedBigInteger('author_id');
            $table->foreign('author_id')->references('id')->on('users');
        });
        Schema::table('comments', function (Blueprint $table){
            $table->unsignedBigInteger('ticket_id');
            $table->foreign('ticket_id')->references('id')->on('tickets');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign('author_id_foreign');
            $table->dropColumn('author_id');
        });
        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign('ticket_id_foreign');
            $table->dropColumn('ticket_id');
        });
        Schema::dropIfExists('comments');
    }
}
