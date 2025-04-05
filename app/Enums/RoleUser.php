<?php

namespace App\Enums;

enum RoleUser: string
{
    case ADMIN = 'ADMIN';
    case PROFESSOR = 'PROFESSOR';
    case SECRETARY = 'SECRETARY';
    case STUDENT = 'STUDENT';
    case USER = 'USER';
    
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
