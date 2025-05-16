<?php

use App\Models\User;
use App\Models\Classe;
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
            $table->foreignIdFor(User::class)->nullable()->constrained()->onDelete('cascade');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('gender');
            $table->string('matricule')->unique();
            $table->string('level');
            $table->boolean('is_validated')->default(false);
            $table->enum('activation_status',['deactivated', 'approved', 'rejected', 'cancelled'])->default('deactivated');
            $table->longText('message')->nullable();
            $table->string('relationship');
            $table->integer('number_of_absences')->default('0');
            $table->string('guardian_first_name');
            $table->string('guardian_last_name');
            $table->foreignIdFor(Classe::class)->nullable()->constrained()->onDelete('cascade');
            $table->string('guardian_email');
            $table->string('guardian_phone_number');
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
