<?php
/**
 * This class provides the code to create the form that allows
 * for data entry of entities that should be acknowledged in publications
 *
 * PHP Version 7
 *
 * @category BigBrain
 * @package  Main
 * @author   Justin Kat <justin.kat@mail.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://github.com/aces/Loris
 */
namespace LORIS\brainsurfaces;

/**
 * This class provides the code to create the form that allows
 * for data entry of entities that should be acknowledged in publications
 *
 * PHP Version 7
 *
 * @category BigBrain
 * @package  Main
 * @author   Justin Kat <justin.kat@mail.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://github.com/aces/Loris
 */

class Brainsurfaces extends \NDB_Page
{
//    public $skipTemplate = true;

    /**
     * Determine whether user should be granted access.
     *
     * @param \User $user The user whose access is being checked
     *
     * @return bool
     */
    function _hasAccess(\User $user) : bool
    {
        return true;
    }

//    function getCSSDependencies()
//    {
//        $factory = \NDB_Factory::singleton();
//        $baseurl = $factory->settings()->getBaseURL();
//
//        $files = array(
//            $baseurl . "/bootstrap/css/bootstrap.min.css",
//            $baseurl . "/bootstrap/css/custom-css.css",
//            $baseurl . "/js/jquery/datepicker/datepicker.css",
//            $baseurl . '/vendor/sweetalert/sweetalert.css',
//            $baseurl . '/main.css',
//        );
//        return $files;
//    }

}
