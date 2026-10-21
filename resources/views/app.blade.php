<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="{{ asset('images/logo-sistem.png') }}" sizes="any">
        <link rel="icon" href="{{ asset('images/logo-sistem.png') }}" type="image/png" media="(prefers-color-scheme: light)">
        <link rel="icon" href="{{ asset('images/logo-sistem-putih.png') }}" type="image/png" media="(prefers-color-scheme: dark)">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx', "resources/js/pages/{$page['component']}.jsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Desrone | SPK Pemilihan Drone') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
