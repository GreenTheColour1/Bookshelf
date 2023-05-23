This is mostly a practice application to learn new things while still being somthing I'd use.

This is a web extendion made in Typescript and bundled with Parcel to make develpment easier.

I made this extention to keep track of the last chapter I read in the novels I read online. I read a lot of transalted novels where the url of a chapter would be somthing like https://<nameoftranslator>.com/<nameofnovel>/<chapternumber> so I figured I could try and make something that would automatically keep track of the last chapter I read.

NOTE: This is still a work in progress and is not ready for use.

NOTE 2: This extention only works on Firefox as Firefox doesn't support Manifest v3 and Chromium browsers don't support Manifest v2 anymore so I just made it for the one I use

To run on your local machine:

1. Clone the repo then run `yarn add` to install the dependancies

2. Run `yarn build` to build the project

3. Run `yarn start`, then assuming you have firefox installed it should open a new firefox window with the extention installed as a temporary add-on

TODO:

1. Finish chapter data stroage

2. Style popup (Vue.js? idk yet)

3. Add page to view all novels currently being tracked and a button to jump to last chapter read

4. Make the sure the extention works well on mobile
