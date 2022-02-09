<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subject extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function users() 
    {
        return $this->belongsToMany(User::class, 'user_subjects');
    }

}
