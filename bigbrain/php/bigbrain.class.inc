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
namespace LORIS\bigbrain;

/**
 * This class provides the code to create the form that allows
 * for data entry of entities that should be acknowledged in publications
 *
 * PHP Version 7
 *
 * @category Behavioural
 * @package  Main
 * @author   Justin Kat <justin.kat@mail.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://github.com/aces/Loris
 */

class Bigbrain extends \NDB_Page
{
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

}
