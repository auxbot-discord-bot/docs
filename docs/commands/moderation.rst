**********
Moderation
**********

.. note::
	Key: <Required argument> • [Optional argument.] • (Options available for the arg.)

!a change_nickname
^^^^^^^^^^^^^^^^^^
Changes a members nickname.

.. code-block:: none
	:linenos:

	Aliases:
	- cn

	Usage:
	!a change_nickname <MEMBER> <NICKNAME>

	User Permissions:
	- manage nicknames

	Channel Permissions:
	none

!a ban
^^^^^^
Bans a member from the server.

.. code-block:: none
	:linenos:

	Aliases:
	none

	Usage:
	!a ban <MEMBER> [REASON]

	User Permissions:
	- ban members

	Channel Permissions:
	none

!a kick
^^^^^^^
Kicks a member from the server.

.. code-block:: none
	:linenos:

	Aliases:
	none

	Usage:
	!a kick <MEMBER> [REASON]

	User Permissions:
	- kick members

	Channel Permissions:
	none

!a purge
^^^^^^^^
Deletes specified amount of messages.

.. code-block:: none
	:linenos:

	Aliases:
	none

	Usage:
	!a purge <NUMBER (Max of 70.)>

	User Permissions:
	- manage messages

	Channel Permissions:
	none

!a soft_ban
^^^^^^^^^^^
Soft bans a member from the server.

.. code-block:: none
	:linenos:

	Aliases:
	- sb

	Usage:
	!a soft_ban <MEMBER> [REASON]

	User Permissions:
	- ban members

	Channel Permissions:
	none

!a unban
^^^^^^^^
Unbans a user from the server.

.. code-block:: none
	:linenos:

	Aliases:
	none

	Usage:
	!a unban <MEMBER ID> [REASON]

	User Permissions:
	- ban members

	Channel Permissions:
	none

!a warn
^^^^^^^
Warns a member from the server.

.. code-block:: none
	:linenos:

	Aliases:
	none

	Usage:
	!a warn <MEMBER> [REASON]

	User Permissions:
	- manage messages

	Channel Permissions:
	none

!a clear_warns
^^^^^^^^^^^^^^
Clears a members warns in the server.

.. code-block:: none
	:linenos:

	Aliases:
	- cw

	Usage:
	!a clear_warns <MEMBER>

	User Permissions:
	- manage messages

	Channel Permissions:
	none

!a user_warns
^^^^^^^^^^^^^
Returns the warns for the mentioned member.

.. code-block:: none
	:linenos:

	Aliases:
	uw

	Usage:
	!a user_warns <MEMBER>

	User Permissions:
	- manage messages

	Channel Permissions:
	none

!a mute
^^^^^^^
Mutes the mentioned member.

.. code-block:: none
	:linenos:

	Aliases:
	none

	Usage:
	!a mute <MEMBER> [REASON]

	User Permissions:
	- manage messages

	Channel Permissions:
	none

!a unmute
^^^^^^^^^
Unmutes the mentioned member.

.. code-block:: none
	:linenos:

	Aliases:
	none

	Usage:
	!a unmute <MEMBER>

	User Permissions:
	- manage messages

	Channel Permissions:
	none

!a warns_before_ban
^^^^^^^^^^^^^^^^^^^
Sets the amount of warns before ban.

.. code-block:: none
	:linenos:

	Aliases:
	- wbb

	Usage:
	!a warns_before_ban <NUMBER>

	User Permissions:
	- administrator

	Channel Permissions:
	none

!a current_warns_before_ban
^^^^^^^^^^^^^^^^^^^^^^^^^^^
Sets the amount of warns before ban.

.. code-block:: none
	:linenos:

	Aliases:
	- wbb

	Usage:
	!a warns_before_ban <NUMBER>

	User Permissions:
	- administrator

	Channel Permissions:
		none

!a nsfw_toggle
^^^^^^^^^^^^^^^^^^^
Toggles the nsfw commands for the server.

.. code-block:: none
	:linenos:

	Aliases:
	- nt

	Usage:
	!a nsfw_toggle

	User Permissions:
	- administrator

	Channel Permissions:
	none

!a current_nsfw_toggle
^^^^^^^^^^^^^^^^^^^^^^
Returns the status of the nsfw commands.

.. code-block:: none
	:linenos:

	Aliases:
	- cnt

	Usage:
	!a current_nsfw_toggle

	User Permissions:
	none

	Channel Permissions:
	none

!a level_toggle
^^^^^^^^^^^^^^^
Toggles the level system for the server.

.. code-block:: none
	:linenos:

	Aliases:
	- lvlt

	Usage:
	!a level_toggle

	User Permissions:
	administrator

	Channel Permissions:
	none

!a current_level_toggle
^^^^^^^^^^^^^^^^^^^^^^^
Returns the status of the level system.

.. code-block:: none
	:linenos:

	Aliases:
	- clvlt

	Usage:
	!a current_level_toggle

	User Permissions:
	none

	Channel Permissions:
	none