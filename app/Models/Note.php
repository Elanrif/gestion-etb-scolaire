<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Note extends Model
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
     /**
     * Get the students for the blog post.
     */
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }
      /**
     * Get the matieres for the blog post.
     */
    public function matiere(): BelongsTo
    {
        return $this->belongsTo(Matiere::class);
    }
    /**
     * Get the classes for the blog post.
     */
     public function classe()
    {
        return $this->belongsTo(Classe::class);
    }
}
