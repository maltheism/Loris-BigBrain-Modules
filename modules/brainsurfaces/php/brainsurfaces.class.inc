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
    public $skipTemplate = true;

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

    /**
     * Gathers JS dependencies and merge them with the parent
     *
     * @return array of javascript to be inserted
     */
    function getJSDependencies()
    {
        $factory = \NDB_Factory::singleton();
        $baseURL = $factory->settings()->getBaseURL();
        $deps    = parent::getJSDependencies();
        return array_merge(
            $deps,
            array(
                $baseURL . '/brainsurfaces/js/index.js',
            )
        );
    }

}
