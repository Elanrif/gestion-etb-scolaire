<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $guarded = [];

     /**
     * Make the relation with the user.
     *
     * @return user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
