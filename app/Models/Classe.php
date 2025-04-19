<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class);
    }
}
