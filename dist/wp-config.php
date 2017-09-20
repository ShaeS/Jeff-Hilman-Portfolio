<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hawthorne');

/** MySQL database username */
define('DB_USER', 'ShaeScotten');

/** MySQL database password */
define('DB_PASSWORD', 'Samurai1');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'GVm,flGZ=>/(hS1K#7)#ljV<Qgr9|mSp`OK0>RVs.Wj F+W@>5lsR@,f;P5/iIZ_');
define('SECURE_AUTH_KEY',  '?AR/@]fs}ZqmV?b{2h5cIp~qh^+Y)nmw@qdcb)qSB,bbUH5c%WRrUm_5mH>Hd`4[');
define('LOGGED_IN_KEY',    'x!%>Y1_BAYM&o_M(boV.zA@I&[^>8IWPS-j??x[%skkkVbwxT_cXP_5x.[-w}4qc');
define('NONCE_KEY',        ' Z**qWE)(2L>?czdoN]@vv}D3>UG>qHxLHevB>tYAUuSTm1)Gt*G(`-B$<{!@S%8');
define('AUTH_SALT',        'eY^n 9C?-$J@dm0d4xhh{4[n&y9}jp?@T>]:K>bBPs]u%w7)EV1 6bjKA4UmaAeZ');
define('SECURE_AUTH_SALT', '|Y=A-_G5znom}Wvs%U7x6i_K`N(,%WcT<Par)cl[(HLBrn*EFS4Lus/gyaSRT.>k');
define('LOGGED_IN_SALT',   'k+,>TXJL2]/Vr!(Nb3vZlq#${+%E(0 F-q42)1 EtAFNW*g#JDR <2kmG4.kH&Cp');
define('NONCE_SALT',       '`WQM;C{N=$THE+c.{Ka*N>y|({*sn2gb2/5esnZM80O|.iTu98H<%R[bSn:Wv~qI');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
