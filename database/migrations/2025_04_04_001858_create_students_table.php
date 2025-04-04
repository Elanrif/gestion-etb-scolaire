<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('first_name:');
            $table->string('last_name:');
            $table->string('gender');
            $table->longText('matricule');
            $table->timestamp('birthday', precision: 0);
            $table->string('class');
            $table->integer('average');
            $table->integer('number_of_absences');
            $table->string('email');
            $table->string('address');
            $table->string('full_name_parents');
            $table->string('phone_parents');
            $table->string('image_url');
            $table->longText('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
