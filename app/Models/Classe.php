<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Classe extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $guarded = [];

     /**
     * The roles that belong to the user.
     */
      public function cours() {
        return $this->hasMany(Cour::class);
    }
    
    public function students(): HasMany
    {
        return $this->hasMany(Student::class);
    }

     /**
     * The users that belong to the role.
     */
    public function professors(): BelongsToMany
    {
        return $this->belongsToMany(Professor::class);
    }

    /**
     * The roles that belong to the user.
     */
    public function matieres(): HasMany
    {
        return $this->hasMany(Matiere::class);
    }

     /**
     * The roles that belong to the user.
     */
    public function notes(): HasMany
    {
        return $this->hasMany(Note::class);
    }
}
