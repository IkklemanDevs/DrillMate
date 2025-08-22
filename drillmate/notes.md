https://www.npmjs.com/package/emoji-picker-element#examples     -- Emoji Picker Docs




Nav Bar workflow test
_____________________


Nav bar gets loaded in by toggleNav(),

Check/Maintain navbarState() --- upon actions the navbar state gets stored in here and called upon each action.

NavbarController() simply opens/closes navbar with opacity control. This should check with navbarState() to decide on actions

Once opened (navbarController()) then calls navbarListener() to decide on page navigation.

Within navbarListener() send a verified action back to navbarState which then closes and stores state.