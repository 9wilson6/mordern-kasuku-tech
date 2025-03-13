<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->enum('role', ['admin', 'staff', 'client'])->default('client');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        // Automatically register an admin user
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'contact@kasukutech.com',
            'password' => bcrypt('admin_jx&L3w&ouxPa'),
            'role' => 'admin',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        // Automatically register an admin user
        DB::table('users')->insert([
            'name' => 'Staff',
            'email' => 'staff@kasukutech.com',
            'password' => bcrypt('staff_jx&L3w&ouxPa'),
            'role' => 'staff',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        // Automatically register an admin user
        DB::table('users')->insert([
            'name' => 'Client',
            'email' => 'client@kasukutech.com',
            'password' => bcrypt('client_jx&L3w&ouxPa'),
            'role' => 'client',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
