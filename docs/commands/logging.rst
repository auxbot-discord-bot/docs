*******
Logging
*******

.. note::
	Key: <Required argument> • [Optional argument.] • (Options available for the arg.)

!a logs_set
^^^^^^^^^^^^^^
Sets the logging channel for your server.

.. code-block:: none
	:linenos:

	Aliases:
	- ls

	Usage:
	!a logs_set <CHANNEL ID>

	User Permissions:
	- administrator

	Channel Requirements:
	- text channel

!a logs_toggle
^^^^^^^^^^^^^^
Toggles the logging system in your server.

.. code-block:: none
	:linenos:

	Aliases:
	- lt

	Usage:
	!a logs_toggle [LISTENER (!a listeners)]

	User Permissions:
	- administrator

	Channel Requirements:
	none

!a logs_channel
^^^^^^^^^^^^^^^
Returns the logging channel for your server.

.. code-block:: none
	:linenos:

	Aliases:
	- lc

	Usage:
	!a logs_channel

	User Permissions:
	none

	Channel Requirements:
	none

!a logs_remove
^^^^^^^^^^^^^^
Removes the current logging channel.

.. code-block:: none
	:linenos:

	Aliases:
	- lr

	Usage:
	!a logs_remove

	User Permissions:
	administrator

	Channel Requirements:
	none