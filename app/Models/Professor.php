<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
        'experience_year',
        'level_taught',
        'additional_info',
        'address',
    ];

     /**
     * Make the relation with the user.
     *
     * @return user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function matieres(): HasMany
    {
        return $this->hasMany(Matiere::class);
    }
}
