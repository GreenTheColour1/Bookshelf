This is mostly a practice application to learn new things while still being something I'd use.

Goals for this project are:

1. Get more comfortable with TypeScript

2. Learn a different front-end styling tool (Haven’t decided what yet)

3. Learn how to create GitHub Actions to auto deploy code and preform linting

4. Learn how to use bundlers (In this case Parcel)

I made this extension to keep track of the last chapter I read in the novels I read online. I read a lot of translated novels where the url of a chapter would be something like https://\<nameoftranslator\>.com/\<nameofnovel\>/\<chapternumber\> so I figured I could try and make something that would automatically keep track of the last chapter I read.

NOTE: This is still a work in progress and is not ready for use.

NOTE 2: This extension only works on Firefox as Firefox doesn't support Manifest v3 and Chromium browsers don't support Manifest v2 anymore so I just made it for the one I use

To run on your local machine:

1. Clone the repo then run `yarn add` to install the dependencies

2. Run `yarn build` to build the project

3. Run `yarn start`, then assuming you have Firefox installed it should open a new Firefox window with the extension installed as a temporary add-on

TODO:

1. Finish chapter data storage

2. Style popup (Vue.js? idk yet)

3. Add page to view all novels currently being tracked and a button to jump to last chapter read

4. Make the sure the extension works well on mobile
