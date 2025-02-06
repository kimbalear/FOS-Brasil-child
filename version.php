<?php
/**
 * Plugin version and other meta-data are defined here.
 *
 * @package     theme_fos_space1
 * @copyright   2024 digital Mood  <findme@digital-mood.eu>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$plugin->component = 'theme_fosbrazil';
$plugin->release = '1.1';
$plugin->version = 2025000001;
$plugin->requires = 2022112800;
$plugin->maturity = MATURITY_RC;
$plugin->dependencies = [
    'theme_boost' => 2022112800,
];