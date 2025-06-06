<?php

use App\Models\Classe;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Student;
use App\Models\Matiere;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Student::class)->nullable()->constrained()->onDelete('cascade');
            $table->foreignIdFor(Classe::class)->nullable()->constrained()->onDelete('cascade');
            $table->foreignIdFor(Matiere::class)->nullable()->constrained()->onDelete('cascade');
            $table->string('note');
            $table->string('trimestre');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};
