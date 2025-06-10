<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Matiere extends Model
{
        /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $guarded = [];


    public function cour() {
        return $this->hasMany(Cour::class);
    }
    /**
     * The roles that belong to the user.
     */
    public function professor(): BelongsTo
    {
        return $this->belongsTo(Professor::class);
    }

    /**
     * The roles that belong to the user.
     */
    public function classe(): BelongsTo
    {
        return $this->belongsTo(Classe::class);
    }

    /**
     * The roles that belong to the user.
     */
    public function note(): HasMany
    {
        return $this->hasMany(Note::class);
    }
}