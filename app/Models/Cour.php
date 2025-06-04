<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cour extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $guarded = [ ];
     public function professor(): BelongsTo
    {
        return $this->belongsTo(Professor::class);
    }

     public function class(): BelongsTo
    {
        return $this->belongsTo(Classe::class);
    }

     public function matiere(): BelongsTo
    {
        return $this->belongsTo(Matiere::class);
    }
}
