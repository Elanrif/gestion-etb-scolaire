# gestion-etb-scolaire

Laravel folder project

```bash

📂 GESTION-ETB-SCOLAIRE
├── 📂 app
│ ├── 📂 Http
│ │ ├── 📂Controllers
│ │ │   ├── UserController.php
│ ├─  📂Models
│ │     ├── User.php
├── 📂resources
│ ├──📂 css
| ├──📂 js
| ├   |───📂pages
| ├   |───── welcome.tsx
| ├──📂 views
├── 📂 routes
│ ├── web.php

```

```bash
    composer dump-autoload
    php artisan cache:clear
    php artisan config:clear
    php artisan route:clear

```

# Laravel Installation

To install [https://laravel.com/docs/12.x/installation] Laravel on Windows, follow the steps below:

1. Open PowerShell as an administrator.

```bash
   # Run as administrator...
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
```

```bash
    # Install the Laravel Installer
    composer global require laravel/installer
```

2. Creating an Application

```bash
    laravel new example-app
```

```bash
    # One the application created, start local development server
    cd example-app
    npm install && npm run build
    composer run dev
```

# Laravel Starter kits

The **Laravel React Starter Kit** provides a robust, modern starting point for building Laravel applications with a React frontend using Inertia.

- [Laravel React Starter Kit](https://laravel.com/docs/12.x/starter-kits#react)
- [Inertia](https://inertiajs.com/)
- [React](https://fr.react.dev/)
- [Shadcn](https://ui.shadcn.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

# Create Migrations, Controllers, ... Request

Laravel includes [Eloquent, an object-relational mapper (ORM)](https://laravel.com/docs/12.x/eloquent) that makes it enjoyable to interact with your database. When using Eloquent, each database table has a corresponding "Model" that is used to interact with that table.

```bash
    # Generate a model and a migration
    php artisan make:model User --migration --controller --resource --requests
    php artisan make:model User -mcrR

    # Generate a migration(table): It's a mandatory to add 'S' end of the name like user(s)
    php artisan make:migration create_[users]_table # exp: php artisan make:migraiton create_students_migraitons
    # Generate a Controller
    php artisan make:controller UserController -r # exp: php artisan make:controller StudentController

    # Generate a Request
    php artisan make:request StoreUserRequest # exp: php artisan make:request StoreStudentRequest
    php artisan make:request UpdateUserRequest # exp: php artisan make:request UpdateStudentRequest

    # Generate a pivot model...
    php artisan make:model Member --pivot
    php artisan make:model Member -p

    # Create enum
    php artisan make:enum RoleName
```

# RelationsShip Notes

💡 Prenons exemple de USER et SECRETARY Ce qui compte :

```bash

    Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            .....
            $table->timestamps();
        });

    Schema::create('secretaries', function (Blueprint $table) {
        $table->id();
        # foreignKey user_id()
        $table->foreignIdFor(User::class)->constrained()->onDelete('cascade');
        ....
        $table->timestamps();
    });

```

    C’est le modèle qui "possède" l’autre qui a le has[RelationType].
    📌 Et c’est le modèle qui contient la clé étrangère qui a le belongsTo.

    🔁 Exemple dans ton cas :
    Tu as une table secretaries avec une colonne user_id.
    Donc :

```bash

    # Le modèle User ne contient pas de clé, mais possède un Secretary → il fait un hasOne(Secretary::class)
    class User extends Authenticatable
    {
        /**
        * Make the relation with the secretary.
        *
        * @return secretary
        */
        public function secretary()
        {
            return $this->hasOne(Secretary::class);
        }
    }

    #  Le modèle Secretary contient la clé étrangère user_id → il fait un belongsTo(User::class)
    class Secretary extends Model
    {
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

```

## Display Laravel Routes

[The command allows us](https://stillat.com/blog/2016/12/07/laravel-artisan-route-command-the-routelist-command) to display all routes in laravel is showed below.

```bash
    # Display all routes
    php artisan route:list

    # Filter by name
    php artisan route:list --name=posts
```

# Manage migrations rollback, reset ...

If you have made changes to a column in an existing migration or something else and want to reapply all migrations to update your database structure, here are the steps to follow:

```bash
    #Sumarize uses command :
    php artisan migrate:refresh

    php artisan migrate:rollback

    php artisan migrate:reset


```

## Run migrations

Laravel run migrations from this command below

```bash
    php artisan migrate
```

## Create RESTfull API and Exclude Csrf token

Sometimes you may wish to [exclude a set of URIs from CSRF protection](https://laravel.com/docs/12.x/csrf#csrf-excluding-uris). For example, if you are using Stripe to process payments...

```bash
    php artisan make:controller Api/PostController --api
```

## Clear cache

Sometimes your need to clear laravel caches and run projects

```bash
    # Clear cache
    php artisan cache:clear
    php artisan config:clear
    php artisan route:clear
    php artisan view:clear
    php artisan optimize:clear

    # After that run the project
    php artisan serve

```

# The public disk

The [public disk](https://laravel.com/docs/12.x/filesystem) included in your application's filesystems configuration file is intended for files that are going to be publicly accessible.
By stores its files in storage/app/public.

```bash
    # Storage link
    php artisan storage:link
```

# Inertia router, Manual visits

It's also possible [to manually make Inertia visits](https://inertiajs.com/manual-visits#method) / requests programmatically via JavaScript.
This is accomplished via the router.visit() method.
However, it's generally more convenient to use one of Inertia's shortcut request methods.
These methods share all the same options as router.visit().

```bash

    import { router } from '@inertiajs/react'

    router.get(url, data, options)
    router.post(url, data, options)
    router.put(url, data, options)
    router.patch(url, data, options)
    router.delete(url, options)
    router.reload(options) // Uses the current URL

```

# Dayjs

[Day.js](https://day.js.org/en/) is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.

[Format](https://day.js.org/docs/en/display/format), Get the formatted date according to the string of tokens passed in.

[Time fron now](https://day.js.org/docs/en/display/from-now), returns the string of relative time from now.

```bash
    # Get the formatted date according to the string of tokens passed in.
    # To escape characters, wrap them in square brackets (e.g. [MM]).

    dayjs().format()
    # current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

    {dayjs(classe.created_at).format('dddd D MMMM YYYY [à] H[h]mm')}
    # dimanche 20 avril 2025 à 23h23

    dayjs('2019-01-25').format('YYYY-MM-DD [à] HH:mm:ss')
    # 'YYYYescape 2019-01-25T00:00:00-02:00Z'

    dayjs('2019-01-25').format('DD/MM/YYYY') # '25/01/2019'

    # This requires the RelativeTime plugin to work
    dayjs.extend(relativeTime)

    dayjs('1999-01-01').fromNow() // 22 years ago

```

# Custom Middleware
Ce lien [🔗 Regarder la vidéo sur YouTube](https://www.youtube.com/watch?v=hjRz0NASyrQ) vous guide étape par étape dans la création d’un middleware personnalisé en JavaScript/Node.js. Vous y découvrirez comment intercepter les requêtes HTTP, ajouter des fonctionnalités personnalisées (comme des logs, la validation, ou l’authentification), et intégrer proprement ce middleware dans votre application Express.

```bash
    # make middleware.
    php artisan make:middleware LogRequests().format()

```
