<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('models', function (Blueprint $table) {
            $table->id();
            $table->string('manufacturer', 30);
            $table->string('model', 30);
            $table->decimal('price', 10, 2);
            $table->unsignedBigInteger('photo_id');
            $table->foreign('photo_id')->references('id')->on('files');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('models', function(Blueprint $table) {
            $table->dropForeign(['photo_id']);
        });

        Schema::table('models', function(Blueprint $table) {
            $table->dropForeign(['category_id']);
        });

        Schema::dropIfExists('models');
    }
}
