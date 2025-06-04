<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Professor extends Model
{
      /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'password_confirmation',
        'phone_number',
        'employee_number',
        'status',
        'discipline',
        'experience_years',
        'level_taught',
        'additional_info',
        'address',
    ];

     /**
     * Make the relation with the user.
     *
     * @return user
     */
    public function cours() {
        return $this->hasMany(Cour::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function matieres(): HasMany
    {
        return $this->hasMany(Matiere::class);
    }

     /**
     * The users that belong to the role.
     */
    public function classes(): BelongsToMany
    {
        return $this->belongsToMany(Classe::class);
    }

}
