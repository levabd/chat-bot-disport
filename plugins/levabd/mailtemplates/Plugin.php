<?php namespace Levabd\MailTemplates;

use Backend;
use System\Classes\PluginBase;

/**
 * mail_templates Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'mailtemplates',
            'description' => 'Mail templates for using on site',
            'author'      => 'Oleg Levitsky',
            'icon'        => 'icon-envelope'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    public function registerMailTemplates()
    {
        return [
            'levabd.mailtemplates::mail.order' => 'Нова заявка з сайту.'
        ];
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return []; // Remove this line to activate

        /*return [
            'Levabd\MailTemplates\Components\MyComponent' => 'myComponent',
        ];*/
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        /*return [
            'levabd.mail_templates.some_permission' => [
                'tab' => 'mail_templates',
                'label' => 'Some permission'
            ],
        ];*/
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return []; // Remove this line to activate

        /*return [
            'mail_templates' => [
                'label'       => 'mail_templates',
                'url'         => Backend::url('levabd/mail_templates/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['levabd.mail_templates.*'],
                'order'       => 500,
            ],
        ];*/
    }
}
